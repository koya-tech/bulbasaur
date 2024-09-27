import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
// eslint-disable-next-line import/no-extraneous-dependencies
import dotenv from 'dotenv';
import express from 'express';
import UserImage from './domain/valueObject/user/UserImage';
import UserName from './domain/valueObject/user/UserName';
import UserPassword from './domain/valueObject/user/UserPassword';
// import UserModel from './external/mongoose/model/UserModel';
import MongooseUserRepository from './infrastructure/MongooseUserRepository';
import UserId from './domain/valueObject/user/UserId';
import User from './domain/entities/User';
// import User, { IUserDocument } from './domain/entities/User';

dotenv.config({ path: '.env.local' });

const app = express();
const port = 3001;
app.get('/', (req, res) => res.send('Hello World!'));

mongoose.connect(`mongodb+srv://${process.env.mongoDBUserName}:${process.env.mongoDBUserPassword}@dineappdb.bihid.mongodb.net/?retryWrites=true&w=majority&appName=DineAppDB`);
const db = mongoose.connection;
db.once('open', () => console.log('DB connection successful'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const repository = new MongooseUserRepository();

const saltRounds = 10;
const myPlaintextPassword = 's0/\\/\\P4$$w0rD';
const salt = bcrypt.genSaltSync(saltRounds);
const hashedPassword = bcrypt.hashSync(myPlaintextPassword, salt);

// Create a new blog post object
const updateUser = User.create(
    new UserId('66f2ea297585df342debd885'),
    new UserName('test0925'),
    new UserPassword(hashedPassword),
    new UserImage('test.jpg0925'),
);

// async function saveUser(user: User) {
//     const test = repository.save(user);
//     console.log(`saved Info${test}`);
// }
// saveUser(saveUserInfo);

// Insert the article in our MongoDB database
// savedUser.save();
// console.log('DONE');

// Get User Info
// async function getUser() {
//     const test = await repository.find(savedUser._id);
//     console.log(test);
//     return test;
// }
// getUser();

// Delete User Info
async function deleteUser(userId: UserId) {
    const test = await repository.deleteById(userId);
    return test;
}
deleteUser(updateUser.userId);

// Update User Info
// const updateUser = User.create(
//     new UserId('66f2ea297585df342debd885'),
//     new UserName('test0925'),
//     new UserPassword(hashedPassword),
//     new UserImage('test.jpg0925'),
// );
// async function updateUserMethof(user: User) {
//     repository.update(user);
// }
// updateUserMethof(updateUser);
