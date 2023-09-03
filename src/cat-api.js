import Notiflix from 'notiflix';

import { selectBreed, catInfoContener, loader, failure } from './myVariables';

export function fetchBreeds() {
  const urlBreed = 'https://api.thecatapi.com/v1/breeds';
  const options = [];
  return new Promise((resolve, reject) => {
    fetch(urlBreed, options)
      .then(response => {
        if (!response.ok) reject(new Error('Request failed'));
        return response.json();
      })
      .then(data => resolve(data))
      .catch(() =>
        reject(
          catInfoContener.classList.add('is-hiden'),
          loader.classList.add('is-hiden'),
          selectBreed.classList.add('is-hiden'),
          failure.classList.remove('is-hiden'),
          Notiflix.Notify.failure(
            'Oops! Something went wrong! Try reloading the page!'
          )
        )
      );
  });
}

// breed cat end

export function fetchCatByBreed(breedId) {
  const urlInfo = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  const optionsInfo = [];
  return new Promise((resolve, reject) => {
    fetch(urlInfo, optionsInfo)
      .then(response => {
        return response.json();
      })
      .then(data => resolve(data))
      .catch(() =>
        reject(
          catInfoContener.classList.add('is-hiden'),
          loader.classList.add('is-hiden'),
          selectBreed.classList.add('is-hiden'),
          failure.classList.remove('is-hiden'),
          Notiflix.Notify.failure(
            'Oops! Something went wrong! Try reloading the page!'
          )
        )
      );
  });
}
