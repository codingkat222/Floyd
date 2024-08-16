document.addEventListener('DOMContentLoaded', function () {
    var loggedIn = false; // Set this to true if user is logged in

    var accountLink = document.getElementById('accountLink');
    var loginModal = document.getElementById('loginModal');
    var registerModal = document.getElementById('registerModal');
    var closeButtons = document.getElementsByClassName('close');
    var registerLink = document.getElementById('registerLink');

    // When account link is clicked
    accountLink.onclick = function (e) {
        e.preventDefault();
        if (loggedIn) {
            window.location.href = "account.html"; // Go to account page if logged in
        } else {
            loginModal.style.display = "block"; // Show login modal if not logged in
        }
    };

    // When the close button is clicked, hide the modal
    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].onclick = function () {
            loginModal.style.display = "none";
            registerModal.style.display = "none";
        };
    }

    // Switch to register modal when register link is clicked
    registerLink.onclick = function (e) {
        e.preventDefault();
        loginModal.style.display = "none";
        registerModal.style.display = "block";
    };

    // Close modal if clicked outside of modal content
    window.onclick = function (event) {
        if (event.target == loginModal || event.target == registerModal) {
            loginModal.style.display = "none";
            registerModal.style.display = "none";
        }
    };
});
