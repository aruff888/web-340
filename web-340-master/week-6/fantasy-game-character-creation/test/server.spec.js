const server = require("../src/server");
const supertest = require("supertest");
const request = supertest(server);

describe("Fantasy Character Creation API", () => {
  test("POST /create-character should create a character", async () => {
    const res = await request
      .post("/create-character?class=Warrior&gender=Male&fact=Brave knight");

    expect(res.statusCode).toBe(200);
    expect(res.body.class).toBe("Warrior");
    expect(res.body.gender).toBe("Male");
    expect(res.body.fact).toBe("Brave knight");
  });

  test("POST /confirm-character should return confirmation message", async () => {
    const res = await request.post("/confirm-character");
    
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("Character creation confirmed");
  });

  test("GET /view-character should return the same created character", async () => {
    await request
      .post("/create-character?class=Mage&gender=Female&fact=Master of fire");

    const viewRes = await request.get("/view-character");

    expect(viewRes.statusCode).toBe(200);
    expect(viewRes.body.class).toBe("Mage");
    expect(viewRes.body.gender).toBe("Female");
    expect(viewRes.body.fact).toBe("Master of fire");
  });
});
