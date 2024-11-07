import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async homeRestaurants() {
    try {
      const response = await fetch(API_ENDPOINT.HOME);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      throw new Error('Failed to fetch restaurants');
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      throw new Error('Failed to fetch restaurant details');
    }
  }

  static async addReview(review) {
    try {
      const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      });
      return response.json();
    } catch (error) {
      throw new Error('Failed to submit review');
    }
  }
}

export default RestaurantDbSource;
