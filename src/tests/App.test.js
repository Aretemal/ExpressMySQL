/* eslint-disable no-undef */
import request from 'supertest';
import app from '../../app.js';
import responseBodyParsing from '../utils/responseBodyParsing.js';

describe('App', () => {
  test('should return token and data about user', async () => {
    const response = await request(app).post('/api/login').send({
      login: 'user1',
      password: 'user1',
    }).expect(200)
      .expect('Content-Type', /json/);
    const data = responseBodyParsing(response.body);

    expect(response.statusCode).toBe(200);
    expect(data.user.userId).toBe(1);
    expect(data.token).toBeDefined();
  });
});
