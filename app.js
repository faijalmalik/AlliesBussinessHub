const express = require("express");
const bodyParser = require("body-parser");

//const ExpenseRouter = require("./router/expense.router");
const app = express();

app.use(bodyParser.json())  //for json request

//set cors to allow external calls true
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-control-Allow-Method","GET,Post,Put,Delete")
    res.setHeader("Access-control-Allow-Header","Authorization, Content-Type")
    next();
})
//Router Registration

require('./router/auth.routes')(app);
require('./router/user.routes')(app);
require('./router/expense.router')(app);

const db = require("./models/index");
const Role = db.role;

db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync Db');
  //initial();
}).catch(msg => {
  console.log("faijal" + msg);
});


function initial() {
  Role.create({
    id: 1,
    userRole: "admin"
  });
 
  Role.create({
    id: 2,
    userRole: "recruitment"
  });
 
 
}

app.listen(8080,(result)=>{
    console.log("server is runing on 8080");
})