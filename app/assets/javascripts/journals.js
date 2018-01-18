$(document).ready(function(){

  var titles = document.getElementsByClassName('note-title');
  var entries = document.getElementsByClassName('note-contents');
  var parent = document.getElementById('notes-accordion');

  function toggleView(event) {
    if (event.target && event.target.classList.contains('note-title')) {
      event.target.nextElementSibling.classList.toggle('hidden');
    };
  };

  parent.addEventListener('click', function(){
    toggleView(event);
  });

})
