import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../lib/prisma";

export async function findAll(request: FastifyRequest, reply: FastifyReply) {

  const temperaturas = await prisma.temperatura.findMany()

  return reply.status(200).send(temperaturas)
}