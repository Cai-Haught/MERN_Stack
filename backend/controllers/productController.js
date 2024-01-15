const Product = require("../models/ProductModel")
const recordsPerPage = require("../config/pagination")

const getProducts = async (req, res, next) => {
    try {
        let query = {}
        if (req.query.price) {
            query = { price: { $lte: Number(req.query.price) } }
        }
        if (req.query.rating) {
            query = { rating: { $in: req.query.rating.split(",") } }
        }
        const pageNum = Number(req.query.pageNum) || 1
        let sort = {}
        const sortOption = req.query.sort || ""
        if (sortOption) {
            let sortOpt = sortOption.split("_")
            sort = { [sortOpt[0]]: Number(sortOpt[1]) }
            console.log(sort);
        }
        const totalProducts = await Product.countDocuments({})
        const products = await Product.find(query).skip(recordsPerPage * (pageNum - 1)).sort(sort).limit(recordsPerPage)
        res.json({products, pageNum, paginationLinkNumber: Math.ceil(totalProducts / recordsPerPage)})
    } catch (error) {
        next(error)
    }
}
module.exports = getProducts