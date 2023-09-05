const button2 = document.getElementById('botao2');
button2.addEventListener('mouseover', function() {
  const maxWidth = 80; // Adjust this value to set the maximum left position
  const maxHeight = 80; // Adjust this value to set the maximum top position

  const left = Math.random() * maxWidth;
  const top = Math.random() * maxHeight;

  this.style.left = left + '%';
  this.style.top = top + '%';
});


window.addEventListener('load', function() {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'block';

    const errorMessages = document.getElementById('try');
    errorMessages.style.display = 'none';
  }
});
