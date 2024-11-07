import RestaurantDbSource  from '../data/restaurantdb-source';
import AlertInitiator from './alert-initiator';
import { createReviewTemplate } from '../views/templates/template-creator';

const ReviewFormInitiator = {
  async init({ reviewFormContainer, restaurantId }) {
    this._reviewFormContainer = reviewFormContainer;
    this._restaurantId = restaurantId;

    this._renderForm();
  },

  _renderForm() {
    this._reviewFormContainer.innerHTML = createReviewTemplate();
    const reviewForm = document.getElementById('review-form');
    reviewForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const name = document.getElementById('reviewer-name').value;
      const review = document.getElementById('review-text').value;

      try {
        const response = await RestaurantDbSource.addReview({ id: this._restaurantId, name, review });
        if (!response.error) {
          this._addReviewToList(response.customerReviews);
          AlertInitiator.showAlert('Review added successfully!', 'success');
          reviewForm.reset();
        } else {
          AlertInitiator.showAlert('Failed to add review. Please try again.', 'error');
        }
      } catch (error) {
        console.error('Error adding review:', error);
        AlertInitiator.showAlert('An error occurred while adding your review.', 'error');
      }
    });
  },

  _addReviewToList(customerReviews) {
    const customerReviewsList = document.getElementById('customer-reviews');
    const newReview = customerReviews[customerReviews.length - 1];
    const reviewItem = document.createElement('li');
    reviewItem.innerHTML = `
      <strong>${newReview.name}</strong> <br>
      <em>Date: ${newReview.date}</em> <br>
      ${newReview.review}
    `;
    customerReviewsList.appendChild(reviewItem);
  },
};

export default ReviewFormInitiator;