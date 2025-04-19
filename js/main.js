// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Product Data
const products = [
    {
        name: 'Chocolate Delight',
        price: 4.99,
        image: 'images/chocolate-delight.jpg',
        category: 'Classic'
    },
    {
        name: 'Vanilla Dream',
        price: 4.49,
        image: 'images/vanilla-dream.jpg',
        category: 'Classic'
    },
    {
        name: 'Strawberry Bliss',
        price: 4.99,
        image: 'images/strawberry-bliss.jpg',
        category: 'Fruit'
    },
    {
        name: 'Mint Chocolate',
        price: 5.49,
        image: 'images/mint-chocolate.jpg',
        category: 'Special'
    }
];

// Categories Data
const categories = [
    {
        name: 'Classic',
        image: 'images/classic.jpg',
        description: 'Timeless favorites that never go out of style'
    },
    {
        name: 'Fruit Flavors',
        image: 'images/fruit-flavors.jpg',
        description: 'Fresh and fruity delights'
    },
    {
        name: 'Special Edition',
        image: 'images/special-edition.jpg',
        description: 'Limited time offerings'
    },
    {
        name: 'Premium Selection',
        image: 'images/premium.jpg',
        description: 'Luxury ice cream experiences'
    }
];

// Testimonials Data
const testimonials = [
    {
        name: 'Sarah Johnson',
        comment: 'The best ice cream I\'ve ever tasted! The flavors are amazing.',
        rating: 5
    },
    {
        name: 'Mike Thompson',
        comment: 'Great variety and excellent service. My kids love it!',
        rating: 5
    },
    {
        name: 'Emily Davis',
        comment: 'The premium selection is worth every penny. Absolutely delicious!',
        rating: 5
    }
];

// Function to populate favorites section
function populateFavorites() {
    const favoritesGrid = document.querySelector('.favorites-grid');
    favoritesGrid.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'ice-cream-card';
        card.setAttribute('data-aos', 'fade-up');
        
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;
        
        favoritesGrid.appendChild(card);
    });
}

// Function to populate categories
function populateCategories() {
    const categoriesGrid = document.querySelector('.categories-grid');
    categoriesGrid.innerHTML = '';

    categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.setAttribute('data-aos', 'fade-up');
        
        categoryCard.innerHTML = `
            <img src="${category.image}" alt="${category.name}">
            <h3>${category.name}</h3>
            <p>${category.description}</p>
        `;
        
        categoriesGrid.appendChild(categoryCard);
    });
}

// Function to populate testimonials
function populateTestimonials() {
    const testimonialSlider = document.querySelector('.testimonials-slider');
    testimonialSlider.innerHTML = '';

    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        testimonialCard.setAttribute('data-aos', 'fade-up');
        
        const stars = '⭐'.repeat(testimonial.rating);
        
        testimonialCard.innerHTML = `
            <p>${testimonial.comment}</p>
            <div class="rating">${stars}</div>
            <h4>${testimonial.name}</h4>
        `;
        
        testimonialSlider.appendChild(testimonialCard);
    });
}

// Newsletter form submission
document.getElementById('newsletter-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    
    // Here you would typically send this to your backend
    alert('Thank you for subscribing! We\'ll keep you updated with our latest offers.');
    this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    populateFavorites();
    populateCategories();
    populateTestimonials();
});

// Add to cart functionality
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart')) {
        const productName = e.target.parentElement.querySelector('h3').textContent;
        alert(`${productName} has been added to your cart!`);
    }
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});
