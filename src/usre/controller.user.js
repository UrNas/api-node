// controller user
const {getUserData} = require('./model.user')

const getUserController = async (req, res) => {
    const user = await getUserData(req.ip)
    res.json(user)
}

module.exports = {
    getUserController
}