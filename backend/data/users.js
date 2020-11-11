import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Admin User',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 12),
		isAdmin: true,
	},
	{
		name: 'John Smith',
		email: 'john@example.com',
		password: bcrypt.hashSync('123456', 12),
	},
	{
		name: 'Jane Smith',
		email: 'jane@example.com',
		password: bcrypt.hashSync('123456', 12),
	},
	{
		name: 'Emma Simpson',
		email: 'emma@example.com',
		password: bcrypt.hashSync('123456', 12),
	},
	{
		name: 'Brad Strong',
		email: 'brad@example.com',
		password: bcrypt.hashSync('123456', 12),
	},
	{
		name: 'Sophia Noah',
		email: 'sophia@example.com',
		password: bcrypt.hashSync('123456', 12),
	},
	{
		name: 'Olivia Ava',
		email: 'olivia@example.com',
		password: bcrypt.hashSync('123456', 12),
	},
];

export default users;
