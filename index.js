// 1. Toggle Navbar on Small Screens
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menuLinks = document.getElementById('menu-links');
  
    menuToggle.addEventListener('click', () => {
      menuLinks.classList.toggle('hidden');
    });
  });
  
  // 2. Dynamically Add a Card to Featured Categories
  function addFeaturedCard(title, imageUrl) {
    const container = document.getElementById('featured-container');
  
    const card = document.createElement('div');
    card.className = 'bg-white shadow p-2 hover:shadow-lg transition h-72';
  
    const img = document.createElement('img');
    img.src = imageUrl;
    img.className = 'w-full h-48 object-cover transform hover:scale-105 transition';
    img.alt = title;
  
    const label = document.createElement('p');
    label.className = 'text-center mt-2 font-semibold hover:text-teal-600 transition';
    label.textContent = title;
  
    card.appendChild(img);
    card.appendChild(label);
    container.appendChild(card);
  }
  
  // Example call (You can remove or replace this with real data)
  addFeaturedCard('New Arrival', 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=500&auto=format&fit=crop');
  
  // 3. Update Category Heading Text
  function updateCategoryHeading(newTitle) {
    const heading = document.getElementById('category-heading');
    if (heading) {
      heading.textContent = newTitle;
    }
  }
  
  // 4. Highlight Search Box on Focus
  const searchInput = document.getElementById('search-box');
  if (searchInput) {
    searchInput.addEventListener('focus', () => {
      searchInput.classList.add('ring', 'ring-teal-400');
    });
  
    searchInput.addEventListener('blur', () => {
      searchInput.classList.remove('ring', 'ring-teal-400');
    });
  }
  
  // 5. Log Category Clicks
  const categoryItems = document.querySelectorAll('.category-item');
  categoryItems.forEach(item => {
    item.addEventListener('click', () => {
      console.log('Category Clicked:', item.textContent.trim());
    });
  });
  