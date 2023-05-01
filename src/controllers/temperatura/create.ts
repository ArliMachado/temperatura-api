import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";



const createTemperatureBodySchema = z.object({
  temperatura: z.string(),
})

export async function create(request: FastifyRequest, reply: FastifyReply) {


  const { temperatura } = createTemperatureBodySchema.parse(request.body)

  const resultado = await prisma.temperatura.create({
    data: {
      valor: temperatura
    }
  })

  console.log(temperatura);

  return reply.status(201).send({
    resultado
  })

}