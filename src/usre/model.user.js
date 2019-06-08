// user model

const client = {
    sql: (ip) => {
        return new Promise((res, rej) => {
        setTimeout(()=> {
            res({
                name: 'ali',
                serice: 'active'
            })
        }, 500)
        })
    }
};

const getUserData = async (ipaddress) => {
    const user = await client.sql(ipaddress)
    return user
}
module.exports = {
    getUserData
}