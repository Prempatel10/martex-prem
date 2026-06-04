const videoButtons = document.querySelectorAll('.video-card-button');
const videoModal = document.getElementById('videoModal');
const videoIframe = document.getElementById('videoIframe');
const videoClose = document.getElementById('videoModalClose');

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

function openVideo(videoId) {
  videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  videoModal.classList.add('open');
  videoModal.setAttribute('aria-hidden', 'false');
}

function closeVideo() {
  videoIframe.src = '';
  videoModal.classList.remove('open');
  videoModal.setAttribute('aria-hidden', 'true');
}

if (videoButtons.length > 0) {
  videoButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const videoId = btn.getAttribute('data-video-id') || '7e90gBu4pas';
      openVideo(videoId);
    });
  });
}

if (videoClose) {
  videoClose.addEventListener('click', closeVideo);
}

if (videoModal) {
  videoModal.addEventListener('click', event => {
    if (event.target === videoModal) {
      closeVideo();
    }
  });
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && videoModal.classList.contains('open')) {
    closeVideo();
  }
});

// Dropdown menu functionality
const navDropdowns = document.querySelectorAll('.nav-dropdown');

navDropdowns.forEach(navDropdown => {
  const aboutLink = navDropdown.querySelector('a');
  const dropdownMenu = navDropdown.querySelector('.dropdown-menu');
  
  if (aboutLink) {
    aboutLink.addEventListener('click', event => {
      event.preventDefault();
      // Close other dropdowns
      navDropdowns.forEach(other => {
        if (other !== navDropdown) {
          other.classList.remove('active');
        }
      });
      navDropdown.classList.toggle('active');
    });
  }
});

// Close dropdown when clicking outside
document.addEventListener('click', event => {
  navDropdowns.forEach(navDropdown => {
    if (!navDropdown.contains(event.target)) {
      navDropdown.classList.remove('active');
    }
  });
});

// Keep dropdown open when clicking on menu items
navDropdowns.forEach(navDropdown => {
  const dropdownMenu = navDropdown.querySelector('.dropdown-menu');
  if (dropdownMenu) {
    const menuItems = dropdownMenu.querySelectorAll('a');
    menuItems.forEach(item => {
      item.addEventListener('click', event => {
        navDropdown.classList.remove('active');
      });
    });
  }
});

// Popup modal functionality
const popupModal = document.getElementById('popupModal');
const popupClose = document.getElementById('popupModalClose');

function openPopup() {
  if (popupModal) {
    popupModal.classList.add('open');
    popupModal.setAttribute('aria-hidden', 'false');
  }
}

const popupTrigger = document.getElementById('popupTrigger');
if (popupTrigger) {
  popupTrigger.addEventListener('click', openPopup);
}

function closePopup() {
  if (popupModal) {
    popupModal.classList.remove('open');
    popupModal.setAttribute('aria-hidden', 'true');
  }
}

if (popupClose) {
  popupClose.addEventListener('click', closePopup);
}

if (popupModal) {
  popupModal.addEventListener('click', event => {
    if (event.target === popupModal) {
      closePopup();
    }
  });
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && popupModal && popupModal.classList.contains('open')) {
    closePopup();
  }
});

function resetScrollPosition() {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
}

window.addEventListener('load', () => {
  resetScrollPosition();
  if (popupModal) {
    openPopup();
  }
});

window.addEventListener('pageshow', event => {
  if (event.persisted) {
    resetScrollPosition();
  }
});

// Pricing page functionality
const billingToggle = document.getElementById('billingToggle');
const basicPrice = document.getElementById('basicPrice');
const advancedPrice = document.getElementById('advancedPrice');
const basicPeriod = document.getElementById('basicPeriod');
const advancedPeriod = document.getElementById('advancedPeriod');
const basicBadge = document.getElementById('basicBadge');
const advancedBadge = document.getElementById('advancedBadge');

// Pricing data
const prices = {
  monthly: {
    basic: '16.99',
    advanced: '24.99'
  },
  yearly: {
    basic: '142.75',
    advanced: '194.99'
  }
};

let isYearly = false;

if (billingToggle) {
  billingToggle.addEventListener('click', () => {
    isYearly = !isYearly;
    billingToggle.classList.toggle('active');

    if (isYearly) {
      // Switch to yearly
      basicPrice.textContent = prices.yearly.basic;
      advancedPrice.textContent = prices.yearly.advanced;
      basicPeriod.textContent = '/ yr';
      advancedPeriod.textContent = '/ yr';
      basicBadge.classList.add('show');
      advancedBadge.classList.add('show');
    } else {
      // Switch to monthly
      basicPrice.textContent = prices.monthly.basic;
      advancedPrice.textContent = prices.monthly.advanced;
      basicPeriod.textContent = '/ mo';
      advancedPeriod.textContent = '/ mo';
      basicBadge.classList.remove('show');
      advancedBadge.classList.remove('show');
    }
  });
}

// Pricing 2 page functionality
const billingToggle2 = document.getElementById('billingToggle2');
const plusPrice = document.getElementById('plusPrice');
const proPrice = document.getElementById('proPrice');
const plusPeriod = document.getElementById('plusPeriod');
const proPeriod = document.getElementById('proPeriod');
const plusBadge = document.getElementById('plusBadge');
const proBadge = document.getElementById('proBadge');

// Pricing 2 data
const prices2 = {
  monthly: {
    plus: '4',
    pro: '7'
  },
  yearly: {
    plus: '36',
    pro: '63'
  }
};

let isYearly2 = false;

