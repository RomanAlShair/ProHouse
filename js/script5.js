var buttons = document.querySelectorAll('.btn1');
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });
    this.classList.add('active');
  });
});