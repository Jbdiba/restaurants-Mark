import request from "supertest";
import app from "../../../src/app.js";

describe("GET /api/restaurant", () => {
  test("responds with a json message", async () => {
    const response = await request(app)
      .get("/api/restaurant")
      .set("Accept", "application/json");
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    expect(response.body[0].name).toBe("Applebees");
  });
});