if (billingToggle2) {
  billingToggle2.addEventListener('click', () => {
    isYearly2 = !isYearly2;
    billingToggle2.classList.toggle('active');

    if (isYearly2) {
      plusPrice.textContent = prices2.yearly.plus;
      proPrice.textContent = prices2.yearly.pro;
      plusPeriod.textContent = '/ yr';
      proPeriod.textContent = '/ yr';
      plusBadge.classList.add('show');
      proBadge.classList.add('show');
    } else {
      plusPrice.textContent = prices2.monthly.plus;
      proPrice.textContent = prices2.monthly.pro;
      plusPeriod.textContent = '/ mo';
      proPeriod.textContent = '/ mo';
      plusBadge.classList.remove('show');
      proBadge.classList.remove('show');
    }
  });
}

// FAQ accordion functionality on the FAQ page
const faqCategories = document.querySelectorAll('.faq-category');

faqCategories.forEach(category => {
  const toggle = category.querySelector('.faq-category-toggle');
  const body = category.querySelector('.faq-category-body');
  const header = category.querySelector('.faq-category-header');

  if (!toggle || !body || !header) {
    return;
  }

  function toggleCategory() {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isExpanded));
    toggle.textContent = isExpanded ? '+' : '−';
    body.classList.toggle('open', !isExpanded);
  }

  toggle.addEventListener('click', event => {
    event.stopPropagation();
    toggleCategory();
  });

  header.addEventListener('click', () => {
    toggleCategory();
  });
});

// Brands carousel functionality
const brandsGrid = document.getElementById('brandsGrid');
if (brandsGrid) {
  const brandItems = Array.from(brandsGrid.children);
  
  // Clone items for infinite scrolling
  brandItems.forEach(item => {
    const clone = item.cloneNode(true);
    brandsGrid.appendChild(clone);
  });
}

// Help Center accordion functionality
const helpTopics = document.querySelectorAll('.help-topic-item');

helpTopics.forEach(topic => {
  const toggle = topic.querySelector('.help-topic-toggle');
  const body = topic.querySelector('.help-topic-content');
  const icon = topic.querySelector('.topic-icon');

  if (!toggle || !body || !icon) {
    return;
  }

  function toggleTopic() {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isExpanded));
    icon.textContent = isExpanded ? '+' : '−';
    body.classList.toggle('open', !isExpanded);
  }

  toggle.addEventListener('click', event => {
    event.stopPropagation();
    toggleTopic();
  });
});

// Help Center Tabs functionality
const helpCards = document.querySelectorAll('.help-card');
const helpTopicsLists = document.querySelectorAll('.help-topics-list');

helpCards.forEach(card => {
  card.addEventListener('click', () => {
    // Remove active class from all cards
    helpCards.forEach(c => c.classList.remove('active'));
    // Add active class to clicked card
    card.classList.add('active');

    // Hide all topics lists
    helpTopicsLists.forEach(list => list.classList.remove('active'));
    
    // Show the target topics list
    const targetId = card.getAttribute('data-target');
    if (targetId) {
      const targetList = document.getElementById(targetId);
      if (targetList) {
        targetList.classList.add('active');
      }
    }
  });
});

// Careers page navbar scroll effect
const careersTopbar = document.querySelector('.careers-page .topbar');
const careersHero = document.querySelector('.careers-hero');
const careersLogo = document.querySelector('.careers-page .brand-logo');

if (careersTopbar && careersHero && careersLogo) {
  let isScrolled = false;
  
  // Initialize styles for blend effect
  careersTopbar.style.transition = 'background-color 0.3s ease, box-shadow 0.3s ease';
  careersLogo.style.transition = 'opacity 0.2s ease';

  window.addEventListener('scroll', () => {
    const scrollThreshold = careersHero.offsetHeight - 50;
    if (window.scrollY > scrollThreshold && !isScrolled) {
      careersTopbar.classList.add('scrolled');
      careersLogo.style.opacity = '0';
      setTimeout(() => {
        careersLogo.src = 'images/logo-blue.png';
        careersLogo.style.opacity = '1';
      }, 200);
      isScrolled = true;
    } else if (window.scrollY <= scrollThreshold && isScrolled) {
      careersTopbar.classList.remove('scrolled');
      careersLogo.style.opacity = '0';
      setTimeout(() => {
        careersLogo.src = 'images/logo.png';
        careersLogo.style.opacity = '1';
      }, 200);
      isScrolled = false;
    }
  });
}

// Index page navbar scroll effect
const indexTopbar = document.querySelector('.index-page .topbar');
const indexHero = document.querySelector('.index-page .hero');
const indexLogo = document.querySelector('.index-page .brand-logo');

if (indexTopbar && indexHero && indexLogo) {
  let isIndexScrolled = false;
  
  // Initialize styles for blend effect
  indexTopbar.style.transition = 'background-color 0.3s ease, box-shadow 0.3s ease';
  indexLogo.style.transition = 'opacity 0.2s ease';

  window.addEventListener('scroll', () => {
    const scrollThreshold = indexHero.offsetHeight - 50;
    if (window.scrollY > scrollThreshold && !isIndexScrolled) {
      indexTopbar.classList.add('scrolled');
      indexLogo.style.opacity = '0';
      setTimeout(() => {
        indexLogo.src = 'images/logo-pink.png';
        indexLogo.style.opacity = '1';
      }, 200);
      isIndexScrolled = true;
    } else if (window.scrollY <= scrollThreshold && isIndexScrolled) {
      indexTopbar.classList.remove('scrolled');
      indexLogo.style.opacity = '0';
      setTimeout(() => {
        indexLogo.src = 'images/logo.png';
        indexLogo.style.opacity = '1';
      }, 200);
      isIndexScrolled = false;
    }
  });
}

