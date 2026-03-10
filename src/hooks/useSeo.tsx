import { useEffect } from 'react';

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

export function useSeo({ title, description, keywords, canonical }: SeoProps) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    if (description) {
      let descTag = document.querySelector('meta[name="description"]');
      if (!descTag) {
        descTag = document.createElement('meta');
        descTag.setAttribute('name', 'description');
        document.head.appendChild(descTag);
      }
      descTag.setAttribute('content', description);
    }
    if (keywords) {
      let keywordsTag = document.querySelector('meta[name="keywords"]');
      if (!keywordsTag) {
        keywordsTag = document.createElement('meta');
        keywordsTag.setAttribute('name', 'keywords');
        document.head.appendChild(keywordsTag);
      }
      keywordsTag.setAttribute('content', keywords);
    }
    // Canonical URL
    if (typeof window !== 'undefined') {
      let canonicalTag = document.querySelector('link[rel="canonical"]');
      if (!canonicalTag) {
        canonicalTag = document.createElement('link');
        canonicalTag.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalTag);
      }
      canonicalTag.setAttribute('href', canonical || window.location.origin + window.location.pathname);
    }
  }, [title, description, keywords, canonical]);
}