const mongoose = require('mongoose');

const FoodsSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  valor: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true
  },
  ingredientes: {
    type: String,
    required: true
  },
})

const Foods = mongoose.model('Foods', FoodsSchema);

module.exports = Foods;