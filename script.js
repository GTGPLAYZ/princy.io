document.getElementById('submitBtn').addEventListener('click', function() {
    var message = document.getElementById('message').value;
    var displayMessage = document.getElementById('displayMessage');
    
    if (message.trim() === '') {
        displayMessage.textContent = 'Please write a message before submitting.';
    } else {
        displayMessage.textContent = 'Your message: ' + message;
        document.getElementById('message').value = '';
    }
});
