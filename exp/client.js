const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const scert = crypto.randomBytes(512).toString('base64')
const newToken = (ip) => {
    return jwt.sign({ip}, scert, {expiresIn: '1m'})
}
const decode = jwt.verify(newToken('192.168.1.1'), scert)
console.log(newToken('192.168.1.1'))
console.log(decode.ip)
// const ip = req.ip