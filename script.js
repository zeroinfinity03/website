// theme
const root=document.documentElement, KEY='svs-theme';
const saved=localStorage.getItem(KEY);
if(saved) root.setAttribute('data-theme',saved);
document.getElementById('theme').addEventListener('click',()=>{
  const dark = root.getAttribute('data-theme')==='dark'
    || (!root.getAttribute('data-theme') && matchMedia('(prefers-color-scheme:dark)').matches);
  const next = dark ? 'light' : 'dark';
  root.setAttribute('data-theme',next);
  localStorage.setItem(KEY,next);
});

// nav border on scroll
const nav=document.getElementById('nav');
const onScroll=()=>nav.classList.toggle('stuck',scrollY>8);
onScroll(); addEventListener('scroll',onScroll,{passive:true});

// reveal
const els=[...document.querySelectorAll('.rv')];
if(!matchMedia('(prefers-reduced-motion:reduce)').matches){
  const io=new IntersectionObserver((entries)=>{
    entries.forEach((e,i)=>{
      if(e.isIntersecting){
        setTimeout(()=>e.target.classList.add('in'), Math.min(i*55,220));
        io.unobserve(e.target);
      }
    });
  },{rootMargin:'0px 0px -8% 0px',threshold:.06});
  els.forEach(el=>io.observe(el));
}else{ els.forEach(el=>el.classList.add('in')); }
