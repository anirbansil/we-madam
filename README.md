# We Madam

Homestyle Bengali kitchen website — a unit of UUC Hospitality, Kolkata.

Built with plain HTML, CSS, and JavaScript, using Bootstrap 5 for the grid,
form controls, and responsive utilities. No build step or framework required.

## Structure

```
index.html      Home page (hero, units, story, dishes, gallery, menu, why us,
                 reviews, reservation form, location)
gallery.html     Filterable photo gallery
contact.html     Contact page with enquiry form
css/style.css    Theme tokens, layout, scroll-reveal animations
js/icons.js      Tiny inline-SVG icon set (no icon font/library dependency)
js/main.js       Navbar behavior, scroll reveal, tabs, filters, forms
images/          Site photography and logo
```

## Running locally

No build step — just serve the folder statically, e.g.:

```
npx serve .
```

or open `index.html` directly in a browser.

## Notes

- Bootstrap 5 and Google Fonts are loaded from CDN.
- Scroll animations use `IntersectionObserver` and respect
  `prefers-reduced-motion`.
- The reservation and contact forms are front-end only (no backend); submitting
  shows a success state but does not send data anywhere yet.
