function showMore() {
  const moreInfo = document.getElementById("more-info");
  moreInfo.style.display = moreInfo.style.display === "none" ? "block" : "none";
}

function toggleContact() {
  const contactInfo = document.getElementById("contact-info");
  contactInfo.style.display =
    contactInfo.style.display === "none" ? "block" : "none";
}

let lastX = 0;
let lastY = 0;
let lastTime = 0;

document.addEventListener("mousemove", function (e) {
  const now = Date.now();

  // Kiểm tra di chuyển thật
  const moved =
    Math.abs(e.clientX - lastX) > 2 || Math.abs(e.clientY - lastY) > 2;

  // Giới hạn thời gian tạo bong bóng: tối thiểu 50ms mới cho tạo 1 lần
  if (moved && now - lastTime > 50) {
    lastX = e.clientX;
    lastY = e.clientY;
    lastTime = now;

    const bubble = document.createElement("span");
    bubble.classList.add("bubble-light");

    // Màu ngẫu nhiên (tùy thích)
    const colors = ["#ff66cc", "#66ccff", "#ffff66", "#99ff99", "#ff9966"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    bubble.style.background = color;

    bubble.style.left = e.clientX + "px";
    bubble.style.top = e.clientY + "px";

    document.body.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, 800);
  }
});

function createAutoBubble() {
  const bubble = document.createElement("span");
  bubble.classList.add("auto-bubble");

  // Vị trí ngẫu nhiên ngang màn hình
  bubble.style.left = Math.random() * window.innerWidth + "px";

  // Kích thước ngẫu nhiên
  const size = Math.random() * 10 + 5;
  bubble.style.width = size + "px";
  bubble.style.height = size + "px";

  // Màu sắc ngẫu nhiên (nếu muốn)
  const colors = ["#ffffff44", "#ff99cc55", "#99ccff44", "#ffff9955"];
  bubble.style.background = colors[Math.floor(Math.random() * colors.length)];

  document.body.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 4000);
}

// Tạo bong bóng mỗi 100ms
setInterval(createAutoBubble, 100);

document.addEventListener("click", function (e) {
  const ripple = document.createElement("div");
  ripple.className = "click-ripple";
  ripple.style.left = e.clientX + "px";
  ripple.style.top = e.clientY + "px";
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});
