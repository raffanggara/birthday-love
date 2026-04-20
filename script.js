// ===== MATRIX =====
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "❤️01";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ff4d6d";
  ctx.font = fontSize + "px monospace";

  drops.forEach((y, i) => {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, y * fontSize);

    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  });
}
setInterval(draw, 33);

// ===== COUNTDOWN =====
let count = 3;
const countdownEl = document.getElementById("countdown");
const messageEl = document.getElementById("message");
const finalEl = document.getElementById("final");
const music = document.getElementById("music");

const interval = setInterval(() => {
  count--;
  countdownEl.innerText = count;

  if (count === 0) {
    clearInterval(interval);
    countdownEl.style.display = "none";
    messageEl.classList.remove("hidden");

    music.play().catch(()=>{}); // autoplay (butuh klik dulu di HP)

    setTimeout(() => {
      finalEl.classList.remove("hidden");
      generateQR();
    }, 2000);
  }
}, 1000);

// ===== QR =====
function generateQR() {
  const qr = document.getElementById("qr");

  const link = "https://raffanggara.github.io/birthday-love/love.html";

  qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" 
    + encodeURIComponent(link);
}

// ===== LOVE EXPLOSION =====
function explode(e) {
  for (let i = 0; i < 10; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.className = "heart";

    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
  }
}
