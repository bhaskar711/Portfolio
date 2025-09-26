// Typed.js animation
var typed = new Typed("#typed", {
  strings: ["Aspiring Java Developer", "Web Developer", "Salesforce Enthusiast", "Cybersecurity Learner"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// Canvas star background
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const starCount = 180;

for(let i=0;i<starCount;i++){
  stars.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    size:Math.random()*1.6+0.2,
    alpha:Math.random()*0.7+0.3,
    twinkleSpeed: Math.random()*0.02+0.005
  });
}

function animateStars(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  stars.forEach(star=>{
    star.alpha += star.twinkleSpeed;
    if(star.alpha>1 || star.alpha<0.3) star.twinkleSpeed*=-1;
    ctx.save();
    ctx.globalAlpha = star.alpha;
    ctx.beginPath();
    ctx.arc(star.x,star.y,star.size,0,Math.PI*2);
    ctx.fillStyle="#fff";
    ctx.shadowColor="#fff";
    ctx.shadowBlur=8;
    ctx.fill();
    ctx.restore();
  });
  requestAnimationFrame(animateStars);
}
animateStars();

window.addEventListener('resize',()=>{
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
});
