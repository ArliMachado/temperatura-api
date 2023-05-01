import { FastifyInstance } from "fastify";
import { create } from "./controllers/temperatura/create";
import { findAll } from "./controllers/temperatura/findAll";


export async function temperaturaRoutes(app: FastifyInstance) {
  app.post('/temperatura', create)
  app.get('/temperatura', findAll)
}