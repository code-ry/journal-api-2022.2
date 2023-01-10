import express from 'express'
import { CategoryModel } from '../db.js'

const router = express.Router()

router.get('/', async (req, res) => res.send(await CategoryModel.find()))

router.post('/', async (req, res) => {
  try {
    // 1. Create a new entry object with values passed in from the request
    const { name } = req.body
    const newCategory = { name }
    // 2. Push the new entry to the entries array
    // entries.push(newEntry)
    const insertedCategory = await CategoryModel.create(newCategory)
    // 3. Send the new entry with 201 status
    res.status(201).send(insertedCategory)
  }
  catch (err) {
    res.status(500).send({ error: err.message })
  }
})

export default router