import { useTexture } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { PROJECTS_DATA } from '../data/projects';
import { STUDIO_DATA } from '../data/studioContent';
import { AWARDS_DATA } from '../data/awards';

export const isSanityConfigured = true;

// Synchronous local portfolio cache
const cache = {
    projects: PROJECTS_DATA,
    content: STUDIO_DATA,
    awards: AWARDS_DATA,
    loading: false,
    loaded: true,
    error: null,
};

const preloadBrowserImage = (path) => {
    if (typeof window === 'undefined' || !path) return;
    const img = new Image();
    img.src = path;
};

const supportsHover = typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;

export function loadSanityData() {
    if (cache.projects) {
        cache.projects.forEach(p => {
            if (p.front) {
                try { useTexture.preload(p.front); } catch {}
                preloadBrowserImage(p.front);
            }
            if (p.painted && supportsHover) {
                try { useTexture.preload(p.painted); } catch {}
                preloadBrowserImage(p.painted);
            }
        });
    }

    if (cache.content) {
        cache.content.forEach(c => {
            if (c.frontTexture) {
                try { useLoader.preload(TextureLoader, c.frontTexture); } catch {}
                preloadBrowserImage(c.frontTexture);
            }
            if (c.paintedFrontTexture && supportsHover) {
                try { useLoader.preload(TextureLoader, c.paintedFrontTexture); } catch {}
                preloadBrowserImage(c.paintedFrontTexture);
            }
        });
    }

    if (cache.awards) {
        Object.values(cache.awards).forEach(category => {
            category.items?.forEach(item => {
                if (item.image) {
                    preloadBrowserImage(item.image);
                }
            });
        });
    }

    return Promise.resolve(cache);
}

export function isSanityDataLoaded() {
    return true;
}

export function useGalleryProjects() {
    return cache.projects;
}

export function useStudioContent() {
    return cache.content;
}

export function useAwards() {
    return cache.awards;
}

// Preload assets
loadSanityData();
