
const { query } = require('../client/postgresql');

const getProducts = async() => {
    try{
        const result = await query('SELECT * FROM products')
        return result
    }catch (err) {
        throw new Error ('Erro ao tentar consultar produtos' + err.message)
    }
};

module.exports = {
    getProducts
};