const db = require('../data/dbConfig.js');
const request = require('supertest');

const router = require('./mugglesRouter.js');
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
            await db('muggles').truncate()
        })
        it('should remove the provided muggles from the db', async () => {
            await Muggles.remove({ name: 'voldemort' })
            await Muggles.remove({ name: 'draco' })

            const muggles = await db('muggles')
            expect(muggles).toHaveLength(2)
        })
    });
});

describe('mugglesRouter.js', () => {
    it('should be testing the router environment', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })
describe('GET', () => {
    it('should return 200 OK', async () => {
        const res = await request(router).get('/')
        expect(res.status).toBe(200)
})
});
});