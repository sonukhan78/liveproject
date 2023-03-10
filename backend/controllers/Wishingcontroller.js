const wishing = require("../module/Wishingmodule");



const getwishing = async (req, res) => {

    try {
        const data = await wishing.find({})
        if (!data) {
            res.status(404).json("data is missing")
        }
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }

}


const postwishing = async (req, res) => {
    try {
        const { title, image, dis,Likeimage } = req.body
        if (!title || !image   || !dis || !Likeimage) {
            res.status(400).json({ error: "missing the fild" })
        }
        const data = await wishing.create({
            title,
            dis,
            image,
            Likeimage
        })
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
}


module.exports = { getwishing, postwishing }