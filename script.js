// نمایش نرمِ سکشن‌ها هنگام اسکرول
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); } });
}, {threshold: .2});

document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
