const express = require("express");
const methodOverride = require("method-override")

const todo = require("./models/todoModel");
require("./config/db.js")


const app = express();
const PORT = 3000;


app.use(methodOverride("_method"))
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded());
app.use(express.json());
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    todo.find().then(data => {
        console.log(data)
        res.status(200).render("pages/main",{data});
    }).catch(err => console.log(err))
});



app.get("/add-todo", (req, res) => {
  res.status(200).render("pages/add");
});



app.post("/post-add-todo", (req, res) => {
  const newTD = new todo({
    title: req.body.title,
    isDone: false,
  });
  newTD
    .save()
    .then((ans) => {
      res.status(200).redirect("/");
    })
    .catch((err) => console.log(err));
});

app.get("/edit-todo/:id",(req,res) => {
    const id = req.params.id;
    todo.findById(id).then(special_todo => {
        res.status(200).render("pages/edit",{todo:special_todo})
    })
})

app.put("/update-todo",(req,res) => {
    const{id,title,isDone} = req.body;
    todo.findByIdAndUpdate(id,{title,isDone}).then(answer => {
        res.status(200).redirect("/")
    })
    .catch(err => console.log(err))
})


app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`server is working on the http://localhost:${PORT}`);
});
