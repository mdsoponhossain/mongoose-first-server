const express = require('express');
const userModel = require('../../model/userModel/userModel');
const asyncController = require('../../controllers/singleData/singleData');
const findAUser = require('../../controllers/findSignleData');
const updateAUser = require('../../controllers/singleData/updateAUser');
const deleteAUser = require('../../controllers/singleData/deleteAUser');
const userRouter = express.Router();

userRouter.post('/sign-up', (req, res) => asyncController(req, res, userModel));
userRouter.get('/login/:email', (req, res) => findAUser(req, res, userModel));
userRouter.patch('/update-user/:email', (req, res) => updateAUser(req, res, userModel));
userRouter.delete('/delete-user/:email', (req, res) => deleteAUser(req, res, userModel));

//instance method;
// create a user
userRouter.post('/instance-method/sign-up', async (req, res) => {
    try {
        console.log(req.body)
        const result = await new userModel(req.body).creatAuser();
        res.json({ success: result })
    } catch (error) {
        res.json({ error: error.message })
    }
})

// find a user;

userRouter.get('/instance-method/:email', async (req, res) => {
    try {
        console.log(req.params)
        const result = await userModel({ email: req.params.email }).searchAUser();
        res.send(result)
    } catch (error) {
        res.json({ error: error })
    }
});

// static method of mongoose;
userRouter.get('/static-method/:name', async (req, res) => {
    try {
        console.log(req.body)
        const result = await userModel.creatingUser(req.params.name)
        res.send(result)
    } catch (error) {
        res.send(error.message)
    }
});

// query helper or chaining method of mongoose;
userRouter.get('/query-helper/:name', async (req, res) => {
    try {
        const result = await userModel.findOne().findByQuery(req.params.name)
        res.send(result)
    } catch (error) {
        res.send(error.message)
    }
});
module.exports = userRouter;