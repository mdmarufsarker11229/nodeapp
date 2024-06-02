const express = require("express");
const users = require("../models/model");
const path = require("path");
const {
    v4: uuidv4
} = require("uuid");



getallusers = async (req, res) => {
    try {
        const alluser = await users.find();
        res.status(200).json(alluser);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
getoneuser = async (req, res) => {
    try {
        const userOne = await users.find({
            id: req.params.id
        });
        res.status(200).json(userOne);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
createUser = async (req, res) => {

    try {
        const newusers = new users({
            id: uuidv4(),
            name: req.body.name,
            age: Number(req.body.age),
        })

        await newusers.save();
        res.status(200).json(newusers);
    } catch (error) {
        res.status(500).send(error.message);
    }

}
deleteUser = async (req, res) => {
    try {
        await users.deleteOne({
            id: req.params.id
        });
        res.status(200).json({
            message: "user deleted",
        })
    } catch (error) {
        res.status(500).send(error.message);
    }

}

updateUser = async (req, res) => {
    try {
        const userOne = await users.findOne({
            id: req.params.id
        });
        userOne.name = req.body.name;
        userOne.age = Number(req.body.age);
        await userOne.save();
        res.status(200).json(userOne);
    } catch (error) {
        res.status(500).send(error.message);
    }

}

module.exports = {
    getallusers,
    getoneuser,
    createUser,
    updateUser,
    deleteUser
};