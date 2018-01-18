$(document).ready(function(){

  const mealCarousel = document.getElementById('current');
  const prevMeal = document.getElementById('prev');
  const nextMeal = document.getElementById('next');
  const overlay = document.getElementById('overlay');

  $.ajax({
    type: 'GET',
    contentType: 'application/json; charset=utf-8',
    url: '../meals/slides',
    dataType: 'json',
    success: function(data) {
      buildSlides(data);
    },
    failure: function(result) {
      error();
    }
  });

  function error() {
    alert("Something went wrong!");
  };

  function buildSlides(data) {
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      let meal = document.createElement('img');
      meal.src = data[i][0];
      meal.alt = `Meal from ${data[i][1]}`;
      meal.classList.add('hidden');
      meal.classList.add('meal-pics');
      if (data[i][2] === true){
        meal.value = 'true';
      } else if (data[i][2] === false) {
        meal.value = 'false';
      };
      mealCarousel.append(meal);
    };
    mealCarousel.firstElementChild.setAttribute('id', 'active');
    if (mealCarousel.firstElementChild.value === 'true') {
      overlay.style.backgroundColor = 'green';
    } else if (mealCarousel.firstElementChild.value === 'false') {
      overlay.style.backgroundColor = 'red';
    };
    mealCarousel.firstElementChild.classList.remove('hidden');
  };

  function nxtMeal() {
    var currentSlide = document.getElementById('active');
    currentSlide.removeAttribute('id');
    currentSlide.classList.add('hidden');
    if (currentSlide.nextElementSibling !== null) {
      currentSlide.nextElementSibling.classList.remove('hidden');
      if (currentSlide.nextElementSibling.value === 'true') {
        overlay.style.backgroundColor = 'green';
      } else if (currentSlide.nextElementSibling.value === 'false') {
        overlay.style.backgroundColor = 'red';
      };
      currentSlide.nextElementSibling.setAttribute('id', 'active');
    } else {
      mealCarousel.firstElementChild.classList.remove('hidden');
      if (mealCarousel.firstElementChild.value === 'true') {
        overlay.style.backgroundColor = 'green';
      } else if (mealCarousel.firstElementChild.value === 'false') {
        overlay.style.backgroundColor = 'red';
      };
      mealCarousel.firstElementChild.setAttribute('id', 'active');

    }
  };

  function prvMeal() {
    var currentSlide = document.getElementById('active');
    currentSlide.removeAttribute('id');
    currentSlide.classList.add('hidden');
    if (currentSlide.previousElementSibling !== null) {
      currentSlide.previousElementSibling.classList.remove('hidden');
      if (currentSlide.previousElementSibling.value === 'true') {
        overlay.style.backgroundColor = 'green';
      } else if (currentSlide.previousElementSibling.value === 'false') {
        overlay.style.backgroundColor = 'red';
      };
      currentSlide.previousElementSibling.setAttribute('id', 'active');
    } else {
      mealCarousel.lastElementChild.classList.remove('hidden');
      if (mealCarousel.lastElementChild.value === 'true') {
        overlay.style.backgroundColor = 'green';
      } else if (mealCarousel.lastElementChild.value === 'false') {
        overlay.style.backgroundColor = 'red';
      };
      mealCarousel.lastElementChild.setAttribute('id', 'active');
    } return currentSlide;
  };

  function plusMinus(){
    console.log(currentSlide);
  };

  nextMeal.addEventListener('click', nxtMeal);
  prevMeal.addEventListener('click', prvMeal);

})
