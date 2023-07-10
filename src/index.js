import { fetchBreeds, fetchCatByBreed } from './cat-api';

const browser = document.querySelector('#selectEl');
const loader = document.querySelector('.loader');
const info = document.querySelector('.cat-info');

loader.classList.add('hidden');
fetchBreeds(browser);

browser.addEventListener('change', function () {
  fetchCatByBreed(browser.value, loader, info);
});
