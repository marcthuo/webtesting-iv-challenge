const request = require('supertest');

const router = require('./mugglesRouter.js');


describe('GET /', () => {
    it('should return 200 OK', async () => {
        const res = await request(router).get('/')
        expect(res.type).toBe('application/json')
})
});
