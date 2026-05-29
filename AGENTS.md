# AGENTS.md

## Project Goal

Refactor the current Kubernetes cheatsheet slide website from one large HTML file into a maintainable GitHub Pages structure.

The final site should be:

* easy to maintain
* easy to edit slide-by-slide
* suitable for GitHub Pages hosting
* content-heavy but visually clean
* keyboard and button navigable
* Mermaid-enabled for flowcharts
* structured by Kubernetes topic sections

The website is a slide-style Kubernetes cheatsheet. Each slide must be its own standalone HTML file, organized under topic folders.

---

# Refactor Objectives

## Current Problem

The current generated HTML file is too large and difficult to maintain.

Issues to fix:

* too much content in one file
* inline CSS and JavaScript mixed with content
* hard to edit one slide without affecting others
* hard to navigate and debug
* diagrams are embedded inconsistently
* not optimized for GitHub Pages

## Desired Result

Create a modular static website where:

* `index.html` acts as the home page and table of contents
* shared CSS lives in `/assets/css/`
* shared JavaScript lives in `/assets/js/`
* shared images/icons live in `/assets/images/`
* reusable data/config lives in `/assets/data/`
* each slide is an individual `.html` page
* slides are grouped by major topic folders
* previous/next navigation works across all slide pages
* Mermaid diagrams render correctly on every slide page
* site works locally and on GitHub Pages

---

# Required File Structure

Refactor the project into this structure:

```text
/
├── index.html
├── AGENTS.md
├── README.md
├── assets/
│   ├── css/
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── slides.css
│   │   ├── code.css
│   │   └── theme.css
│   ├── js/
│   │   ├── main.js
│   │   ├── navigation.js
│   │   ├── mermaid-init.js
│   │   └── slides-registry.js
│   ├── images/
│   └── data/
│       └── slides.json
├── slides/
│   ├── kubernetes-fundamentals/
│   │   ├── 01-title.html
│   │   ├── 02-why-kubernetes.html
│   │   ├── 03-docker-drawbacks.html
│   │   └── 04-docker-vs-kubernetes.html
│   ├── architecture/
│   │   ├── 01-cluster-architecture.html
│   │   ├── 02-control-plane.html
│   │   ├── 03-worker-node.html
│   │   └── 04-reconciliation-loop.html
│   ├── workloads/
│   │   ├── 01-pod.html
│   │   ├── 02-deployment.html
│   │   ├── 03-statefulset.html
│   │   ├── 04-daemonset.html
│   │   ├── 05-job.html
│   │   └── 06-cronjob.html
│   ├── networking/
│   │   ├── 01-service.html
│   │   ├── 02-ingress.html
│   │   ├── 03-gateway-api.html
│   │   ├── 04-network-policy.html
│   │   └── 05-request-flow.html
│   ├── storage/
│   │   ├── 01-volumes.html
│   │   ├── 02-persistent-volume.html
│   │   └── 03-storage-class.html
│   ├── config-security/
│   │   ├── 01-configmap.html
│   │   ├── 02-secret.html
│   │   ├── 03-service-account.html
│   │   ├── 04-rbac.html
│   │   └── 05-security-context.html
│   ├── scaling-reliability/
│   │   ├── 01-requests-limits.html
│   │   ├── 02-hpa.html
│   │   ├── 03-probes.html
│   │   ├── 04-pdb.html
│   │   └── 05-rollouts.html
│   ├── observability-troubleshooting/
│   │   ├── 01-logs.html
│   │   ├── 02-metrics.html
│   │   ├── 03-debugging-pods.html
│   │   └── 04-debugging-networking.html
│   ├── kubectl-cheatsheet/
│   │   ├── 01-context-namespace.html
│   │   ├── 02-inspect-resources.html
│   │   ├── 03-logs-exec.html
│   │   └── 04-rollouts-scaling.html
│   ├── best-practices/
│   │   ├── 01-deployment-best-practices.html
│   │   ├── 02-security-best-practices.html
│   │   ├── 03-reliability-best-practices.html
│   │   └── 04-operational-best-practices.html
│   └── interview-questions/
│       ├── 01-request-flow.html
│       ├── 02-failing-pod.html
│       ├── 03-crashloopbackoff.html
│       └── 04-service-not-working.html
```

