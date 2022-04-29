import {
    jest,
    expect,
    describe,
    beforeEach,
    test
} from '@jest/globals';
import request from 'supertest';
import app from '../../src/app.js';

describe('#Routes - test site for api response', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
        jest.clearAllMocks();
    });
    
    test('should return 200 status code and message', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            message: 'Nossa API está funcionando!'
        });
    });

    test('should return list of posts', async () => {
        const response = await request(app).get('/posts');
        expect(response.status).toBe(200);
    });

    describe('exceptions', () => {
        test('should return error when try to access a non-existent route', async () => {

            const res = await request(app).get('/non-existent-route');

            expect(res.status).toBe(404);
            expect(res.body.message).toBe(undefined);
            
        });

        test('should return 500 when try to delete with an invalid id', async () => {
                
            const res = await request(app).delete('/posts/invalid_id');

            expect(res.status).toBe(500);
            expect(res.body.message).toBe(undefined);
        });
    });

});

