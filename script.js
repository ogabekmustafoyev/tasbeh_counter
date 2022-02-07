window.addEventListener("DOMContentLoaded", () => {
  const tugma = document.querySelector(".tugma"),
    ekran = document.querySelector(".ekran"),
    zero = document.querySelector(".zero");

  tugma.addEventListener("click", () => {
    ekran.value = parseInt(ekran.value);
    ekran.value++;
  });
  zero.addEventListener("click", () => {
    sorov = prompt("Tekshirish", "Ishonchingiz komilmi?");
    if (sorov) {
      ekran.value = 0;
    }
  });
});

// document.querySelector('.ekran')
