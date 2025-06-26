document.addEventListener("DOMContentLoaded", () => {
  const pads = document.querySelectorAll(".drum-pad");
  const display = document.getElementById("display");

  function playSound(key) {
    const audio = document.getElementById(key.toUpperCase());
    const pad = audio?.parentElement;

    if (audio) {
      audio.currentTime = 0;
      audio.play();
      display.innerText = pad.id;

      pad.classList.add("active");
      setTimeout(() => pad.classList.remove("active"), 100);
    }
  }

  pads.forEach(pad => {
    pad.addEventListener("click", () => {
      const key = pad.innerText;
      playSound(key);
    });
  });

  document.addEventListener("keydown", (e) => {
    playSound(e.key);
  });
});
