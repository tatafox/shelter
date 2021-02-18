const sliderCard = document.querySelector('.slider__card'),
    sliderItem = document.querySelectorAll('.slider__item'),
    sliderButtons = document.querySelectorAll('.slider__button');

let previousElements = [4, 0, 2],
    newElements = [];


function insertItems(newElements) {
  let i = 0;
  newElements.forEach(element => {
    sliderItem[i].insertAdjacentHTML('beforeend', 
    `<img class="item__img" src="${pets[element].img}" alt="${pets[element].type} ${pets[element].name}">
    <h4 class="item__title">${pets[element].name}</h4>     
    <button class="item__button button-hover">Learn more</button>`);
    i += 1;
  });
  sliderItem.forEach(slide => {
    slide.classList.add('slider__item_visible');
  })
}


function randomNewElements() {
    let randomNumber;
    newElements = [];
    do {
      randomNumber = Math.floor(Math.random() * 8);
      if (!previousElements.includes(randomNumber) & !newElements.includes(randomNumber)) {
        newElements.push(randomNumber);
      }
    } while (newElements.length < 3)
}

function deletePreviousElements() {
  sliderItem.forEach(slide => {
    slide.classList.remove('slider__item_visible');
  })
  setTimeout(() => {
    sliderItem.forEach(slide => {
      while (slide.firstChild) {
        slide.removeChild(slide.firstChild);
      }
    });
  }, 200);
}

sliderButtons.forEach(item => {
  item.addEventListener('click', () => {
    randomNewElements();
    //console.log(newElements);
    deletePreviousElements();
    setTimeout(() => {
      insertItems(newElements);
    }, 200);
    previousElements = newElements;
  })
})

