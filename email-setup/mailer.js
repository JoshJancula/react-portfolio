const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_KEY);


const sendmail = (message) => {
    let newMessage ={
        to: "josh@jancula.com",
        from:"joshjanculawebpage@gmail.com",
        subject:"new message",
        html: message,
    };
    sgMail.send(newMessage);
    console.log('great success!')
}
module.exports=sendmail;