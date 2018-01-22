$(document).ready(function(){

  const submit = document.getElementById('finish-hidden');
  const finishButton = document.getElementById('finish');

  function endWorkout() {
    submit.click();
  };

  window.addEventListener('load', function(){
    navButton.classList.add('hidden');
  })

  finishButton.addEventListener('click', function(){
    endWorkout();
  });

  $('.pattern-fields').select2({
    width: '100%',
    placeholder: 'Movement Pattern'
  });
  $('.exercise-fields').select2({
    width: '100%',
    placeholder: 'Exercise'
  });

  $('body').on('cocoon:after-insert', function(){
    $('.pattern-fields').select2({
      width: '100%',
      placeholder: 'Movement Pattern'
    });
    $('.exercise-fields').select2({
      width: '100%',
      placeholder: 'Exercise'
    });
  });

  })
