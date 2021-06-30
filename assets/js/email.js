//Contact-form 

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    emailjs.send("service_g3chatm", "KidsMemory", {

        from_name: name,
        from_email: email,
        message: message
        
    })
    .then(
        function (response) {
            alert("Hi! We appreciate your message. We will get back to you before you can spell L E G O!", response);
        },
        function (error) {
            console.log("FAILED", error);
        }
    );
});