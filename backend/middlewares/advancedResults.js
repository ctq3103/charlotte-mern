export const advancedResults = (model, populate) => async (req, res, next) => {
	let query;

	//Copy req.query
	const reqQuery = { ...req.query };

	//Fields to exclude
	const removeFields = ['select', 'sort', 'pageNumber', 'limit', 'keyword'];

	//Loop over remove fields and delete them from reqQuery
	removeFields.forEach((param) => delete reqQuery[param]);

	//Create query string
	let queryStr = JSON.stringify(reqQuery);

	//Create operators ($gt, $gte, etc)
	queryStr = queryStr.replace(
		/\b(gt|gte|lt|lte|in)\b/g,
		(match) => `$${match}`
	);

	//Finding resource
	query = model.find(JSON.parse(queryStr));

	//Select fields
	if (req.query.select) {
		const fields = req.query.select.split(',').join(' ');

		//Select() specifies which document fields to include or exclude
		query = query.select(fields);
	}

	//Sort
	if (req.query.sort) {
		const sortBy = req.query.sort.split(',').join(' ');
		query = query.sort(sortBy);
	} else {
		//descending createdAt
		query = query.sort('-createdAt');
	}

	//Search
	let keyword;
	if (req.query.keyword) {
		keyword = {
			name: {
				$regex: req.query.keyword,
				$options: 'i',
			},
		};
		query = query.find({ ...keyword });
	} else {
		keyword = {};
	}

	//Get total results before paginating
	const resultsBeforePaginate = await query;
	const total = resultsBeforePaginate.length;

	//Pagination
	const page = parseInt(req.query.pageNumber, 10) || 1;
	const limit = parseInt(req.query.limit, 10) || 100;
	const skip = (page - 1) * limit;
	const pages = Math.ceil(total / limit);

	query = query.skip(skip).limit(limit);

	if (populate) {
		query = query.populate(populate);
	}

	//Executing query
	const results = await query;

	res.advancedResults = {
		count: results.length,
		total: total,
		page,
		pages,
		data: results,
	};

	next();
};
