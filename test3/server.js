const express = require('express')
const app = expres()

app.get('/',(req,ress)=>{
    res.sendS("Hey there you passed the second test")
})

app.listen(3000)