Adjust filenames as needed, but keep these rules:

* use lowercase filenames
* use kebab-case
* prefix slide files with numbers for ordering
* group slides by major topic folder
* do not put all slides in one flat folder

---

# GitHub Pages Compatibility Requirements

The site must work on GitHub Pages without a backend.

Use only:

* HTML
* CSS
* JavaScript
* static assets
* CDN scripts if necessary

Do not require:

* Node.js runtime
* server-side rendering
* build step
* database
* API backend

All links must be relative and GitHub Pages compatible.

Examples:

```html
<link rel="stylesheet" href="../../assets/css/base.css">
<script src="../../assets/js/navigation.js"></script>
```

For files in root such as `index.html`, use:

```html
<link rel="stylesheet" href="./assets/css/base.css">
```

---

# Slide Page Requirements

Every slide page must be a complete standalone HTML file.

Each slide page must include:

* HTML document structure
* shared CSS links
* Mermaid script
* shared navigation script
* slide content
* previous slide link
* next slide link
* link back to home/index
* section label
* slide title

Example slide structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kubernetes Fundamentals - Why Kubernetes</title>

  <link rel="stylesheet" href="../../assets/css/base.css">
  <link rel="stylesheet" href="../../assets/css/layout.css">
  <link rel="stylesheet" href="../../assets/css/slides.css">
  <link rel="stylesheet" href="../../assets/css/code.css">
  <link rel="stylesheet" href="../../assets/css/theme.css">
</head>
<body>
  <main class="slide-page">
    <header class="slide-header">
      <a class="home-link" href="../../index.html">Kubernetes Cheatsheet</a>
      <span class="section-label">Kubernetes Fundamentals</span>
    </header>

    <article class="slide">
      <h1>Why Kubernetes?</h1>

      <section class="content-grid">
        <div>
          <h2>Core Idea</h2>
          <p>Kubernetes manages containerized applications across a cluster using declarative desired state.</p>
        </div>

        <div>
          <h2>Key Benefits</h2>
          <ul>
            <li>Scheduling</li>
            <li>Self-healing</li>
            <li>Service discovery</li>
            <li>Rolling updates</li>
            <li>Autoscaling</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Flow</h2>
        <pre class="mermaid">
flowchart LR
  YAML[Apply YAML] --> API[API Server]
  API --> Controller[Controller]
  Controller --> Pod[Running Pods]
        </pre>
      </section>
    </article>

    <nav class="slide-nav" aria-label="Slide navigation">
      <a class="nav-button" href="./01-title.html">Previous</a>
      <a class="nav-button" href="../../index.html">Home</a>
      <a class="nav-button" href="./03-docker-drawbacks.html">Next</a>
    </nav>
  </main>

  <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
  <script src="../../assets/js/mermaid-init.js"></script>
  <script src="../../assets/js/navigation.js"></script>
</body>
</html>
```

---

# Index Page Requirements

`index.html` must be a polished landing page and table of contents.

It should include:

* project title
* short description
* topic sections
* links to every slide
* recommended learning path
* quick links to cheatsheet sections
* GitHub Pages friendly design

The index page should not contain all slide content. It should only organize and link to slides.

Example sections:

```html
<section class="toc-section">
  <h2>Kubernetes Fundamentals</h2>
  <ol>
    <li><a href="./slides/kubernetes-fundamentals/01-title.html">Title</a></li>
    <li><a href="./slides/kubernetes-fundamentals/02-why-kubernetes.html">Why Kubernetes</a></li>
    <li><a href="./slides/kubernetes-fundamentals/03-docker-drawbacks.html">Docker Drawbacks</a></li>
  </ol>
