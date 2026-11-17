  const imgwrapper = document.querySelector(".img-wrapper");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  let angle = 0;

  function updatefun() {
    imgwrapper.style.transform = `perspective(1000px) rotateY(${angle}deg)`;
  }

  // Manual buttons
  prev.addEventListener("click", function () {
    angle += 45;
    updatefun();
  });

  next.addEventListener("click", function () {
    angle -= 45;
    updatefun();
  });

  // Auto rotate
  setInterval(() => {
    angle -= 45;
    updatefun();
  }, 9000);

  // Initialize
  updatefun();