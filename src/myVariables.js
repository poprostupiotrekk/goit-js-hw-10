const selectBreed = document.querySelector('select.breed-select');
const catInfoContener = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const failure = document.querySelector('.error');

const catId = [];
const catBreed = [];
const selectList = [];
const catInfo = [];
const catTemperament = [];

export {
  catInfo,
  selectList,
  catBreed,
  catId,
  selectBreed,
  catInfoContener,
  loader,
  failure,
  catTemperament,
};
