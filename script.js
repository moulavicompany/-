// Mobile nav toggle
document.getElementById('burger').addEventListener('click', function() {
  document.getElementById('main-nav').classList.toggle('show');
});
// Smooth scroll
document.querySelectorAll('[data-scroll]').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(btn.dataset.scroll).scrollIntoView({ behavior: 'smooth' });
  });
});