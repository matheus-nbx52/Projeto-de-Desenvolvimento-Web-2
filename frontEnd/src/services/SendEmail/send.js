const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.google.com",
    port: 587,
    secure: true,
    auth: {
        user: "",
        pass: ""
    }
});

transporter.sendMail({
    from: " <>",
    to: "",
    subject: "teste",
    text: "este teste foi um sucesso!",
    html: "oi"
}).then(message => {
    console.log(message);

}).catch(err => {
    console.log(err);
});