const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
var path = require('path')


//Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/images', express.static(__dirname + 'public/images'))
app.use('/js', express.static(__dirname + 'public/js'))

//template engine
app.set('views', './views')
app.set('view engine', 'ejs')

//routes and middlewares
app.use(
    cors({
      origin: "http://localhost:3000",
    })
  )
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("", (req, res)=>{
  res.render("index")
})

app.get("/home", (req,res)=>{
  res.render("home")
})

app.get("/about", (req,res)=>{
  res.render("about")
})

//starting server
app.listen(process.env.PORT, ()=>console.log(`Server is running successfully`))
