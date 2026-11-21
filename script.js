const startButton = document.getElementById("start");
const intro = document.getElementById("intro");
const credits = document.getElementById("credits");
const creditsContent = document.querySelector(".credits-content");
const game = document.querySelector(".game");

// МУЗЫКА

const music = new Audio("https://files.catbox.moe/mvgqhb.mp3");

music.loop = true;
music.volume = 0.5;
music.preload = "auto";

// ПЕРЕХОД К ПЕРЕЧИТЫВАНИЮ ТИТРОВ

if (creditsContent && credits) {
  creditsContent.addEventListener("animationend", function(event) {
    if (
      event.target === creditsContent &&
      event.animationName === "scrollCredits"
    ) {
      const finalPosition =
        creditsContent.getBoundingClientRect().top -
        credits.getBoundingClientRect().top;

      creditsContent.style.animation = "none";
      creditsContent.style.transform = "none";

      creditsContent.classList.add("finished");
      credits.classList.add("finished");

      credits.scrollTop = Math.max(0, -finalPosition);

      if (music.paused) {
        music.play().catch(function(error) {
          console.log("Музыка не продолжилась:", error);
        });
      }
    }
  });
}

// КНОПКА READ

if (startButton && intro && credits && creditsContent) {
  startButton.addEventListener("click", function() {
    intro.style.display = "none";
    credits.classList.add("active");

    music.play().catch(function(error) {
      console.log("Музыка не запустилась:", error);
    });
  });
} else {
  console.error("Не найдены элементы HTML для запуска сайта");
}

// ПИКСЕЛЬНЫЙ ФОН

if (game && !game.querySelector(".pixel-background")) {
  const layer = document.createElement("div");
  layer.className = "pixel-background";
  layer.setAttribute("aria-hidden", "true");

  game.prepend(layer);

  const colors = [
    "#126b72",
    "#167d83",
    "#164f65",
    "#218d83",
    "#15566a",
    "#237d91"
  ];

  const count = Math.min(
    650,
    Math.floor(window.innerWidth * window.innerHeight / 1500)
  );

  for (let i = 0; i < count; i++) {
    const pixel = document.createElement("span");
    pixel.className = "pixel";

    const size = Math.random() < 0.8
      ? Math.random() * 2 + 1
      : Math.random() * 3 + 2;

    pixel.style.width = size + "px";
    pixel.style.height = size + "px";
    pixel.style.left = Math.random() * 100 + "%";
    pixel.style.top = Math.random() * 100 + "%";

    const color = colors[
      Math.floor(Math.random() * colors.length)
    ];

    pixel.style.background = color;
    pixel.style.color = color;

    pixel.style.setProperty(
      "--duration",
      (3 + Math.random() * 8) + "s"
    );

    pixel.style.setProperty(
      "--delay",
      (-Math.random() * 10) + "s"
    );

    pixel.style.setProperty(
      "--brightness",
      (0.25 + Math.random() * 0.5)
    );

    layer.appendChild(pixel);
  }
}

// ПЕРЕХОД К ПЕРЕЧИТЫВАНИЮ ТИТРОВ

if (creditsContent && credits) {
  creditsContent.addEventListener("animationend", function(event) {
    if (
      event.target === creditsContent &&
      event.animationName === "scrollCredits"
    ) {
      const finalPosition =
        creditsContent.getBoundingClientRect().top -
        credits.getBoundingClientRect().top;

      creditsContent.style.animation = "none";
      creditsContent.style.transform = "none";

      creditsContent.classList.add("finished");
      credits.classList.add("finished");

      credits.scrollTop = Math.max(0, -finalPosition);

      if (music.paused) {
        music.play().catch(function(error) {
          console.log("Музыка не продолжилась:", error);
        });
      }
    }
  });
}