/**
 * Percor Main JavaScript
 * Core interactions for percor.no Shopify theme
 */

(function() {
  'use strict';

  // --- Mobile Menu ---
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const headerNav = document.querySelector('.site-header__nav');

  if (mobileToggle && headerNav) {
    mobileToggle.addEventListener('click', function() {
      const isOpen = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isOpen);
      headerNav.style.display = isOpen ? '' : 'flex';

      if (!isOpen) {
        headerNav.style.position = 'fixed';
        headerNav.style.top = 'var(--header-height)';
        headerNav.style.left = '0';
        headerNav.style.right = '0';
        headerNav.style.bottom = '0';
        headerNav.style.flexDirection = 'column';
        headerNav.style.background = 'var(--color-bg)';
        headerNav.style.padding = 'var(--spacing-lg)';
        headerNav.style.zIndex = '999';
        headerNav.style.overflowY = 'auto';
        headerNav.style.gap = 'var(--spacing-md)';
      } else {
        headerNav.removeAttribute('style');
      }
    });
  }

  // --- Mega Menu (desktop hover) ---
  document.querySelectorAll('[data-has-megamenu]').forEach(function(item) {
    const link = item.querySelector('.site-header__nav-link');
    const menu = item.querySelector('.mega-menu');

    if (!link || !menu) return;

    var hideTimeout;

    item.addEventListener('mouseenter', function() {
      clearTimeout(hideTimeout);
      // Close other mega menus
      document.querySelectorAll('.mega-menu--active').forEach(function(m) {
        if (m !== menu) {
          m.classList.remove('mega-menu--active');
          m.setAttribute('aria-hidden', 'true');
        }
      });
      menu.classList.add('mega-menu--active');
      menu.setAttribute('aria-hidden', 'false');
      link.setAttribute('aria-expanded', 'true');
    });

    item.addEventListener('mouseleave', function() {
      hideTimeout = setTimeout(function() {
        menu.classList.remove('mega-menu--active');
        menu.setAttribute('aria-hidden', 'true');
        link.setAttribute('aria-expanded', 'false');
      }, 150);
    });

    // Keyboard accessibility
    link.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        var isOpen = menu.classList.contains('mega-menu--active');
        menu.classList.toggle('mega-menu--active');
        menu.setAttribute('aria-hidden', isOpen);
        link.setAttribute('aria-expanded', !isOpen);
      }
    });
  });

  // Close mega menus on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.mega-menu--active').forEach(function(menu) {
        menu.classList.remove('mega-menu--active');
        menu.setAttribute('aria-hidden', 'true');
      });
      document.querySelectorAll('.site-header__nav-link[aria-expanded="true"]').forEach(function(link) {
        link.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // --- Variant selector (product pages) ---
  var variantSelectors = document.querySelectorAll('[name^="options"]');
  if (variantSelectors.length > 0) {
    variantSelectors.forEach(function(selector) {
      selector.addEventListener('change', function() {
        // Basic variant selection - for a full implementation,
        // this would update the variant ID hidden input
        // based on the combination of selected options
      });
    });
  }

  // --- Filter dropdowns (collection pages) ---
  document.querySelectorAll('.filter-group').forEach(function(group) {
    // Close on click outside
    document.addEventListener('click', function(e) {
      if (!group.contains(e.target)) {
        group.removeAttribute('open');
      }
    });
  });

})();
