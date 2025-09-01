
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
if (burger){ burger.addEventListener('click', ()=> menu.classList.toggle('open')); }
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id.startsWith('#') && id.length>1){
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior:'smooth'});
    }
  })
})
