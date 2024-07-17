$(document).ready(function () {
    $('#subscriptionForm').on('submit', function (e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();

        $.ajax({
            url: 'https://script.google.com/macros/s/AKfycbxQm7v1vKCGYihieRB099hjxPXzk4FeL5D2QHgZ2YqgBsHTUALSRWpqMv8MoC6HK_gW/exec',
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