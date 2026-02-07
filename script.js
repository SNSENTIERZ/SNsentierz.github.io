function switchMode(mode, btn) {
  document.querySelectorAll('.mode-tabs button')
    .forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // later: filter rows per mode
}
