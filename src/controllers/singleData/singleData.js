async function asyncController(req,res,userModel) {
    try {
        await userModel(req.body).save();
        res.send({ success: "user is inserted to db successfully" })
    } catch (error) {
       
        res.json({ error: error.message })
    }
}

module.exports = asyncController;