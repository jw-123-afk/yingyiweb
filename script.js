document.addEventListener('DOMContentLoaded', function () {
    initializeBackToTop();
    initializeWeatherWidget();
    initializeImageGallery();
  });
  
  // Image Gallery 
  function initializeImageGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxNext = document.getElementById('lightbox-next');
    const lightboxPrev = document.getElementById('lightbox-prev');
  
    if (galleryItems.length && lightbox && lightboxImg) {
      let currentIndex = 0;
  
      galleryItems.forEach((item, index) => {
        item.addEventListener('click', function () {
          currentIndex = index;
          const imgSrc = this.querySelector('img').getAttribute('src');
          lightboxImg.setAttribute('src', imgSrc);
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden';
        });
      });
  
      lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      });
  
      lightboxNext.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        const imgSrc = galleryItems[currentIndex].querySelector('img').getAttribute('src');
        lightboxImg.setAttribute('src', imgSrc);
      });
  
      lightboxPrev.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        const imgSrc = galleryItems[currentIndex].querySelector('img').getAttribute('src');
        lightboxImg.setAttribute('src', imgSrc);
      });
  
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
          lightbox.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
  
      document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') lightbox.classList.remove('active');
        if (e.key === 'ArrowRight') lightboxNext.click();
        if (e.key === 'ArrowLeft') lightboxPrev.click();
      });
    }
  }
  
  // Weather Widget 
  function initializeWeatherWidget() {
    const weatherWidget = document.getElementById('weather-widget');
    if (!weatherWidget) return;
  
    const defaultCity = 'Kuala Lumpur';
  
    async function fetchWeather(city) {
      const weatherData = {
        city,
        temp: Math.floor(Math.random() * 10) + 25,
        condition: ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy'][Math.floor(Math.random() * 4)],
        humidity: Math.floor(Math.random() * 30) + 60,
        wind: Math.floor(Math.random() * 10) + 5,
      };
  
      updateWeatherUI(weatherData);
    }
  
    function updateWeatherUI(data) {
      let weatherIcon = '<i class="fas fa-cloud"></i>';
      if (data.condition === 'Sunny') weatherIcon = '<i class="fas fa-sun"></i>';
      else if (data.condition === 'Cloudy') weatherIcon = '<i class="fas fa-cloud"></i>';
      else if (data.condition === 'Partly Cloudy') weatherIcon = '<i class="fas fa-cloud-sun"></i>';
      else if (data.condition === 'Rainy') weatherIcon = '<i class="fas fa-cloud-rain"></i>';
  
      weatherWidget.innerHTML = `
        <div class="weather-icon">${weatherIcon}</div>
        <div class="weather-info">
            <h4>${data.city}</h4>
            <div class="weather-temp">${data.temp}°C</div>
            <div class="weather-condition">${data.condition}</div>
            <div class="weather-details">
                <span><i class="fas fa-tint"></i> ${data.humidity}%</span>
                <span><i class="fas fa-wind"></i> ${data.wind} km/h</span>
            </div>
        </div>
      `;
    }
  
    fetchWeather(defaultCity);
  }
  
  // Back to Top Button
  function initializeBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
  
    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 300);
    });
  
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  