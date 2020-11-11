import express from 'express';
import User from '../modals/User.js';

import {
	authUser,
	registerUser,
	getUserProfile,
	updateUserProfile,
	getUsers,
	deleteUser,
	getUserById,
	updateUser,
} from '../controllers/user.controllers.js';
import { protect, admin } from '../middlewares/auth.js';
import { advancedResults } from '../middlewares/advancedResults.js';

const router = express.Router();

router
	.route('/')
	.post(registerUser)
	.get(advancedResults(User), protect, admin, getUsers);
router.post('/login', authUser);
router
	.route('/profile')
	.get(protect, getUserProfile)
	.put(protect, updateUserProfile);
router
	.route('/:id')
	.get(protect, admin, getUserById)
	.put(protect, admin, updateUser)
	.delete(protect, admin, deleteUser);

export default router;