</section>
```

---

# Navigation Requirements

## Previous / Next Buttons

Every slide must have:

* Previous button
* Home button
* Next button

Previous and next buttons must point to the correct slide file.

Navigation must work across section boundaries.

Example:

The last slide of `/slides/kubernetes-fundamentals/` should link next to:

```text
../architecture/01-cluster-architecture.html
```

The first slide of `/slides/architecture/` should link previous to:

```text
../kubernetes-fundamentals/04-docker-vs-kubernetes.html
```

## Keyboard Navigation

Implement keyboard navigation in `/assets/js/navigation.js`.

Required behavior:

* ArrowRight moves to next slide
* PageDown moves to next slide
* Space moves to next slide
* ArrowLeft moves to previous slide
* PageUp moves to previous slide
* Home key returns to `index.html`
* Escape returns to `index.html`

Each slide page should expose navigation links using data attributes:

```html
<body data-prev="./01-title.html" data-next="./03-docker-drawbacks.html" data-home="../../index.html">
```

`navigation.js` should read these attributes and navigate accordingly.

Example:

```javascript
document.addEventListener("keydown", (event) => {
  const prev = document.body.dataset.prev;
  const next = document.body.dataset.next;
  const home = document.body.dataset.home;

  if (["ArrowRight", "PageDown", " "].includes(event.key) && next) {
    window.location.href = next;
  }

  if (["ArrowLeft", "PageUp"].includes(event.key) && prev) {
    window.location.href = prev;
  }

  if (["Home", "Escape"].includes(event.key) && home) {
    window.location.href = home;
  }
});
```

---

# Mermaid Requirements

Flowcharts must be rendered using Mermaid.

## Include Mermaid on pages with diagrams

Each slide page may include:

```html
<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
<script src="../../assets/js/mermaid-init.js"></script>
```

## Mermaid initialization

Create `/assets/js/mermaid-init.js`.

Use this initialization:

```javascript
if (window.mermaid) {
  mermaid.initialize({
    startOnLoad: true,
    theme: "default",
    securityLevel: "loose",
    flowchart: {
      htmlLabels: true,
      curve: "basis"
    }
  });
}
```

## Mermaid HTML Pattern

Use this pattern for Mermaid diagrams:

```html
<pre class="mermaid">
flowchart LR
  Internet[Internet] --> LB[Load Balancer]
  LB --> Ingress[Ingress Controller]
  Ingress --> Service[Service]
  Service --> Pod[Pod]
</pre>
```

Do not wrap Mermaid diagrams in escaped code blocks that prevent rendering.

---

# Styling Requirements

Split styling into focused files.

## `/assets/css/base.css`

Contains:

* CSS reset
* typography defaults
* root variables
* body defaults
* link defaults

## `/assets/css/layout.css`

Contains:

* page layout
* header
* footer
* grid utilities
* responsive behavior

## `/assets/css/slides.css`

Contains:

* slide frame
* slide cards
* slide navigation
* content density styles
* section labels

## `/assets/css/code.css`

Contains:

* code block styling
* YAML block styling
* command block styling
* inline code styling

## `/assets/css/theme.css`

Contains:

* colors
* theme tokens
* shadows
* borders
* accent colors

---

# Suggested CSS Design Direction

Use a content-heavy technical reference style.

Recommended visual style:

* clean white or dark navy background
* strong readable headings
* subtle borders
* code blocks with clear contrast
* minimal decorative elements
* responsive layout for desktop and tablet

Use CSS variables:

```css
:root {
  --bg: #f8fafc;
  --surface: #ffffff;
  --surface-muted: #f1f5f9;
  --text: #0f172a;
  --text-muted: #475569;
  --border: #cbd5e1;
  --accent: #2563eb;
  --accent-muted: #dbeafe;
  --code-bg: #0f172a;
  --code-text: #e2e8f0;
}
```

Slide pages should support dense technical content without becoming unreadable.

---

# JavaScript Requirements

## `/assets/js/main.js`

Use for:

* general site enhancements
* active section highlighting
* small UI helpers

## `/assets/js/navigation.js`

Use for:

* keyboard navigation
* previous/next/home navigation
* validating navigation data attributes

## `/assets/js/mermaid-init.js`

Use for:

* Mermaid initialization only

## `/assets/js/slides-registry.js`

Optional but recommended.

Use for:

* central slide ordering
* automatic previous/next path generation
* table of contents generation if desired

Example registry:

```javascript
window.SLIDES = [
  {
    section: "Kubernetes Fundamentals",
    slug: "kubernetes-fundamentals",
    slides: [
      {
        title: "Title",
        path: "slides/kubernetes-fundamentals/01-title.html"
      },
      {
        title: "Why Kubernetes",
        path: "slides/kubernetes-fundamentals/02-why-kubernetes.html"
      }
    ]
  }
];
```

If using a registry, keep it simple and static.

Do not introduce a complex build process.

---

# Content Refactor Rules

When splitting the original large HTML file:

1. Identify each slide.
2. Extract each slide into its own standalone HTML file.
3. Group slides by major topic.
4. Move repeated styles into shared CSS files.
5. Move repeated scripts into shared JS files.
6. Replace inline navigation with shared navigation behavior.
7. Ensure each slide has correct relative paths.
8. Ensure Mermaid diagrams still render.
9. Ensure all code blocks remain readable.
10. Ensure index page links to every slide.

Do not remove important content during refactor.

Preserve:

* Kubernetes explanations
* YAML examples
* commands
* best practices
* interview questions
* troubleshooting sections
* diagrams

---

# Slide Content Guidelines

Each slide should be maintainable and focused.

Prefer:

* one major concept per slide
* one YAML example per slide
* concise bullet lists
* tables for comparisons
* diagrams for flows
* commands in code blocks

Avoid:

* giant slides with many unrelated concepts
* deeply nested HTML
* excessive inline styles
* repeated CSS per slide
* repeated JavaScript per slide

---

# Recommended Slide HTML Components

Use reusable class names.

## Concept Card

```html
<section class="card">
  <h2>What it is</h2>
  <p>...</p>
