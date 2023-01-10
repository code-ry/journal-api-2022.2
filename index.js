import express from 'express'
import entryRoutes from './routes/entry_routes.js'
import categoryRoutes from './routes/category_routes.js'

const app = express()
const port = 4001

app.use(express.json())

app.get('/', (request, response) => response.send({ info: 'Journal API' }))

app.use('/entries', entryRoutes)

app.use('/categories', categoryRoutes)

app.listen(port, () => console.log(`App running at http://localhost:${port}/`))
