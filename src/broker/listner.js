const {subscribeToQueue} = require('./broker');
// const userModel = require('../models/user.model');
// const productModel = require('../models/product.model');
const orderModel = require('../model/order.model');
// const paymentModel = require('../models/payement.model');
module.exports = async function (){


    subscribeToQueue("order_service_Confirmed", async (data) => {
        await orderModel.findByIdAndUpdate(data.order, { status: data.status });
    });
}