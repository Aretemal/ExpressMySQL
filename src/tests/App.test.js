/* eslint-disable no-undef */
import request from 'supertest';
import app from '../../app.js';

describe('App', () => {
  test('should return token and data about user', async () => {
    const response = await request(app).post('/api/login').send({
      login: 'user1',
      password: 'user1',
    }).expect(200)
      .expect('Content-Type', /json/);

    expect(response.statusCode).toBe(200);
    expect(response.body.data.attributes.attributes.user.userId).toBe(1);
    expect(response.body.data.attributes.attributes.token).toBeDefined();
  });
});