</section>
```

## Two Column Layout

```html
<section class="two-column">
  <div class="card">
    <h2>Use Cases</h2>
    <ul>...</ul>
  </div>
  <div class="card">
    <h2>Best Practices</h2>
    <ul>...</ul>
  </div>
</section>
```

## Code Block

```html
<pre><code class="language-yaml">
apiVersion: v1
kind: Pod
metadata:
  name: nginx
</code></pre>
```

## Command Block

```html
<pre><code class="language-bash">
kubectl get pods
kubectl describe pod api-123
</code></pre>
```

## Mermaid Diagram

```html
<pre class="mermaid">
flowchart LR
  A[Client] --> B[Service]
  B --> C[Pod]
</pre>
```

---

# Accessibility Requirements

Ensure:

* semantic HTML
* readable heading hierarchy
* sufficient color contrast
* descriptive link text
* keyboard navigation
* no navigation that only works with mouse
* responsive behavior for smaller screens

Use:

```html
<nav aria-label="Slide navigation">
```

---

# README Requirements

Update or create `README.md`.

Include:

* project description
* local preview instructions
* GitHub Pages deployment instructions
* file structure overview
* how to add a new slide
* how to update navigation
* how to use Mermaid diagrams

Example local preview:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

---

# GitHub Pages Deployment Instructions

The final site should support deployment from:

* root of main branch
* or `/docs` folder if user chooses

Prefer root deployment unless repository already uses `/docs`.

Mention in README:

1. Go to GitHub repository Settings.
2. Go to Pages.
3. Set Source to Deploy from branch.
4. Select main branch and root folder.
5. Save.
6. Open the generated GitHub Pages URL.

---

# Validation Checklist

After refactor, verify:

* `index.html` opens locally
* every slide link works
* previous/next buttons work
* keyboard navigation works
* Mermaid diagrams render
* CSS loads correctly on root and nested slides
* JavaScript loads correctly on root and nested slides
* no broken relative paths
* no important content removed
* site works with `python3 -m http.server 8000`
* site is compatible with GitHub Pages

---

# Final Deliverables

Produce:

* refactored folder structure
* standalone slide HTML files
* shared CSS files
* shared JS files
* updated `index.html`
* updated `README.md`
* no unnecessary build tooling
* no monolithic HTML file

The final project should be easy to maintain by editing individual slide fil