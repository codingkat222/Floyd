document.getElementById('reset-btn').addEventListener('click', function() {
    document.getElementById('details-form').reset();
});

document.getElementById('details-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your form submission logic here
    alert('Changes saved successfully!');
});
