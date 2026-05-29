document.addEventListener("keydown", (event) => {
  const target = event.target;
  if (target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) return;

  const { prev, next, home } = document.body.dataset;

  if (["ArrowRight", "PageDown", " "].includes(event.key) && next) {
    event.preventDefault();
    window.location.href = next;
  }

  if (["ArrowLeft", "PageUp"].includes(event.key) && prev) {
    event.preventDefault();
    window.location.href = prev;
  }

  if (["Home", "Escape"].includes(event.key) && home) {
    event.preventDefault();
    window.location.href = home;
  }
});
