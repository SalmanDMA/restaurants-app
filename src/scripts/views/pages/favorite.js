import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantView from './favorited-restaurants/favorite-restaurant-view';

const view = new FavoriteRestaurantView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    const { default: FavoriteRestaurantShowPresenter } = await import(
      './favorited-restaurants/favorite-restaurant-show-presenter'
    );
    const { default: FavoriteRestaurantSearchPresenter } = await import(
      './favorited-restaurants/favorite-restaurant-search-presenter'
    );

    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
  },
};

export default Favorite;
