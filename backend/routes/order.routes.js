import express from 'express';
import Order from '../modals/Order.js';
import {
	addOrderItems,
	getMyOrders,
	getOrderById,
	getOrders,
	updateOrderToDelivered,
	updateOrderToPaid,
} from '../controllers/order.controllers.js';
import { protect, admin } from '../middlewares/auth.js';
import { advancedResults } from '../middlewares/advancedResults.js';

const router = express.Router();

router
	.route('/')
	.post(protect, addOrderItems)
	.get(
		advancedResults(Order, { path: 'user', select: 'id name' }),
		protect,
		admin,
		getOrders
	);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);

export default router;
