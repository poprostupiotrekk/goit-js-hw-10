import axios from 'axios';

// import {fetchBreeds} from './cat-api'
import { fetchBreeds, fetchCatByBreed } from './cat-api';

axios.defaults.headers.common['x-api-key'] =
  'live_ qmXsCpaZo5F8CHTPwhdqdxDGs4CXgH cVRQrkSLjFufIdIX3U6CoElNngQxfD v7ur';

import {
  selectBreed,
  catInfo,
  selectList,
  catBreed,
  catId,
  catInfoContener,
  loader,
  catTemperament,
} from './myVariables';

fetchBreeds().then(cats => {
  console.log(cats);
  for (const cat of cats) {
    catId.push(cat.id);
    catBreed.push(cat.name);
  }

  for (let i = 0; i < catId.length; i++) {
    const optionsBreed = document.createElement('option');
    optionsBreed.value = catId[i];
    optionsBreed.textContent = catBreed[i];
    selectList.push(optionsBreed);
  }
  selectBreed.append(...selectList);

  loader.classList.add('is-hiden');
  selectBreed.classList.remove('is-hiden');
});

selectBreed.addEventListener('change', () => {
  loader.classList.remove('is-hiden');
  catInfoContener.innerHTML = '';
  catInfoContener.classList.add('is-hiden');
  let catImgUrl = '';
  const index = selectBreed.selectedIndex;
  fetchCatByBreed(selectBreed.value).then(imgs => {
    for (const img of imgs) {
      catImgUrl = img.url;
    }
    console.log(catImgUrl);
    const catImg = document.createElement('img');
    catImg.src = catImgUrl;
    catImg.width = 300;
    catInfoContener.append(catImg);
    setTimeout(() => {
      catInfoContener.classList.remove('is-hiden');
      loader.classList.add('is-hiden');
    }, 2000);
  });
  fetchBreeds().then(cats => {
    for (const cat of cats) {
      catBreed.push(cat.name);
      catInfo.push(cat.description);
      catTemperament.push(cat.temperament);
    }
    const infoDiv = document.createElement('div');

    const catHeading = document.createElement('h1');
    const index = selectBreed.selectedIndex;
    catHeading.textContent = selectBreed.options[index].text;
    infoDiv.append(catHeading);

    const catP = document.createElement('p');
    catP.textContent = catInfo[index];
    infoDiv.append(catP);

    const catT = document.createElement('p');
    catT.textContent = `Temperament: ${catTemperament[index]}`;
    infoDiv.append(catT);

    catInfoContener.append(infoDiv);
  });
});
