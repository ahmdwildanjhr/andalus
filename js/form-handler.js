document.getElementById("subscriptionForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");

    var name = nameInput.value;
    var email = emailInput.value;

    var url = "https://script.google.com/macros/s/AKfycbx-neSGmDiQhRM4X7vIghJPzphoGBOIsk5eMw50ageXNPzuuAviBs0j58t2xcMWxEht/exec";

    var data = new FormData();
    data.append("name", name);
    data.append("email", email);

    // Mengosongkan field input setelah tombol submit diklik
    nameInput.value = "";
    emailInput.value = "";

    fetch(url, {
        method: 'POST',
        body: data
    })
        .then(response => response.json())
        .then(data => {
            console.log("Respons JSON:", data); // Tambahkan ini untuk melihat respons di console
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
