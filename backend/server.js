
//App config
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const connection = "mongodb+srv://admin:<password>@cluster0.1aduy.mongodb.net/tinderDb?retryWrites=true&w=majority"
const Cards = require('./dbCards')

const app = express()
const port = process.env.PORT || 8001

//Middlewares

app.use(express.json())
app.use(cors())

//DbConfig
mongoose.connect(connection, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

//API end points
app.get('/', (req, res) => {
    res.status(200).send('Hello world')
})

app.post('/cards', (req, res) => {
    const dbCard = req.body

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

app.delete('/cards/:id', (req, res) => {
    Cards.findByIdAndDelete({ _id: req.params.id })
        .then(card => res.json(card))
        .catch(err => res.json(err))
})

//Listener
app.listen(port, () => console.log(`Listening on port ${port}`))

