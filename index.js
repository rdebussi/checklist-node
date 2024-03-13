const express = require("express")
const app = express()
app.set('view engine', 'ejs')
const connection = require("./database/database")
const bodyParser = require("body-parser")
const taskControler = require("./tasks/taskControler")
const Task = require("./tasks/task")

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extends: false}))
app.use(bodyParser.json())

connection.authenticate().then(() => {
    console.log("banco de dados OK")
}).catch((err) => {
    console.log(err)
})


app.get("/", (req,res) => {
    Task.findAll().then(tasks => {
        res.render("./index.ejs", {tasks: tasks})
    })
})

app.listen(8080, () => {
    console.log("o servidor está rodando!")
})

app.use("/", taskControler)