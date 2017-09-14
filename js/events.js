function getIt() {
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function(e){
    e.target.className = 'tasty';
  })
}

function submitIt() {
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.')
  })
}

function pressIt() {
  $('document').on('keydown', function(e) {
    console.log(e);
    debugger
  })
}

$(document).ready(function(){
  pressIt();
  submitIt();
  frameIt();
  getIt();
});
