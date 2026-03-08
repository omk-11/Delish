document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const slug = window.location.pathname.split('/').pop();

  fetch(`/api/menu/${slug}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Restaurant not found');
      }
      return response.json();
    })
    .then(data => {
      renderMenu(data);
    })
    .catch(error => {
      document.getElementById('menu-container').innerHTML = '<p>Restaurant not found.</p>';
    });
});

function renderMenu(restaurant) {
  const header = document.getElementById('header');
  const categories = document.getElementById('categories');

  // Header
  header.innerHTML = `
    ${restaurant.logo ? `<img id="logo" src="${restaurant.logo}" alt="${restaurant.name} logo">` : ''}
    <h1 id="name">${restaurant.name}</h1>
    <p id="description">${restaurant.description}</p>
  `;

  // Categories
  categories.innerHTML = restaurant.categories.map(category => `
    <div class="category">
      <h2>${category.name}</h2>
      ${category.items.map(item => `
        <div class="item">
          <div class="item-info">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
          </div>
          <div class="price">$${item.price.toFixed(2)}</div>
        </div>
      `).join('')}
    </div>
  `).join('');
}