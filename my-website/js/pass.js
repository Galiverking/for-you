function addNumber(num) {
    const passwordInput = document.getElementById('password');
    passwordInput.value += num;
}

function clearPassword() {
    document.getElementById('password').value = '';
}

document.getElementById('password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const correctPassword = '140225'; // Updated password
    if (password === correctPassword) {
        document.getElementById('password-section').style.display = 'none';
        const largeHeart = document.getElementById('large-heart');
        largeHeart.style.display = 'block';
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 3000); // Redirect after 3 seconds
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});

document.getElementById('heart').addEventListener('click', function() {
    $('#anniversary-section').slideUp('slow', function() {
        document.getElementById('password-section').style.display = 'block';
    });
});