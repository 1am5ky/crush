function moveButton() {
  const noBtn = document.getElementById('noBtn');

  if (noBtn.style.position !== 'fixed') {
    noBtn.style.position = 'fixed';
    noBtn.style.left = noBtn.offsetLeft + 'px';
    noBtn.style.top = noBtn.offsetTop + 'px';

    // Generate random coordinates
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 60);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 60);

    // Move button
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';

  }
   
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 60);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 60);

  noBtn.style.position = 'fixed';
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px'; 
}

function celebrate() {
  document.getElementById('question').innerHTML = 'Great!';
  document.getElementById('subtext').innerHTML = 'Give me your number :)'

  // change gif
  document.getElementById('gif1').src = "resources/pika3.gif";

  // hide the buttons
  document.querySelector('.button-container').style.display = 'none';

  // Show phone input section
  document.getElementById('phoneSection').style.display = 'block';

  
}

function submitNumber() { 
  const phoneInput = document.getElementById('phoneInput');
  const errorMsg = document.getElementById('errorMsg');

  // Change GIF
  document.getElementById('gif1').src = "resources/pika4.gif";

  // Check if the entered number matches the HTML pattern rule natively
  if (phoneInput.checkValidity()) {
    errorMsg.style.display = 'none';

    // success behaviour
    document.getElementById('question').innerHTML = "Got it!";
    document.getElementById('subtext').innerHTML = "I'll text you later :)";
    document.getElementById('phoneSection').style.display = 'none';

    console.log("Her number: ", phoneInput.value);
  } else {
    // If she enters letters or wrong prefix, display error message
    errorMsg.style.display = 'block';
  }

}
