$(document).ready(function(){

  var noteSubmit = document.getElementById('note-submit');
  var pencil = document.getElementsByClassName('fa-pencil')[0];


  function submitNote() {
    noteSubmit.click();
  }


  pencil.addEventListener('click', submitNote);


})
