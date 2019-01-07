// document.addEventListener('DOMContentLoaded', () => {
//   var sendRequest = document.getElementById('sendRequest');
//   sendRequest.addEventListener('submit', (e) => {
//     e.preventDefault();
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var phone = document.getElementById('phone').value;
//     if( name !=='' || email !=='' || phone !==''){
//       alert("Your message has been received! You'll hear from us shortly.");
//     }
//   })
// })

$(document).ready(function() {
$("#myForm").submit(function(event) {
event.preventDefault();

name = $("#name").val();
email = $("#email").val();
phone = $("#phone").val();

if (name.length == 0 || email.length == 0 || phone.length == 0) {
alert("Please fill out all of the required information.");
return false;
}
else {
alert("Your message has been received! You'll hear from us shortly.");
return true;
}
});
});
