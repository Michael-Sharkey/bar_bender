$(document).ready(function(){

  const newMeal = document.getElementById('meal-photo');
  const fileButton = document.getElementById('file-button');
  const fileExt = document.getElementById('file-name');

  function mealPic() {
    fileButton.click();
  };

  newMeal.addEventListener('click', function(){
    mealPic();
  });

})
