const Home = {
  async render() {
    return `
      <div class="content">
        <section class="hero" id="main-content">
          <div class="hero-content">
            <h1>Welcome to Resto Apps</h1>
            <p>Discover the best restaurants around you.</p>
          </div>
        </section>
        <section class="restaurant_container" id="restaurant_container">
          <h2>Explore Restaurant</h2>
          <div class="restaurants" id="restaurants"></div>
        </section>
        <div class="container-testi-tips">
          <section class="testimonials">
            <h2>What Our Users Say</h2>
            <div class="testimonial-list">
              <div class="testimonial-item">
                <p>"Resto Apps has made finding great places to eat easier than ever. Highly recommend!"</p>
                <p>- Sarah L.</p>
              </div>
              <div class="testimonial-item">
                <p>"The restaurant recommendations are spot on. I discovered my new favorite place thanks to this app!"</p>
                <p>- John D.</p>
              </div>
            </div>
          </section>
          <section class="tips">
            <h2>Restaurant Tips</h2>
            <div class="tip-list">
              <article class="tip-item">
                <h3>How to Choose the Best Restaurant for a Special Occasion</h3>
                <p>Looking for a place to celebrate an important event?</p>
                <a href="https://www.thehandbook.com/special-occasion-restaurants/">Read More</a>
              </article>
              <article class="tip-item">
                <h3>5 Hidden Gem Restaurants You Must Try</h3>
                <p>Discover some of the best-kept secrets in the city...</p>
                <a href="https://www.socialexpat.net/5-unique-restaurants-in-jakarta-you-must-try/">Read More</a>
              </article>
            </div>
          </section>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurantsContainer.innerHTML = `
      <div class="skeleton skeleton-image"></div>
      <div class="skeleton skeleton-text"></div>
      <div class="skeleton skeleton-text"></div>
    `;

    try {
      const { default: RestaurantDbSource } = await import('../../data/restaurantdb-source');
      const { createRestaurantItemTemplate } = await import('../templates/template-creator');

      const restaurants = await RestaurantDbSource.homeRestaurants();
      restaurantsContainer.innerHTML = restaurants.map(createRestaurantItemTemplate).join('');
    } catch (error) {
      restaurantsContainer.innerHTML = '<p class="error-message">Failed to load restaurants. Please try again later.</p>';
    }
  }
};

export default Home;
