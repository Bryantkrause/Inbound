module.exports = require ('mongoose')
.connect('mongodb://localhost/test',{
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})