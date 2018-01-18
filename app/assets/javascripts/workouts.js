$(document).ready(function(){

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
