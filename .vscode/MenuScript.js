function filterMenu(category) {
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
      item.style.display = (category === 'all' || item.classList.contains(category)) ? 'flex' : 'none';
    });
  }
  
  