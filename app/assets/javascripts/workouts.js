$(document).ready(function(){

  const submit = document.getElementById('finish');
  const finishButton = document.getElementById('finish-button');
  function endWorkout() {
    submit.click();
  };

  finishButton.addEventListener('click', function(){
    console.log('test');
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
