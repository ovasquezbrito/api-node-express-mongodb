const mongoose = require('mongoose')

const { appconfig } = require('../config')

const Schema = mongoose.Schema

const ProductSchema = Schema({
    name: String,
    size: Number,
    unitaryPrice: Number,
    imgUrl: String,
    description: String
}, {
    timestamps: true
})

ProductSchema.methods.setImgUrl = function setImgUrl(filename) {
    const { host, port } = appconfig
    this.imgUrl = `${host}:${port}/public/${filename}`
}

module.exports = mongoose.model('Products', ProductSchema)