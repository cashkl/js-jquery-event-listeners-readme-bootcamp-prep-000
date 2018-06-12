//define functions here
function getIt() {
  $('p').on('click',function() {
    alert("Hey!");
  });

}

function frameIt() {
  $('img').append('class="tasty"');
}

function pressIt() {
  alert("Hey you pressed the G");
}

function submitIt() {
  alert("Your form is going to be submitted now.")
}

$(document).ready(function(){


$('img').on('load', function() {
  frameIt();
});
$(document).on('keydown',function(key) {
if(key.which == 71){
pressIt();
}
});
$('form').on('submit',function() {
  submitIt();
})
});




});
