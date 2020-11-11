import asyncHandler from 'express-async-handler';
import Product from '../modals/Product.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
	// const pageSize = 6;
	// const page = Number(req.query.pageNumber) || 1;

	// const keyword = req.query.keyword
	// 	? {
	// 			name: {
	// 				$regex: req.query.keyword,
	// 				$options: 'i',
	// 			},
	// 	  }
	// 	: {};

	// const count = await Product.countDocuments({ ...keyword });
	// const products = await Product.find({ ...req.query, ...keyword })
	// 	.limit(pageSize)
	// 	.skip(pageSize * (page - 1));

	// res.json({ products, page, pages: Math.ceil(count / pageSize) });
	res.status(200).json(res.advancedResults);
});

// @desc    Fetch single products
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);

	if (!product) {
		res.status(404);
		throw new Error('Product not found');
	}
	res.json(product);
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  private/admin
const deleteProduct = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);

	if (!product) {
		res.status(404);
		throw new Error('Product not found');
	}

	await product.remove();
	res.json({ message: 'Product removed' });
});

// @desc    Create a product
// @route   POST /api/products
// @access  private/admin
const createProduct = asyncHandler(async (req, res) => {
	const product = new Product({
		name: 'sample name',
		price: 0,
		user: req.user._id,
		image:
			'https://i.ibb.co/QdpBPtV/tiffany-victoriadiamond-vine-bracelet-in-platinum-67360397-1007015-ED-67360397-1007015-ED.jpg',
		category: 'necklaces',
		countInStock: 10,
		numReviews: 0,
		description: 'description',
	});

	const createdProduct = await product.save();
	res.status(201).json(createdProduct);
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  private/admin
const updateProduct = asyncHandler(async (req, res) => {
	const { name, price, description, image, category, countInStock } = req.body;

	const product = await Product.findById(req.params.id);

	if (product) {
		product.name = name;
		product.price = price;
		product.description = description;
		product.image = image;
		product.category = category;
		product.countInStock = countInStock;

		const updatedProduct = await product.save();
		res.json(updatedProduct);
	} else {
		res.status(404);
		throw new Error('Product not found');
	}
});

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  private/admin
const createProductReview = asyncHandler(async (req, res) => {
	const { rating, comment } = req.body;

	const product = await Product.findById(req.params.id);

	if (product) {
		const alreadyReviewed = product.reviews.find(
			(review) => review.user.toString() === req.user._id.toString()
		);

		if (alreadyReviewed) {
			res.status(400);
			throw new Error('You have already reviewed this item');
		}

		const review = {
			name: req.user.name,
			rating: Number(rating),
			comment,
			user: req.user._id,
		};

		product.reviews.push(review);

		product.numReviews = product.reviews.length;

		product.rating =
			product.reviews.reduce((acc, item) => item.rating + acc, 0) /
			product.reviews.length;

		await product.save();
		res.status(201).json({ message: 'Review added' });
	} else {
		res.status(404);
		throw new Error('Product not found');
	}
});

export {
	getProducts,
	getProductById,
	deleteProduct,
	createProduct,
	updateProduct,
	createProductReview,
};
