// MATRIX BACKGROUND
const c = document.getElementById("matrix");
const ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;

let letters = "❤️01";
let fontSize = 16;
let columns = c.width / fontSize;
let drops = Array(Math.floor(columns)).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0,0,c.width,c.height);

  ctx.fillStyle = "#ff4d6d";
  ctx.font = fontSize + "px monospace";

  drops.forEach((y,i)=>{
    let text = letters[Math.floor(Math.random()*letters.length)];
    ctx.fillText(text, i*fontSize, y*fontSize);

    if(y*fontSize > c.height && Math.random() > 0.975){
      drops[i]=0;
    }
    drops[i]++;
  });
}
setInterval(draw, 33);

// COUNTDOWN
let count = 3;
let music = document.getElementById("music");

const countEl = document.getElementById("count");
const msg = document.getElementById("msg");
const qrbox = document.getElementById("qrbox");

setInterval(()=>{
  count--;
  countEl.innerText = count;

  if(count === 0){
    countEl.style.display="none";
    msg.classList.remove("hidden");

    music.play().catch(()=>{});

    setTimeout(()=>{
      qrbox.classList.remove("hidden");
      generateQR();
    },2000);
  }
},1000);

// QR
function generateQR(){
  const qr = document.getElementById("qr");

  const link = "https://USERNAME.github.io/birthday-love/love.html";

  qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="
  + encodeURIComponent(link);
}
