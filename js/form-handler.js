$(document).ready(function () {
    $('#subscriptionForm').on('submit', function (e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();

        $.ajax({
            url: 'https://script.google.com/macros/s/AKfycbyN8JQO6aoQb1QqdXvCjbVqqSrx0PX8f3LmlONGavr7unLhZYyWCtIoaCgFvQzAYSor/exec',
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