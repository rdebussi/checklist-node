const express = require("express")
const app = express()
const router = express.Router()
const Task = require("./task")

router.post("/task/save", (req, res) => {
    var content = req.body.content
    if(content != undefined){
        Task.create({
            content: content
        }).then(() => {
            res.redirect("/")
        }).catch((err) => {
            console.log(err)
        })
    }
})

router.post("/task/delete", (req, res) => {
        var id = req.body.id
        if(id != undefined){
            if(!isNaN(id)){
                Task.destroy({
                    where: {
                        id: id
                    }
                }).then(() => {
                    res.redirect("/")
                })
            }else {
                res.redirect("/")
            }
        }else {
            res.redirect("/")
        }
    })




module.exports = router