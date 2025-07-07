// Скрываем кнопку, когда видео воспроизводится
document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.getElementById("playButton");
  const video = document.getElementById("promoVideo");

  playButton.addEventListener("click", () => {
    video.play();
    playButton.style.display = "none";
  });

  video.addEventListener("pause", () => {
    playButton.style.display = "flex";
  });

  video.addEventListener("ended", () => {
    playButton.style.display = "flex";
  });
});
