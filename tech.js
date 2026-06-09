const hdr = document.getElementById('hdr');
  window.addEventListener('scroll', () => hdr.classList.toggle('scrolled', scrollY > 40), { passive: true });

  // HAMBURGER
  const hbg = document.getElementById('hbg');
  const mob = document.getElementById('mob');
  hbg.addEventListener('click', () => {
    hbg.classList.toggle('active');
    mob.classList.toggle('open');
  });
  mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    hbg.classList.remove('active');
    mob.classList.remove('open');
  }));

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});