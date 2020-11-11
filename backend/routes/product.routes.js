import express from 'express';
import Product from '../modals/Product.js';
import {
	createProduct,
	createProductReview,
	deleteProduct,
	getProductById,
	getProducts,
	updateProduct,
} from '../controllers/product.controllers.js';
import { protect, admin } from '../middlewares/auth.js';
import { advancedResults } from '../middlewares/advancedResults.js';

const router = express.Router();

router
	.route('/')
	.get(advancedResults(Product), getProducts)
	.post(protect, admin, createProduct);

router.route('/:category');

router
	.route('/:id')
	.get(getProductById)
	.delete(protect, admin, deleteProduct)
	.put(protect, admin, updateProduct);
router.route('/:id/reviews').post(protect, createProductReview);

export default router;
