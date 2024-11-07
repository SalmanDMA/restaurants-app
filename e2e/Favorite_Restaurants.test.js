/* eslint-disable no-undef */
const assert = require('assert');

Feature('Favorite Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking and unliking a restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForInvisible('#loading', 10);
  I.waitForElement('.restaurant__title a', 5);

  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#favoriteButton', 5);
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant');
  const favoritedRestaurantTitle = await I.grabTextFrom('.restaurant__title a');
  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);


  I.click(favoritedRestaurantTitle);
  I.waitForElement('#favoriteButton', 5);
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('searching restaurants', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
  I.amOnPage('/');

  I.waitForInvisible('#loading', 10);

  I.waitForElement('.restaurant__title a', 5);

  const titles = [];
  for (let i = 1; i <= 3; i += 1) {
    I.click(locate('.restaurant__title a').at(i));

    I.waitForElement('#favoriteButton', 5);
    I.click('#favoriteButton');

    titles.push(await I.grabTextFrom('.restaurant__title'));

    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#query');

  const visibleFavoritedRestaurants = await I.grabNumberOfVisibleElements('.restaurant');
  assert.strictEqual(titles.length, visibleFavoritedRestaurants);

  const searchQuery = titles[1].substring(1, 3);
  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const matchingRestaurants = titles.filter((title) => title.indexOf(searchQuery) !== -1);
  const visibleSearchedFavoriteddRestaurants = await I.grabNumberOfVisibleElements('.restaurant');

  assert.strictEqual(matchingRestaurants.length, visibleSearchedFavoriteddRestaurants);

  for (let i = 0; i < matchingRestaurants.length; i++) {
    const visibleTitle = await I.grabTextFrom(locate('.restaurant__title a').at(i + 1));
    assert.strictEqual(matchingRestaurants[i], visibleTitle);
  }
});

Scenario('adding a customer review', async ({ I }) => {
  I.amOnPage('/');
  I.waitForInvisible('#loading', 10);
  I.waitForElement('.restaurant__title a', 5);

  const firstRestaurant = locate('.restaurant__title a').first();
  I.click(firstRestaurant);

  I.waitForElement('#review-form', 5);
  I.fillField('#reviewer-name', 'Test User');
  I.fillField('#review-text', 'Great place, excellent food!');
  I.click('#review-form button[type="submit"]');

  I.waitForElement('#customer-reviews li', 30);

  const reviews = await I.grabTextFromAll('#customer-reviews li');
  const reviewExists = reviews.some((review) => review.includes('Test User') && review.includes('Great place, excellent food!'));

  assert.ok(reviewExists);
});




