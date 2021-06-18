const path = require('path')
const express = require('express')

const app = express()
app.use(express.static(path.join(__dirname,'../public')))
app.set('view engine','hbs')


app.get('/',(req,res)=>{
    res.render('index',{
        title: 'Welcome to my page'
    })
})

app.listen(3000,()=>console.log('listening to port 3000'))