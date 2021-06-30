//Contact-form - Credit for cleaner more understandig code, and reset function after submit: jas-sin82 / milestone-project-2 on GitHub: https://github.com/jas-sin82/milestone-project-2

function sendMail(contactForm) {
    emailjs.send("service_g3chatm", "KidsMemory", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "message": contactForm.message.value
        })

        .then(
            function () {
                document.getElementById("contact-form").reset();
            })

        .then(
            function (response) {
                alert("Hi! We appreciate your message. We will get back to you before you can spell L E G O!", response);
            },

            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;
    
}
