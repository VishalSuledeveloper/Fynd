var nodemailer= require('nodemailer')
var transporter=nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'vssule@mitaoe.ac.in',
        pass:'12345689'
    }
});
var mailOptions={
    from:'vssule@mitaoe.ac.in',
    to:'vishalsule2017@gmail.com',
    subject:'trying',
    text:'test message'
};

transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log('Email sent: '+info.response);
    }
});