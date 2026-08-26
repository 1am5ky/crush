function moveBtn() {
  const noBtn = document.getElementById("noBtn");
  
  // Generate random coordinates
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 60);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 60);

  // Move button
  noBtn.style.position = 'fixed';
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

function celebrate() {
  const h1 = document.getElementById('question');
  const subtext = document.getElementById('subText');

  h1.innerHTML = "Awesome!";
  subtext.innerHTML = "Let me get your number: ";

  // Change Gif
  document.getElementById('gif').src = "resources/pika3.gif";

  // Replace Buttons with Phone Number Input
  document.querySelector(".btn-container").innerHTML = `
    <div id="phone-input-section">
      <input 
        id="phone-input" 
        type="tel" 
        placeholder="Enter your number here"
        required
        pattern="^(70|71|72|73|74|75|76|77|78|79|81|82|83|84|88)\d{2}\s\d{2}$"
        maxlength="9"
      >
      <button id="sendBtn" onclick="submitNumber()">
        Send
      </button>
    </div>
  `;

  // Ensure space as user types in number (7282 2323)
  const phoneInput = document.querySelector('#phone-input');

  phoneInput.addEventListener('input', (e)=> {
    // Remove all non-digit characters (including spaces the user typed)
    let value = e.target.value.replace(/\D/g, '');

    //Format into a 4-4 split as they type
    if (value.length > 4) {
      e.target.value = value.substring(0, 4) + ' ' + value.substring(4, 8);
    } else {
      // If 4 digits or less, just show the digits raw
      e.target.value = value;
    }
  })
}

function submitNumber() {
  // Change Gif
  document.getElementById('gif').src = "resources/pika4.gif";

  // Hide Input 
  document.querySelector(".btn-container").innerHTML = '';

  // Change top text
  const h1 = document.getElementById('question');
  const subtext = document.getElementById('subText');

  h1.innerHTML = "Got it thanks!";
  subtext.innerHTML = "I'll text you later :)";
}
