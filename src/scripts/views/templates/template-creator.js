import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
    <picture>
     <source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}">
     <img src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous" class="lazyload" />
    </picture>
    
    <p><strong>Address:</strong> ${restaurant.address}</p>
    <p><strong>City:</strong> ${restaurant.city}</p>
    <p><strong>Rating:</strong> ${restaurant.rating} ⭐</p>
    <p><strong>Description:</strong> ${restaurant.description}</p>
    
    <h3>Categories</h3>
    <ul>
      ${restaurant.categories.map((category) => `<li>${category.name}</li>`).join('')}
    </ul>
    
    <h3>Menu</h3>
    
    <h4>Food</h4>
    <ul>
      ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
    </ul>
    
    <h4>Drinks</h4>
    <ul>
      ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
    </ul>
    
    <h3>Customer Reviews</h3>
    <ul id="customer-reviews">
      ${restaurant.customerReviews.map((review) => `
        <li>
          <strong>${review.name}</strong> <br>
          <em>Date: ${review.date}</em> <br>
          ${review.review}
        </li>
      `).join('')}
    </ul>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant">
     <picture>
       <source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}">
       <img src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous" class="lazyload" />
     </picture>

     <div>
       <h3 class="restaurant__title">
          <a href="/#/detail/${restaurant.id}" >${restaurant.name}</a>
       </h3>
       <p>Location: ${restaurant.city}</p>
       <p>Rating: ${restaurant.rating}</p>
       <p>${restaurant?.description?.length > 200 ? `${restaurant.description.slice(0, 200)}...` : restaurant?.description}</p>
       <a href="/#/detail/${restaurant.id}" class="btn-details">See Details</a>
     </div>
  </div>
`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
     <i class="fa fa-heart-o" aria-hidden="true"></i> Add to Favorite
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="favoriteButton" class="favorite">
    <i class="fa fa-heart" aria-hidden="true"></i> Remove From Favorite
  </button>
`;

const createReviewTemplate = () => `
   <h3>Add Review</h3>
   <form id="review-form">
      <input type="text" id="reviewer-name" placeholder="Your Name" required />
      <textarea id="review-text" placeholder="Your Review" required></textarea>
      <div class="button-container">
        <button type="submit">Submit Review</button>
      </div>
   </form>
`;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate, createFavoriteButtonTemplate, createFavoritedButtonTemplate, createReviewTemplate };