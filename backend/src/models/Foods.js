const mongoose = require('mongoose');

const FoodsSchema = mongoose.Schema({
  nome: {
    type: String,
    //required: true,
  },
  valor: {
    type: Number,
    //required: true,
  },
  image: {
    type: String,
  },
  categoria: {
    type: String,
    //required: true
  }
})

const Foods = mongoose.model('Foods', FoodsSchema);

module.exports = Foods;