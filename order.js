
// script.js
function rescheduleDelivery() {
    const newDate = document.getElementById('reschedule-date').value;
    if (newDate) {
        alert(`Delivery rescheduled to: ${newDate}`);
        // Implement further logic to handle rescheduling, e.g., update database
    } else {
        alert('Please select a new date.');
    }
}

