const { getAll, createUser, getOne, removeUser, updateUser } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/")
    .get(getAll)
    .post(createUser)

userRouter.route("/:id")
    .get(getOne)
    .delete(removeUser)
    .put(updateUser)

module.exports = userRouter;