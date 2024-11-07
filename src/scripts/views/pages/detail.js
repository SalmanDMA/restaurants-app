import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="restaurant-detail" class="restaurant-detail">
        <div id="restaurant-content" class="restaurant-content">
          <div class="skeleton-image skeleton"></div>
          <div class="skeleton-text skeleton" style="width: 60%;"></div>
          <div class="skeleton-text skeleton" style="width: 40%;"></div>
          <div class="skeleton-text skeleton" style="width: 50%;"></div>
          <h3 class="skeleton-text skeleton" style="width: 30%;"></h3>
          <ul>
            <li class="skeleton-text skeleton" style="width: 30%;"></li>
            <li class="skeleton-text skeleton" style="width: 25%;"></li>
            <li class="skeleton-text skeleton" style="width: 40%;"></li>
          </ul>
          <h4 class="skeleton-text skeleton" style="width: 20%;"></h4>
          <ul>
            <li class="skeleton-text skeleton" style="width: 50%;"></li>
            <li class="skeleton-text skeleton" style="width: 45%;"></li>
            <li class="skeleton-text skeleton" style="width: 35%;"></li>
          </ul>
        </div>
        <div id="favorite-button-container" class="favorite-button-container"></div>
        <div id="review-container" class="review-container"></div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#restaurant-content');

    try {
      const { default: RestaurantDbSource } = await import('../../data/restaurantdb-source');
      const restaurant = await RestaurantDbSource.detailRestaurant(url.id);

      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      const { default: ReviewFormInitiator } = await import('../../utils/review-form-initiator');
      await ReviewFormInitiator.init({
        reviewFormContainer: document.querySelector('#review-container'),
        restaurantId: url.id,
      });

      const { default: FavoriteButtonInitiator } = await import('../../utils/favorite-button-initiator');
      FavoriteButtonInitiator.init({
        favoriteButtonContainer: document.querySelector('#favorite-button-container'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          pictureId: restaurant.pictureId,
          city: restaurant.city,
          rating: restaurant.rating,
          description: restaurant.description,
        },
      });
    } catch (error) {
      restaurantContainer.innerHTML = '<p class="error-message">Failed to load restaurant details. Please try again later.</p>';
    }
  }

};

export default Detail;

