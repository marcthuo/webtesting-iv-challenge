const db = require('../data/dbConfig.js');

module.exports = {
    insert,
    update,
    remove,
    getAll,
    findById,
};

async function insert(muggle) {
    const [id] = await db('muggles').insert(muggle, 'id')

    return db('muggles')
    .where({ id })
    .first()
}

async function update(id, changes) {
    return null;
}

async function remove(id) {
    const [] = await db('muggles').delete('id', 'name')

    return db('muggles')
    .where({ id })
    .first()
}

function getAll() {
    return db('muggles').select('name');
}

function findById(id) {
    return null;
}