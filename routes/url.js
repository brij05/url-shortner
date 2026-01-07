import express from 'express'
import handelGenerateNewShortURL from '../controller/url.js'
const router=express.Router()

const urlRoute=router.post('/shortner',handelGenerateNewShortURL)
export default urlRoute
