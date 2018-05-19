const sendmail=require("../email-setup/mailer.js");

module.exports = {
  send: function(req, res) {
    sendmail(req.body.message)
    console.log("message: " + req.body.message);
    res.json({message:"something"})
  },
}