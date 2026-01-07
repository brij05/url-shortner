import URL from '../models/url.js'
import { nanoid } from 'nanoid'

async function handleGenerateNewShortURL(req, res) {
    const { url } = req.body

    if (!url) {
        return res.status(400).json({ error: 'Please enter URL' })
    }

    const existing = await URL.findOne({ redirectURL: url })

    if (existing) {
        return res.status(200).json({
            message: 'URL already shortened',
            shortId: existing.shortId
        })
    }

    const shortId = nanoid(8)

    const newUrl = await URL.create({
        shortId,
        redirectURL: url,
        visitHistory: []
    })

    return res.status(201).json({ id: newUrl.shortId })
}

export default handleGenerateNewShortURL
