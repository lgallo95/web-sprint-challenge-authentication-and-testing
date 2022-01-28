const request = require("supertest");
const server = require("../api/server");
const db = require("../data/dbConfig");
const Jokes = require("../api/jokes/jokes-model");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});
beforeEach(async () => {
  await db.seed.run()
})

afterAll(async () => {
  await db.destroy();
});


describe("Auth Tests", () => {
  describe("New User Register Successful!!!", () => {
    test('Successful Registration returns 200', async () =>{
      const res = await request(server).post('/api/auth/register')
      .send({username: "Fillsad", password: "ashdfgasdojuhif"})
      expect(res.status).toBe(200)
    })
  });
  test('welcomes New User', async () => {
    const res = await request(server)
    .post('/api/auth/register')
    .send({username: "Fillsad", password: "ashdfgasdojuhif"})
    expect(res.body.message).toBe("Welcome, Fillsad")
  })
  test("Successful Login", async() => {
    const res = await request(server)
    .post('/api/auth/login')
    .send({username: "sam", password: "isadfhoasdjfnj"})
    expect(res.status).toBe(200)
  })
  test("401 if wrong info", async() => {
    const res = await request(server)
    .post('/api/auth/login')
    .send({username: "sam", password: "assadfasdf"})
    expect(res.status).toBe(401)
  })
});

// describe("Joke Tests", () => {

// })
