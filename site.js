document.querySelectorAll(".yt").forEach((button) => {
  button.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${button.dataset.id}?autoplay=1&rel=0`;
    iframe.title = button.getAttribute("aria-label") || "Vidéo";
    iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    iframe.allowFullscreen = true;
    button.replaceWith(iframe);
  });
});
