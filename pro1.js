
  // 1. Toggle mobile menu
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');
menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
  navMenu.classList.toggle('flex');
});

// 2. Change header background on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('bg-black', window.scrollY > 50);
});

// 3. Animate hero text on page load
window.addEventListener('DOMContentLoaded', () => {
  const heroText = document.querySelector('h1');
  heroText.classList.add('opacity-0', 'translate-y-4');
  setTimeout(() => {
    heroText.classList.remove('opacity-0', 'translate-y-4');
    heroText.classList.add('transition', 'duration-1000', 'translate-y-0', 'opacity-100');
  }, 100);
});

// 4. Add focus ring on search input
const searchInput = document.querySelector('input[placeholder="Search products..."]');
searchInput.addEventListener('focus', () => searchInput.classList.add('ring', 'ring-cyan-400'));
searchInput.addEventListener('blur', () => searchInput.classList.remove('ring', 'ring-cyan-400'));

// 5. Alert user on fake button clicks
document.querySelectorAll('a[href="#"]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    alert("This feature will be available soon!");
  });
});

// 6. Hover effect on nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('mouseover', () => link.classList.add('underline'));
  link.addEventListener('mouseout', () => link.classList.remove('underline'));
});

// 7. Newsletter form handler
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email-input').value;
  if (email.trim() === "") {
    alert("Please enter a valid email.");
    return;
  }
  alert("Thanks for subscribing!");
  document.getElementById('email-input').value = "";
});

// 8. Footer hover effect
const footer = document.querySelector('footer');
footer.addEventListener('mouseover', () => footer.classList.add('text-white'));
footer.addEventListener('mouseout', () => footer.classList.remove('text-white'));

// 9. Change page title after a delay
setTimeout(() => {
  document.title = "🔥 Sportify - Gear Up Now!";
}, 3000);

// 10. Toggle highlight on featured cards
document.querySelectorAll('.group').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('ring-2');
    card.classList.toggle('ring-cyan-400');
  });
});
