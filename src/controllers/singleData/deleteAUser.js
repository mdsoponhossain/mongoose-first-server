async function deleteAUser(req, res, userModel) {
    try {
        const result = await userModel.deleteOne({ email: req.params.email });
        res.send(result)
    } catch (error) {
        res.json({ err: error.message })
    }
};

module.exports = deleteAUser ;