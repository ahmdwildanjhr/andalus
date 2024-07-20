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
        .catch(error => {
            console.error('Error:', error);
        });

    // Menampilkan notifikasi tanpa menunggu respon dari server
    var notification = document.getElementById("notification");
    notification.style.display = "block";
    setTimeout(function () {
        notification.style.display = "none";
    }, 5000); // Notifikasi ditampilkan selama 5 detik
});
