document.addEventListener('DOMContentLoaded', () => {
  const sendRequest = document.getElementById('sendRequest');
  sendRequest.addEventListener('submit', (e) => {
    e.preventDefault;
    const name = document.getElementsByClassName('name').value;
    const email = document.getElementsByClassName('email').value;
    const phone = document.getElementsByClassName('phone').value;
    if( name !=='' || email !=='' || phone !==''){
      alert("Your message has been received! You'll hear from us shortly.");
    }
  })
})
