import 'dotenv/config'

import fastify from 'fastify'
import { temperaturaRoutes } from './routes'

export const app = fastify()


app.register(temperaturaRoutes)