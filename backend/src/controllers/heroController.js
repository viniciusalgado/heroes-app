const heroService = require('../services/heroService')

exports.getAllHeroes = async (req, res) => {
    try {
        const heroes = await heroService.fetchAllHeroes()
        res.json(heroes)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

exports.getSpecificHero = async (req, res) => {
    try {
        const { heroId } = req.body
        const hero = await heroService.fetchSpecificHero({ heroId })
        res.json(hero)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

