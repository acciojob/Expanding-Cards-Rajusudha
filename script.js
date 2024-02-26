//your JS code here. If required.
 const panels = document.querySelectorAll('.panel');

    panels.forEach(panel => {
      panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('expanding-card');
      });
    });

    function removeActiveClasses() {
      panels.forEach(panel => {
        panel.classList.remove('expanding-card');
      });
    }
