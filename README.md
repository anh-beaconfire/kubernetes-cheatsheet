# Kubernetes Cheatsheet

A modular, GitHub Pages compatible Kubernetes cheatsheet and slide reference. 

## Local Preview

Run a static web server from the repository root:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Structure

```text
index.html              # home page and table of contents
assets/css/             # shared base, layout, slide, code, and theme styles
assets/js/              # keyboard navigation, Mermaid init, and registry data
assets/data/slides.json # static slide registry
slides/                 # standalone slide HTML files grouped by topic
```

## Add a New Slide

1. Create a lowercase, kebab-case HTML file in the appropriate `slides/<topic>/` folder.
2. Copy the structure from an existing slide page.
3. Update `data-prev`, `data-next`, and the Previous/Next links on adjacent slides.
4. Add the slide to `assets/data/slides.json`, `assets/js/slides-registry.js`, and the table of contents in `index.html`.

## Mermaid Diagrams

Use a renderable Mermaid block directly in the slide content:

```html
<pre class="mermaid">
flowchart LR
  Client --> Service
  Service --> Pod
</pre>
```

Slide pages load Mermaid from a CDN and initialize it through `assets/js/mermaid-init.js`.

## Keyboard Navigation

On slide pages:

- `ArrowRight`, `PageDown`, or `Space` goes to the next slide.
- `ArrowLeft` or `PageUp` goes to the previous slide.
- `Home` or `Escape` returns to `index.html`.

Navigation is controlled by `data-prev`, `data-next`, and `data-home` attributes on each slide page body.

## GitHub Pages Deployment

1. Go to the GitHub repository settings.
2. Open **Pages**.
3. Set Source to **Deploy from branch**.
4. Select the `main` branch and root folder.
5. Save.
6. Open the generated GitHub Pages URL.

No build step, backend, database, or Node.js runtime is required.
