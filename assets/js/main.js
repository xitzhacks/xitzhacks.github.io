(function(){
  const q = document.getElementById('search');
  if(!q) return;
  q.addEventListener('input', function(){
    const v = (q.value||'').toLowerCase();
    document.querySelectorAll('.card').forEach(c => {
      const t = (c.getAttribute('data-title')||'').toLowerCase();
      const g = (c.getAttribute('data-tags')||'').toLowerCase();
      c.style.display = (t.includes(v) || g.includes(v)) ? '' : 'none';
    });
  });
})();