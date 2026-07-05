/**
 * Theme toggle (dark/light).
 *
 * Reads the initial theme from localStorage (or falls back to 'dark'), applies
 * it to `<html data-theme="...">`, and listens for clicks on the
 * `#theme-toggle` button to flip between themes.
 *
 * The initial script that applies the theme *before* paint is still inline in
 * `Layout.astro` to avoid a flash of wrong theme; this file only handles the
 * toggle interaction.
 */
export function initThemeToggle(): void {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* localStorage may be unavailable (private mode, etc.) — ignore. */
    }
  });
}

initThemeToggle();