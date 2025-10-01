document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("plainLandVideo");

  if (video) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            if (!video.paused) {
              video.pause();
            }
          } else {
            video.play();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
  }
});
