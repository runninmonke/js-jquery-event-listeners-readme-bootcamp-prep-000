function getIt() {
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function(e){
    console.log(e)
  })
}

function submitIt() {
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.')
  })
}

function pressIt() {
  $('document').on('keydown', function(e) {
    console.log(e.which || e.detail);
  })
}

$(document).ready(function(){

// call functions here

});
