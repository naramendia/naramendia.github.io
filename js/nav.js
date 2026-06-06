(function () {
  const header = document.querySelector('header');
  const nav = header && header.querySelector('.navigation');
  if (!header || !nav) return;

  const toggle = document.createElement('button');
  toggle.className = 'nav-toggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-label', 'Toggle menu');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'primary-navigation');
  toggle.innerHTML = '<span aria-hidden="true">&#9776;</span>';

  if (!nav.id) nav.id = 'primary-navigation';
  header.insertBefore(toggle, nav);

  function setOpen(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.innerHTML = open
      ? '<span aria-hidden="true">&times;</span>'
      : '<span aria-hidden="true">&#9776;</span>';
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    setOpen(!nav.classList.contains('open'));
  });

  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  document.addEventListener('click', function (e) {
    if (!nav.classList.contains('open')) return;
    if (!header.contains(e.target)) setOpen(false);
  });
})();
