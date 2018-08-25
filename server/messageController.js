require('dotenv').config();
const messageController = {}; 
const accountSid = process.env.auth1 //account number to the online phone number
const authToken = process.env.auth; //24 hour authentication token, if this was production level it would be on our local hardDrive
const client = require('twilio')(accountSid, authToken);




//middleware that sends a twilio text message
messageController.sendText = (req, res, next) => {
  const codesmithNumberArr = ['+6262344700', '+5628819534', '+4102159924', '+6177330259', '+7142344609', '+8087803897', 
                              '+7148602157', '+8058144121', '+8055502134', '+3104872409', '+9092041081', '+3235406059', 
                              '+8053381133', '+6502294250', '+6618574707', '+7736362712', '+6264233343', '+6262832741', 
                              '+2673072342', '+8184543600', '+3479428758', '+3238993096', '+6174607781', '+5626731470']
  //                             const arrays = [1]
  
  codesmithNumberArr.forEach(function(ele){
    client.messages.create({
    body: 'hello, There is a job you may be interested in check your email for a link, because Twilio thinks I am a bot',
    from: '+15202147880', //Twilio accounts phone number, you can request more.
    to: ele
    })

  })
  .then(message => console.log('SMS message succesfully sent'))
  next();
}







module.exports = messageController