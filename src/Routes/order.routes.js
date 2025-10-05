const express=require('express')
const authMiddleware=require('../Middleware/auth.middleware')
const router=express.Router()
const orderController=require('../Controllers/order.controller')
const validationMiddleware=require('../Middleware/validation.middleware')



router.post('/',validationMiddleware.createOrderValidation,authMiddleware.CreateauthMiddleware([ 'user' ]),orderController.createOrder)

router.get('/me',authMiddleware.CreateauthMiddleware([ 'user' ]),orderController.getMyOrders)
router.get('/:id',authMiddleware.CreateauthMiddleware([ 'user', 'admin' ]),orderController.getOrderById)
router.get('/:id/cancle',authMiddleware.CreateauthMiddleware([ 'user']),orderController.cancelOrderById)

router.patch('/:id/address',validationMiddleware.updateAddressValidation,authMiddleware.CreateauthMiddleware([ 'user' ]),orderController.updateOrderAddress)

module.exports=router