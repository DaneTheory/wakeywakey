const config = require('./config.json')
// account sid and token have to be set in evn variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const toNum = config.toNumber;
const fromNum = config.fromNumber;
const client = require('twilio')(accountSid, authToken);

client.calls.create({
        url: "http://demo.twilio.com/docs/voice.xml",
        to: toNum,
        from: fromNum
}, function(err, call) {
    if(err) {
        console.log(err);
    } else {
        console.log(call.sid);
    }
});
