import Generator from "./generator.js";
import {expect} from "chai";
import supertest from "supertest";

const path = supertest("http://127.0.0.1:8080");

describe("TEST EXAMEN FINAL DE TP2", () => {
  describe("TESTEANDO RUTAS", () => {
    it("Probando GET", async () => {
      const response = await path.get("/sondas");
      expect(response.status).to.eq(200);
    });
    it("Probando POST", async () => {
      const data = new Generator().createSonda();
      const response = await path.post("/sondas").send(data);
      /* console.log(response); */
      expect(response.status).to.eq(201);
    });
  });
});
