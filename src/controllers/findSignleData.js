async function findAUser(req, res, userModel) {
    try {
        const result = await userModel.findOne({ email: req.params.email });
        res.send(result).status(200)
    } catch (error) {
        res.json({ error: error.message })
    }
};
module.exports = findAUser ;