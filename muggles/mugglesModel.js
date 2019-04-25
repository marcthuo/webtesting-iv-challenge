const db = require('../data/dbConfig.js');

module.exports = {
    insert,
    update,
    remove,
    getAll,
    findById,
};

async function insert(muggles) {
    const [id] = await db('muggles').insert(muggles, 'id')

    return db('muggles')
    .where({ id })
    .first()
}

async function update(id, changes) {
    return null;
}

async function remove(id) {
    return db('muggles')
    .where( 'id' )
    .del()
}

function getAll() {
    return db('muggles').select('name');
}

function findById(id) {
    return null;
}