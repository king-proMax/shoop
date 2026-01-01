// ============================================
// E-COMMERCE MAIN JAVASCRIPT
// ============================================

// State Management
const state = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
  user: JSON.parse(localStorage.getItem('user')) || null
};

// Save state to localStorage
function saveState() {
  localStorage.setItem('cart', JSON.stringify(state.cart));
  localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
  localStorage.setItem('user', JSON.stringify(state.user));
}

// Update cart badge
function updateCartBadge() {
  const badge = document.querySelector('.cart-badge');
  if (badge) {
    const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

// Update wishlist badge
function updateWishlistBadge() {
  const badge = document.querySelector('.wishlist-badge');
  if (badge) {
    badge.textContent = state.wishlist.length;
    badge.style.display = state.wishlist.length > 0 ? 'flex' : 'none';
  }
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav');
  const closeBtn = document.querySelector('.mobile-menu-close');

  function openMenu() {
    if (nav) {
      nav.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMenu() {
    if (nav) {
      nav.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (toggle) {
    toggle.addEventListener('click', openMenu);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  // Close menu when clicking on overlay (outside nav content)
  if (nav) {
    nav.addEventListener('click', (e) => {
      if (e.target === nav) {
        closeMenu();
      }
    });
  }

  // Close menu when clicking on nav links
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// ============================================
// HERO SLIDER
// ============================================
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  const prevBtn = document.querySelector('.hero-arrow.prev');
  const nextBtn = document.querySelector('.hero-arrow.next');

  if (slides.length === 0) return;

  let currentSlide = 0;
  let autoSlideInterval;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Event listeners
  if (nextBtn) nextBtn.addEventListener('click', () => { stopAutoSlide(); nextSlide(); startAutoSlide(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { stopAutoSlide(); prevSlide(); startAutoSlide(); });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      stopAutoSlide();
      showSlide(index);
      startAutoSlide();
    });
  });

  // Initialize
  showSlide(0);
  startAutoSlide();
}

// ============================================
// COUNTDOWN TIMER
// ============================================
function initCountdown() {
  const countdownEl = document.querySelector('.countdown');
  if (!countdownEl) return;

  // Set end date (24 hours from now for demo)
  const endDate = new Date();
  endDate.setHours(endDate.getHours() + 24);

  function updateCountdown() {
    const now = new Date();
    const diff = endDate - now;

    if (diff <= 0) {
      countdownEl.innerHTML = '<span>Sale Ended!</span>';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const daysEl = countdownEl.querySelector('[data-days]');
    const hoursEl = countdownEl.querySelector('[data-hours]');
    const minutesEl = countdownEl.querySelector('[data-minutes]');
    const secondsEl = countdownEl.querySelector('[data-seconds]');

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// ============================================
// CART FUNCTIONS
// ============================================
function addToCart(product) {
  const existingItem = state.cart.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += product.quantity || 1;
  } else {
    state.cart.push({
      ...product,
      quantity: product.quantity || 1
    });
  }

  saveState();
  updateCartBadge();
  showNotification(t('added_to_cart'), 'success');
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(item => item.id !== productId);
  saveState();
  updateCartBadge();
  renderCart();
}

function updateCartQuantity(productId, quantity) {
  const item = state.cart.find(item => item.id === productId);
  if (item) {
    item.quantity = Math.max(1, quantity);
    saveState();
    updateCartBadge();
    renderCart();
  }
}

function getCartTotal() {
  return state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function renderCart() {
  const cartContainer = document.querySelector('.cart-items');
  const cartTotal = document.querySelector('.cart-total-value');
  const cartSubtotal = document.querySelector('.cart-subtotal-value');

  if (!cartContainer) return;

  if (state.cart.length === 0) {
    cartContainer.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-shopping-cart"></i>
        <h3 data-translate="cart_empty">${t('cart_empty')}</h3>
        <p data-translate="cart_empty_desc">${t('cart_empty_desc')}</p>
        <a href="shop.html" class="btn btn-primary" data-translate="continue_shopping">${t('continue_shopping')}</a>
      </div>
    `;
    if (cartTotal) cartTotal.textContent = formatPrice(0);
    if (cartSubtotal) cartSubtotal.textContent = formatPrice(0);
    return;
  }

  cartContainer.innerHTML = state.cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-details">
        <h4 class="cart-item-name">${item.name}</h4>
        <p class="cart-item-variant">${item.variant || ''}</p>
        <p class="cart-item-price">${formatPrice(item.price)}</p>
      </div>
      <div class="cart-item-quantity">
        <button class="qty-btn minus" onclick="updateCartQuantity('${item.id}', ${item.quantity - 1})">-</button>
        <span>${item.quantity}</span>
        <button class="qty-btn plus" onclick="updateCartQuantity('${item.id}', ${item.quantity + 1})">+</button>
      </div>
      <div class="cart-item-subtotal">${formatPrice(item.price * item.quantity)}</div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  `).join('');

  const total = getCartTotal();
  if (cartSubtotal) cartSubtotal.textContent = formatPrice(total);
  if (cartTotal) cartTotal.textContent = formatPrice(total + 5.99); // Adding shipping
}

// ============================================
// WISHLIST FUNCTIONS
// ============================================
function toggleWishlist(product) {
  const index = state.wishlist.findIndex(item => item.id === product.id);

  if (index > -1) {
    state.wishlist.splice(index, 1);
    showNotification(t('removed_from_wishlist'), 'info');
  } else {
    state.wishlist.push(product);
    showNotification(t('added_to_wishlist'), 'success');
  }

  saveState();
  updateWishlistBadge();
  updateWishlistButtons();
}

function isInWishlist(productId) {
  return state.wishlist.some(item => item.id === productId);
}

function updateWishlistButtons() {
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    const productId = btn.dataset.productId;
    if (isInWishlist(productId)) {
      btn.classList.add('active');
      btn.innerHTML = '<i class="fas fa-heart"></i>';
    } else {
      btn.classList.remove('active');
      btn.innerHTML = '<i class="far fa-heart"></i>';
    }
  });
}

// ============================================
// NOTIFICATIONS
// ============================================
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
    <span>${message}</span>
  `;

  document.body.appendChild(notification);

  setTimeout(() => notification.classList.add('show'), 10);
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ============================================
// SEARCH AUTOCOMPLETE
// ============================================
function initSearchAutocomplete() {
  const searchInput = document.querySelector('.search-bar input');
  const autocomplete = document.querySelector('.search-autocomplete');

  if (!searchInput || !autocomplete) return;

  const products = [
    { id: 1, name: 'Wireless Headphones', category: 'Electronics', image: 'images/product1.jpg' },
    { id: 2, name: 'Smart Watch Pro', category: 'Electronics', image: 'images/product2.jpg' },
    { id: 3, name: 'Running Shoes', category: 'Fashion', image: 'images/product3.jpg' },
    { id: 4, name: 'Cotton T-Shirt', category: 'Fashion', image: 'images/product4.jpg' },
    { id: 5, name: 'Coffee Maker', category: 'Home', image: 'images/product5.jpg' }
  ];

  let debounceTimer;

  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    const query = e.target.value.toLowerCase().trim();

    if (query.length < 2) {
      autocomplete.classList.remove('active');
      return;
    }

    debounceTimer = setTimeout(() => {
      const results = products.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );

      if (results.length > 0) {
        autocomplete.innerHTML = results.map(p => `
          <a href="product.html?id=${p.id}" class="search-autocomplete-item">
            <img src="${p.image}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/40'">
            <div>
              <div class="search-item-name">${p.name}</div>
              <div class="search-item-category">${p.category}</div>
            </div>
          </a>
        `).join('');
        autocomplete.classList.add('active');
      } else {
        autocomplete.innerHTML = `<div class="search-autocomplete-item">${t('no_results_found')}</div>`;
        autocomplete.classList.add('active');
      }
    }, 300);
  });

  // Close autocomplete on click outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-bar')) {
      autocomplete.classList.remove('active');
    }
  });
}

// ============================================
// PRODUCT TABS (PDP)
// ============================================
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(target)?.classList.add('active');
    });
  });
}

// ============================================
// PRODUCT GALLERY (PDP)
// ============================================
function initProductGallery() {
  const mainImage = document.querySelector('.product-main-image img');
  const thumbnails = document.querySelectorAll('.product-thumbnail');
  const zoomLens = document.querySelector('.zoom-lens');

  if (!mainImage) return;

  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbnails.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      mainImage.src = thumb.querySelector('img').src;
    });
  });

  // Image zoom on hover
  if (zoomLens) {
    const imageContainer = mainImage.parentElement;

    imageContainer.addEventListener('mousemove', (e) => {
      const rect = imageContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      zoomLens.style.left = `${x - 50}px`;
      zoomLens.style.top = `${y - 50}px`;
      zoomLens.style.backgroundImage = `url(${mainImage.src})`;
      zoomLens.style.backgroundPosition = `-${x * 2 - 50}px -${y * 2 - 50}px`;
    });

    imageContainer.addEventListener('mouseenter', () => zoomLens.style.display = 'block');
    imageContainer.addEventListener('mouseleave', () => zoomLens.style.display = 'none');
  }
}

// ============================================
// QUANTITY SELECTOR
// ============================================
function initQuantitySelectors() {
  document.querySelectorAll('.quantity-selector').forEach(selector => {
    const minusBtn = selector.querySelector('.qty-minus');
    const plusBtn = selector.querySelector('.qty-plus');
    const input = selector.querySelector('.qty-input');

    if (!minusBtn || !plusBtn || !input) return;

    minusBtn.addEventListener('click', () => {
      const value = parseInt(input.value) || 1;
      input.value = Math.max(1, value - 1);
    });

    plusBtn.addEventListener('click', () => {
      const value = parseInt(input.value) || 1;
      const max = parseInt(input.max) || 99;
      input.value = Math.min(max, value + 1);
    });
  });
}

// ============================================
// FILTER SIDEBAR
// ============================================
function initFilters() {
  const filterToggle = document.querySelector('.filter-toggle');
  const filterSidebar = document.querySelector('.filter-sidebar');
  const filterClose = document.querySelector('.filter-close');
  const filterOverlay = document.querySelector('.filter-overlay');

  if (filterToggle && filterSidebar) {
    filterToggle.addEventListener('click', () => {
      filterSidebar.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  [filterClose, filterOverlay].forEach(el => {
    if (el) {
      el.addEventListener('click', () => {
        filterSidebar.classList.remove('active');
        document.body.style.overflow = '';
      });
    }
  });

  // Price range slider
  const priceRange = document.querySelector('.price-range');
  const priceMin = document.querySelector('.price-min');
  const priceMax = document.querySelector('.price-max');

  if (priceRange && priceMin && priceMax) {
    priceRange.addEventListener('input', (e) => {
      priceMax.textContent = `$${e.target.value}`;
    });
  }

  // Collapsible filter sections
  document.querySelectorAll('.filter-section-header').forEach(header => {
    header.addEventListener('click', () => {
      const section = header.parentElement;
      section.classList.toggle('collapsed');
    });
  });
}

// ============================================
// ACCORDION (FAQ)
// ============================================
function initAccordion() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('active');

      // Close all
      document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));

      // Open clicked one if it was closed
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });
}

// ============================================
// FORM VALIDATION
// ============================================
function initFormValidation() {
  document.querySelectorAll('form[data-validate]').forEach(form => {
    form.addEventListener('submit', (e) => {
      let isValid = true;

      form.querySelectorAll('[required]').forEach(input => {
        const errorEl = input.parentElement.querySelector('.error-message');

        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('error');
          if (errorEl) errorEl.textContent = t('field_required');
        } else if (input.type === 'email' && !isValidEmail(input.value)) {
          isValid = false;
          input.classList.add('error');
          if (errorEl) errorEl.textContent = t('email_invalid');
        } else {
          input.classList.remove('error');
          if (errorEl) errorEl.textContent = '';
        }
      });

      if (!isValid) {
        e.preventDefault();
      }
    });

    // Clear error on input
    form.querySelectorAll('[required]').forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('error');
        const errorEl = input.parentElement.querySelector('.error-message');
        if (errorEl) errorEl.textContent = '';
      });
    });
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ============================================
// CHECKOUT STEPS
// ============================================
function initCheckout() {
  const steps = document.querySelectorAll('.checkout-step');
  const stepIndicators = document.querySelectorAll('.step-indicator');
  let currentStep = 0;

  function showStep(index) {
    steps.forEach((step, i) => {
      step.classList.toggle('active', i === index);
    });

    stepIndicators.forEach((indicator, i) => {
      indicator.classList.remove('active', 'completed');
      if (i < index) indicator.classList.add('completed');
      if (i === index) indicator.classList.add('active');
    });

    currentStep = index;
  }

  document.querySelectorAll('.next-step').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep < steps.length - 1) {
        showStep(currentStep + 1);
      }
    });
  });

  document.querySelectorAll('.prev-step').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep > 0) {
        showStep(currentStep - 1);
      }
    });
  });

  // Initialize first step
  if (steps.length > 0) showStep(0);
}

// ============================================
// VIEW TOGGLE (GRID/LIST)
// ============================================
function initViewToggle() {
  const viewBtns = document.querySelectorAll('.view-toggle button');
  const productsGrid = document.querySelector('.products-grid');

  if (!viewBtns.length || !productsGrid) return;

  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      viewBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');

      // Check icon to determine view
      const isList = btn.querySelector('.fa-list');

      if (isList) {
        productsGrid.classList.add('products-list');
        productsGrid.classList.remove('products-grid');
      } else {
        productsGrid.classList.add('products-grid');
        productsGrid.classList.remove('products-list');
      }
    });
  });
}

// ============================================
// PRODUCT CARD INTERACTIONS
// ============================================
function initProductCards() {
  // Add to cart buttons
  document.querySelectorAll('.product-add-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.product-card');
      const product = {
        id: card.dataset.id || `prod-${Date.now()}`,
        name: card.querySelector('.product-title')?.textContent || 'Product',
        price: parseFloat(card.querySelector('[data-price-usd]')?.getAttribute('data-price-usd')) || parseFloat(card.querySelector('.current')?.textContent.replace('$', '')) || 0,
        image: card.querySelector('.product-card-image img')?.src || '',
        quantity: 1
      };
      addToCart(product);
    });
  });

  // Wishlist buttons
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.product-card');
      const product = {
        id: card.dataset.id || btn.dataset.productId || `prod-${Date.now()}`,
        name: card.querySelector('.product-title')?.textContent || 'Product',
        price: parseFloat(card.querySelector('[data-price-usd]')?.getAttribute('data-price-usd')) || parseFloat(card.querySelector('.current')?.textContent.replace('$', '')) || 0,
        image: card.querySelector('.product-card-image img')?.src || ''
      };
      toggleWishlist(product);
    });
  });
}

// ============================================
// INITIALIZE ON DOM READY
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Helper to safely run init functions
  const safeInit = (fn, name) => {
    try {
      if (typeof fn === 'function') {
        fn();
      }
    } catch (error) {
      console.warn(`Error initializing ${name}:`, error);
    }
  };

  // Initialize localization first (if translations.js is loaded)
  try {
    if (typeof initLocalization === 'function') {
      initLocalization();
    }
  } catch (error) {
    console.error('Localization initialization failed:', error);
  }

  // Initialize all components safely
  safeInit(initMobileMenu, 'MobileMenu');
  safeInit(initHeroSlider, 'HeroSlider');
  safeInit(initCountdown, 'Countdown');
  safeInit(initSearchAutocomplete, 'SearchAutocomplete');
  safeInit(initTabs, 'Tabs');
  safeInit(initProductGallery, 'ProductGallery');
  safeInit(initQuantitySelectors, 'QuantitySelectors');
  safeInit(initFilters, 'Filters');
  safeInit(initAccordion, 'Accordion');
  safeInit(initFormValidation, 'FormValidation');
  safeInit(initCheckout, 'Checkout');
  safeInit(initProductCards, 'ProductCards');
  safeInit(initViewToggle, 'ViewToggle');

  // Update badges
  safeInit(updateCartBadge, 'CartBadge');
  safeInit(updateWishlistBadge, 'WishlistBadge');
  safeInit(updateWishlistButtons, 'WishlistButtons');

  // Render cart if on cart page
  if (document.querySelector('.cart-items')) {
    safeInit(renderCart, 'Cart');
  }

  console.log('E-Commerce site initialized!');
});

// Add notification styles dynamically
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
  .notification {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 16px 24px;
    background: #1E293B;
    color: white;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    transform: translateX(120%);
    transition: transform 0.3s ease;
    z-index: 9999;
  }
  .notification.show { transform: translateX(0); }
  .notification-success { border-left: 4px solid #22C55E; }
  .notification-error { border-left: 4px solid #EF4444; }
  .notification-info { border-left: 4px solid #3B82F6; }
  .notification i { font-size: 20px; }
  .notification-success i { color: #22C55E; }
  .notification-error i { color: #EF4444; }
  .notification-info i { color: #3B82F6; }
`;
document.head.appendChild(notificationStyles);
