import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './modals/User.js';
import Product from './modals/Product.js';
import Order from './modals/Order.js';
import connectDB from './config/db.js';

//Load env vars
dotenv.config();

//Connect to DB
connectDB();

//Import into DB
const importData = async () => {
	try {
		await Product.deleteMany();
		await Order.deleteMany();
		await User.deleteMany();

		const createdUser = await User.insertMany(users);
		const admin = createdUser[0]._id;
		const sampleProducts = products.map((product) => {
			return { ...product, user: admin };
		});
		await Product.insertMany(sampleProducts);

		console.log('Data imported...'.green.inverse);
		process.exit();
	} catch (e) {
		console.error(`${e}`.red.inverse);
		process.exit(1);
	}
};

//Delete data
const deleteData = async () => {
	try {
		await Product.deleteMany();
		await Order.deleteMany();
		await User.deleteMany();

		console.log('Data Destroyed...'.red.inverse);
		process.exit();
	} catch (e) {
		console.error(`${e}`.red.inverse);
		process.exit(1);
	}
};

if (process.argv[2] === '-d') {
	deleteData();
} else {
	importData();
}
