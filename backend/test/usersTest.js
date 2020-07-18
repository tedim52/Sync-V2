/**
* @fileoverview Tests for user route logic and integration.
* @author tediMitiku <tbm42@cornell.edu>
*/
const assert = require('chai').should;
const request = require('supertest');
const app = require('../index');
const { spotifyApi, fetchToken } = require("../loaders/spotify");
const db = require("../db/database");

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
      //const db = require("../db/database");
      //const accessToken = await fetchToken();
      //spotifyApi.setAccessToken(accessToken);
    });

    it("should respond with tedi's spotify info", () => {
      request(app)
        .get('/users')
        .expect((res) => {
          res.body.id = "ishans",
          res.body.username = "tedi.m52"
        })
        .expect(200)
        .end(done);
    });
  });

});
