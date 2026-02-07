function showTab(tabId, btn) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });

  document.querySelectorAll('.mode-tabs button').forEach(b => {
    b.classList.remove('active');
  });

  document.getElementById(tabId).classList.add('active');
  btn.classList.add('active');
}

  // later: filter rows per mode
}
