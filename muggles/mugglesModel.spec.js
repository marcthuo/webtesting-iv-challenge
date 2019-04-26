const db = require('../data/dbConfig.js');

const Muggles = require('./mugglesModel.js');

describe('muggles model', () => {
    describe('insert()', () => {
        beforeEach(async () => {
            await db('muggles').truncate()
        })
        it('should insert the provided muggles into the db', async () => {
            await Muggles.insert({ name: 'voldemort' })
            await Muggles.insert({ name: 'draco' })
            await Muggles.insert({ name: 'ginny' })

            const muggles = await db('muggles')
            expect(muggles).toHaveLength(3)
        })
    });
});

describe('muggles model', () => {
    describe('remove()', () => {
        beforeEach(async () => {
            await db('muggles')
        })
        it('should remove the provided muggles from the db', async () => {
            await Muggles.remove({ name: 'voldemort' })
            await Muggles.remove({ name: 'draco' })

            const muggles = await db('muggles')
            expect(muggles).toHaveLength(3)
        })
    });
});

