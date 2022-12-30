function sendMail(contactForm) {
    emailjs.send("service_38f308s","template_wsehp3m", {
        "from_name": contactForm.name.value, 
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummmary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });

    return false;
}
