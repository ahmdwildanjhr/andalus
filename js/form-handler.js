$(document).ready(function () {
    $('#subscriptionForm').on('submit', function (e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();

        $.ajax({
            url: 'https://script.google.com/macros/s/AKfycbyuSYL2e6McT6J0txrBPyHEHGbaGFLA0YvU5Sr2bSc98BBN0Nt9P5JEuBLzPHKJDF6q/exec',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ name: name, email: email }),
            success: function (response) {
                alert('Subscription successful!');
            },
            error: function (err) {
                alert('Error: ' + err.responseText);
            }
        });
    });
});