const express = require('express');
const app = express();


 // middleware for time app 

const authtimeMiddleware =(req, res, next)=>{

 var date = new Date();
var current_hour = date.getHours();
var current_day = date.getDay();

    if(  current_hour  > 9 && current_hour  < 17 && current_day >= 1 && current_day <= 5){
        // home route

next()
    } else {
        res.send('<h1 style="color:black;text-align:center">The web application is only available : <br> Monday to Friday,  from 9 am to 5 pm</h1>');
    }
   
};
app.use(authtimeMiddleware)

// ----------------------------
app.get('/',(req, res)=>{
    res.sendFile(__dirname + 'static/home.html');
});
// contact route
app.route('/contact')
.get((req, res)=>{
    res.sendFile(__dirname + 'static/contact.html');
});
// ou services route
app.route('/our-services')
.get((req, res)=>{
    res.sendFile(__dirname + 'static/Our-services.html');
});
app.get('/css/style.css',(req,res)=>{
    res.sendFile(__dirname + '/static')
})

app.use(express.static(__dirname + '/static'))

//404 
app.use((req, res) => {
    res.status(404).send('<h1 style="color:red">sorry cant\' find that </h1>');
}) 

const PORT = 2000
app.listen(PORT , (err)=>{err?console.log(err):console.log(`server is runing in port ${PORT}`)});
    