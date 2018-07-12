const express =  require('express');
const mongoose =  require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');


const app = express();

//DB config
const db = require('./config/keys').mongoURI;
console.log("db : ",db);
// connect to mongo db
mongoose.connect(db)
        .then(()=>console.log("Your Mongo DB connected"))
        .catch(err => console.log("Err while connecting mongo db : ",err));

app.get('/',(req,res)=>res.send("<h1>Hello Pooja! Your Server Is Up...</h1>"));


// Use the routes
app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/posts',posts);

 const port = process.env.PORT||5000;

 app.listen(port,()=>{
     console.log('server is running on port ',port);
 });