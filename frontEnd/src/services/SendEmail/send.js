const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.google.com",
    port: 587,
    secure: true,
    auth: {
        user: "reactubenicevine@gmail.com",
        pass: "a123456#"
    }
});

transporter.sendMail({
    from: "<reactubenicevine@gmail.com>",
    to: "esa12@discente.ifpe.edu.br",
    subject: "teste",
    text: "este teste foi um sucesso!",
    html: "oi"
}).then(message => {
    console.log(message);

}).catch(err => {
    console.log(err);
});