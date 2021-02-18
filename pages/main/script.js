const popupDarkScreen = document.querySelector('.popup__dark-screen');
      popup = document.querySelector('.popup'),
      popupContent = document.querySelector('.popup__content'),
      closeButton = document.querySelector('.popup__close-btn');

let pets;

document.querySelectorAll('.slider__item').forEach(item => {
  item.addEventListener('click', () => {
    popupContent.innerHTML = '';
    createPopup(item);
    popup.classList.add('popup_visible');
    document.body.classList.add('body_lock');
  });
});

closeButton.addEventListener('click', () => {
  popup.classList.remove('popup_visible');
  document.body.classList.remove('body_lock');
});

popupDarkScreen.addEventListener('click', () => {
  popup.classList.remove('popup_visible');
  document.body.classList.remove('body_lock');
});


const getData = async function (url) {
	
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Error pets.json load`);
  }
  return await response.json();
}

getData('../../assets/pets.json').then((data) => {
  pets = data;
  //console.log(pets);
  //console.log(pets[0].name);
})


function createPopup(sliderCard) {
  //console.log(sliderCard.children[1].innerText)
  pets.forEach(petItem => {
    if (petItem['name'] === sliderCard.children[1].innerText) {
      popupContent.insertAdjacentHTML('beforeend', 
      `<div class="popup__img">
        <img src="${petItem.img}" alt="${petItem.type} ${petItem.name}">
      </div>
      <div class="popup__info">
        <h3 class="popup__title">${petItem.name}</h3>
        <h4 class="popup__subtitle">${petItem.type} - ${petItem.breed}</h4>
        <p class="popup__description">${petItem.description}</p>
        <ul class="popup__list">
            <li class="popup__item"><span><strong>Age: </strong>${petItem.age}</span></li>
            <li class="popup__item"><span><strong>Inoculations: </strong>${petItem.inoculations}</span></li>
            <li class="popup__item"><span><strong>Diseases: </strong>${petItem.diseases}</span></li>
            <li class="popup__item"><span><strong>Parasites: </strong>${petItem.parasites}</span></li>
        </ul>
      </div>`);
    }
  })
}



