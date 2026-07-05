/**
 * Sidebar scroll-spy.
 *
 * Watches `.subcategory-section` elements and highlights the matching
 * `.sidebar-link[data-target="<id>"]` when a section enters the viewport.
 *
 * Mounted automatically when imported; safe to include in any page that
 * has both `.sidebar-link` anchors and `.subcategory-section` targets.
 */
export function initScrollSpy(): void {
  const links = document.querySelectorAll<HTMLAnchorElement>('.sidebar-link');
  const sections = document.querySelectorAll<HTMLElement>('.subcategory-section');

  if (links.length === 0 || sections.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const id = entry.target.id;
        links.forEach((link) => {
          const matches = link.getAttribute('data-target') === id;
          link.classList.toggle('text-pink-500', matches);
          link.classList.toggle('font-bold', matches);
          link.classList.toggle('bg-white/5', matches);
          link.classList.toggle('text-neutral-400', !matches);
        });
      }
    },
    {
      root: null,
      // Trigger when the section is near the top of the viewport.
      rootMargin: '-10% 0px -80% 0px',
      threshold: 0,
    },
  );

  sections.forEach((section) => observer.observe(section));
}

// Auto-mount on the client. Astro bundles this and ships it as a module
// script, so it won't run during SSR.
initScrollSpy();