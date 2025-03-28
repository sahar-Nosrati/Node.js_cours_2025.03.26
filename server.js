const express = require("express");
const app = express(); 
const path = require("path");
const cors = require("cors"); 
const Port = process.env.port || 7000; 

const whiteAddressListArrayForSearch = [
  "http://google.com",
  "http://127.0.0.1:5500",
  "http://localhost:7000/"
];

const corsOptions = {
  origin : (origin, callback) => {
    if(!origin || whiteAddressListArrayForSearch.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback (new Error("There is an error"))
    }
  },
  optionsSuccessStatus : 200, 
  credential : true, 
}

app.use(cors(corsOptions)); 
app.use(express.json());
app.use(express.urlencoded({extended : false}));


// server static files
app.use("/", express.static(path.join(__dirname, "./public"))); 
app.use("/subview", express.static(path.join(__dirname, "./public/subniew/"))); 


app.use("/", require("./middleware/root.js"));
app.use("/subview", require("./middleware/subdir.js"));
app.use("/employees", require("./middleware/employee/employees.js"))




app.listen(Port, (req, res) => {
  console.log("Hello Sahar")
});