async function updateAUser(req, res, userModel) {
    try {
        const result = await userModel.updateOne({ email: req.params.email }, {
            $set: {
                name: req?.body?.name,
                email: req?.body?.email,
                password: req?.body?.password
            }
        });
        res.send(result)
    } catch (error) {
        res.json({ err: error.message })
    }
};
module.exports = updateAUser;