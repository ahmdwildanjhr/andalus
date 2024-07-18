document.getElementById("subscriptionForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    var url = "https://script.google.com/macros/s/AKfycbx-neSGmDiQhRM4X7vIghJPzphoGBOIsk5eMw50ageXNPzuuAviBs0j58t2xcMWxEht/exec";

    var data = new FormData();
    data.append("name", name);
    data.append("email", email);

    fetch(url, {
        method: 'POST',
        body: data
    })
        .then(response => response.json())
        .then(data => {
            console.log("Respons JSON:", data); // Tambahkan ini untuk melihat respons
            // if (data.result === "success") {
            //     alert("Subscription successful!");
            // } else {
            //     alert("Subscription failed.");
            // }
        })
        .catch(error => {
            console.error('Error:', error);
            // alert("Subscription failed.");
        });
});
