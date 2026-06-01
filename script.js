/* ═══════════════════════════════════════════
   Himanshu Dhiman — Portfolio Scripts
   Edit freely — linked from index.html
═══════════════════════════════════════════ */

/* ─────────────────────────────────────
   CURSOR
───────────────────────────────────── */
const dot=document.getElementById('cdot'),ring=document.getElementById('cring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px';});
(function loop(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(loop);})();
const hsel='a,button,.tag,.proj-card,.edu-item,.cert-item,.contact-lnk,.stat-cell,.btn,.glass';
document.querySelectorAll(hsel).forEach(el=>{
  el.addEventListener('mouseenter',()=>document.body.classList.add('hov'));
  el.addEventListener('mouseleave',()=>document.body.classList.remove('hov'));
});

/* ─────────────────────────────────────
   MOUSE-TRACKED NEON GLOW ON .glass
   Updates --mx --my CSS vars per card
   so the spotlight follows the cursor
───────────────────────────────────── */
document.querySelectorAll('.glass').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const rect=card.getBoundingClientRect();
    const x=((e.clientX-rect.left)/rect.width*100).toFixed(1)+'%';
    const y=((e.clientY-rect.top)/rect.height*100).toFixed(1)+'%';
    card.style.setProperty('--mx',x);
    card.style.setProperty('--my',y);
  });
  card.addEventListener('mouseleave',()=>{
    card.style.setProperty('--mx','50%');
    card.style.setProperty('--my','50%');
  });
});

/* ─────────────────────────────────────
   SCROLL REVEAL — fires once
───────────────────────────────────── */
const ro=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');ro.unobserve(e.target);}});
},{threshold:.08,rootMargin:'0px 0px -32px 0px'});
document.querySelectorAll('.r').forEach(el=>ro.observe(el));

/* stagger groups */
const so=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');so.unobserve(e.target);}});
},{threshold:.1,rootMargin:'0px 0px -20px 0px'});
document.querySelectorAll('.sg').forEach(el=>so.observe(el));

/* ─────────────────────────────────────
   NAV SHRINK ON SCROLL
───────────────────────────────────── */
const nav=document.querySelector('nav');
window.addEventListener('scroll',()=>{nav.style.padding=window.scrollY>50?'14px 48px':'22px 48px';},{passive:true});

/* ─────────────────────────────────────
   PARALLAX ORBS ON MOUSE MOVE
───────────────────────────────────── */
const orbs=document.querySelectorAll('.orb');
document.addEventListener('mousemove',e=>{
  const cx=e.clientX/window.innerWidth-.5;
  const cy=e.clientY/window.innerHeight-.5;
  orbs[0] && (orbs[0].style.transform=`translate(${cx*24}px,${cy*18}px)`);
  orbs[1] && (orbs[1].style.transform=`translate(${cx*-18}px,${cy*22}px)`);
  orbs[2] && (orbs[2].style.transform=`translate(${cx*30}px,${cy*-14}px)`);
},{passive:true});