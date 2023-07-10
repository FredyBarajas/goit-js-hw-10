import { fetchBreeds, fetchCatByBreed } from './cat-api';
const url = 'https://api.thecatapi.com/v1/';

const browser = document.querySelector('#selectEl');
const loader = document.querySelector('.loader');
const info = document.querySelector('.cat-info');

loader.classList.add('hidden');
fetchBreeds(url, browser);

browser.addEventListener('change', function () {
  fetchCatByBreed(browser.value, url, loader, info);
});
