function submitForm(event) {
        event.preventDefault(); // Prevents the form from submitting in the traditional way

        const text = document.querySelector("#comments");
        const email = document.querySelector("#email");
        const form = document.querySelector(".form")
        const subject = document.querySelector("#subject")
        const phone = document.querySelector(".phone")
        const fromAddress = "kfnfmax@gmail.com";

        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "kfnfmax@gmail.com",
            Password: "0AF343E9BDCC7BDF44785F9EF673F216907A",
            To: 'maxw.zim@gmail.com',
            From: fromAddress,
            Subject: `von ${email.value}: ${subject.value}`,
            Body: text.value
        }).then(message => alert(message));
    }