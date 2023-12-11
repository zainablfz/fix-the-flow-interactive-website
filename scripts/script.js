// document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filters button');
  const cards = document.querySelectorAll('.card');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      let categorie;
      if (this.classList.contains('alles')) {
        categorie = 'alles';
      } else {
        categorie = this.classList[0];
      }

      cards.forEach(card => {
        const cardCategorie = card.getAttribute('data-categorie');
        if (categorie === 'alles' || categorie === cardCategorie) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
// });