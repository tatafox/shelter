const sliderItem = document.querySelectorAll('.slider__item'),
    sliderButtons = document.querySelectorAll('.slider__button'),
    previousButton = document.querySelector('.slider__button-previous'),
    nextButton = document.querySelector('.slider__button-next'),
    firstPageButton = document.querySelector('.slider__button-first'),
    lastPageButton = document.querySelector('.slider__button-last'),
    sliderPageNumber = document.querySelector('.slider__button-number');

let petsElements = [4, 0, 2, 1, 5, 7, 3, 6],
    pageNumber = 1;


function insertItems(petsElements) {
  let i = 0;
  petsElements.forEach(element => {
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
    petsElements = [];
    do {
      randomNumber = Math.floor(Math.random() * 8);
      if (!petsElements.includes(randomNumber)) {
        petsElements.push(randomNumber);
      }
    } while (petsElements.length < 8)
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
    console.log(petsElements);
    deletePreviousElements();
    setTimeout(() => {
      insertItems(petsElements);
    }, 200);
  })
})

function setMaxPage() {
    let width = document.documentElement.clientWidth;
    if (width >1280) {
        return 6;
    } else if (width < 768) {
        return 16;
    } else {
        return 8;
    }
}

function firstPageClick() {
    let maxPage = setMaxPage();
    if (pageNumber === maxPage) {
        nextButton.classList.remove('slider__button-disabled');
        lastPageButton.classList.remove('slider__button-disabled');
        nextButton.classList.add('slider__button-active');
        lastPageButton.classList.add('slider__button-active');
        nextButton.removeAttribute("disabled");
        lastPageButton.removeAttribute("disabled");

    }
    pageNumber = 1;
    firstPageButton.classList.add('slider__button-disabled');
    previousButton.classList.add('slider__button-disabled');
    firstPageButton.classList.remove('slider__button-active');
    previousButton.classList.remove('slider__button-active');
    firstPageButton.setAttribute("disabled", "disabled");
    previousButton.setAttribute("disabled", "disabled");
    sliderPageNumber.textContent = pageNumber;
}

function previousPageClick() {
    let maxPage = setMaxPage();
    if (pageNumber === maxPage) {
        nextButton.classList.remove('slider__button-disabled');
        lastPageButton.classList.remove('slider__button-disabled');
        nextButton.classList.add('slider__button-active');
        lastPageButton.classList.add('slider__button-active');
        nextButton.removeAttribute("disabled");
        lastPageButton.removeAttribute("disabled");
    }
    pageNumber -= 1;
    if (pageNumber === 1) {
        firstPageButton.classList.add('slider__button-disabled');
        previousButton.classList.add('slider__button-disabled');
        firstPageButton.classList.remove('slider__button-active');
        previousButton.classList.remove('slider__button-active');
        firstPageButton.setAttribute("disabled", "disabled");
        previousButton.setAttribute("disabled", "disabled");
    }
    sliderPageNumber.textContent = pageNumber;
}

function nextPageClick() {
    let maxPage = setMaxPage();
    if (pageNumber === 1) {
        firstPageButton.classList.remove('slider__button-disabled');
        previousButton.classList.remove('slider__button-disabled');
        firstPageButton.classList.add('slider__button-active');
        previousButton.classList.add('slider__button-active');
        firstPageButton.removeAttribute("disabled");
        previousButton.removeAttribute("disabled");
    }
    pageNumber += 1;
    if (pageNumber === maxPage) {
        nextButton.classList.add('slider__button-disabled');
        lastPageButton.classList.add('slider__button-disabled');
        nextButton.classList.remove('slider__button-active');
        lastPageButton.classList.remove('slider__button-active');        nextButton.setAttribute("disabled", "disabled");
        lastPageButton.setAttribute("disabled", "disabled");
    }
    sliderPageNumber.textContent = pageNumber;

}

function lastPageClick() {
    let maxPage = setMaxPage();
    if (pageNumber === 1) {
        firstPageButton.classList.remove('slider__button-disabled');
        previousButton.classList.remove('slider__button-disabled');
        firstPageButton.classList.add('slider__button-active');
        previousButton.classList.add('slider__button-active');
        firstPageButton.removeAttribute("disabled");
        previousButton.removeAttribute("disabled");
    }
    pageNumber = maxPage;
    nextButton.classList.add('slider__button-disabled');
    lastPageButton.classList.add('slider__button-disabled');
    nextButton.classList.remove('slider__button-active');
    lastPageButton.classList.remove('slider__button-active');   nextButton.setAttribute("disabled", "disabled");
    lastPageButton.setAttribute("disabled", "disabled");
    sliderPageNumber.textContent = pageNumber;

}

function setPageResize() {
    let maxPage = setMaxPage();
    if (pageNumber >= maxPage) {
        pageNumber = maxPage;
        sliderPageNumber.textContent = pageNumber;
        nextButton.classList.add('slider__button-disabled');
        lastPageButton.classList.add('slider__button-disabled');
        nextButton.classList.remove('slider__button-active');
        lastPageButton.classList.remove('slider__button-active');        
        nextButton.setAttribute("disabled", "disabled");
        lastPageButton.setAttribute("disabled", "disabled");
    } else {
        nextButton.classList.remove('slider__button-disabled');
        lastPageButton.classList.remove('slider__button-disabled');   
        nextButton.classList.add('slider__button-active');
        lastPageButton.classList.add('slider__button-active');
        nextButton.removeAttribute("disabled");
        lastPageButton.removeAttribute("disabled");     
    }
    
    
}

window.addEventListener(`resize`, event => {
    console.log(document.documentElement.clientWidth);
    setPageResize();
  }, false);

firstPageButton.addEventListener('click', firstPageClick);
previousButton.addEventListener('click', previousPageClick);
nextButton.addEventListener('click', nextPageClick);
lastPageButton.addEventListener('click', lastPageClick);


