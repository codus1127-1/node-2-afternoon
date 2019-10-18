const express = require('express')
const app = express()
const mc = require('./controllers/message_controller')
const SERVER_PORT = 3001

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

const messagesBaseUrl = "/api/messages"
app.get(messagesBaseUrl, mc.read)
app.post(messagesBaseUrl, mc.create)
app.put(`${messagesBaseUrl}/:id`, mc.update)
app.delete(`${messagesBaseUrl}/:id`, mc.delete)


app.listen(SERVER_PORT, ()=> console.log(`listening on port ${SERVER_PORT}`))