/**
* @fileoverview Tests for user route logic and integration.
* @author tediMitiku <tbm42@cornell.edu>
*/
const assert = require('chai').assert;
const request = require('supertest');
const app = require('../index');

describe('Sync API User Routes', () => {
  /**
  * Test GET /users/ route.
  */
  describe("GET /users/", () => {
//i have has aboslutely no idea what he's doing by the way -tedi lol but will figure it out
    /**
    * Mock Spotify.
    */
    before(async () => {
      const db = require("../db/database");
      const { spotifyApi, fetchToken } = require("../loaders/spotify");
      const accessToken = await fetchToken();
      spotifyApi.setAccessToken(accessToken);
    });

    it("Should respond with tedi's spotify info", () => {
      request(app)
        .get('/users')
        .expect(302)
        .then((res) => {
          assert(res.body.id, 'tm52');
          assert(res.body.username, 'tedi.m52');
        });
    });
  });

});
