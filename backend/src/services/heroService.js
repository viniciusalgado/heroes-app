const axios = require('axios')

exports.fetchAllHeroes = async () => {
    const response = await axios.get(process.env.API_URL)
    const completeHeroesInfo = response.data

    const heroes = completeHeroesInfo.map((hero) => ({
        id: hero.id,
        name: hero.name,
        images: hero.images
    }))
    return heroes
}

exports.fetchSpecificHero = async ({ heroId }) => {
    const response = await axios.get(process.env.API_URL)
    const completeHeroesInfo = response.data
    let hero = completeHeroesInfo.find((hero) => hero.id === heroId)
    let totalPowerStats = 0
    Object.keys(hero.powerstats).forEach(stat => {
        totalPowerStats = totalPowerStats + hero.powerstats[stat]
    })

    hero = {
        ...hero,
        powerstats: {
            ...hero.powerstats,
            total: totalPowerStats
        }
    }
    return hero
}
