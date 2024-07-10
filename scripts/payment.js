document.getElementById('cardType').addEventListener('change', function() {
    var cardType = this.value;
    var creditCardFields = document.getElementById('creditCardFields');
    var debitCardFields = document.getElementById('debitCardFields');

    if (cardType === 'credit') {
        creditCardFields.classList.add('show');
        debitCardFields.classList.remove('show');
    } else if (cardType === 'debit') {
        debitCardFields.classList.add('show');
        creditCardFields.classList.remove('show');
    }
});

document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your form submission logic here
    alert('Form submitted successfully!');
});

// JavaScript is included inline in the HTML for simplicity
function closePopup() {
    document.getElementById('paymentSuccessPopup').classList.remove('active');
}

document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulate processing payment
    setTimeout(function() {
        document.getElementById('paymentSuccessPopup').classList.add('active');
    }, 1500); // Show popup after 1.5 seconds (1500 milliseconds)
});
