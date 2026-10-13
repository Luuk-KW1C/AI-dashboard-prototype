
  //Zoek alle stat-box knoppen
  const buttons = document.querySelectorAll('.stat-box button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Zoek de parent stat-box
      const statBox = button.closest('.stat-box');

      // Zoek het <strong> element binnen de stat-box
      const counter = statBox.querySelector('strong');

      // Haal het huidige getal eruit en tel er 1 bij op
      const current = parseInt(counter.textContent, 10);
      counter.textContent = current + 1;
    });
  });

