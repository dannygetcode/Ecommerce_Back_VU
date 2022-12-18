const mongoose = require("mongoose");

const ProductoSchema = mongoose.Schema({

    nombre: { type: String, require: true, trim: true},
    descripcion: {type: String, require: true, trim: true},
    stock: {type: Number, require: true, trim: true},
    precio: {type: Number, require: true, trim: true},
    imagen: {type: String, require: true, trim: true},
    creado:{type: Date, default: Date.now()},
    categoriaId:{type: mongoose.Schema.Types.ObjectId, ref: "Categoria"},

});


//definir el modelo

module.exports = mongoose.model("Producto", ProductoSchema);