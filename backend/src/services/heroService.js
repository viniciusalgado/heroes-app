const axios = require('axios');

exports.fetchAllHeroes = async () => {
    const response = await axios.get(process.env.API_URL);
    const completeHeroesInfo = response.data;

    const heroes = completeHeroesInfo.map((hero) => ({
        id: hero.id,
        name: hero.name,
        images: hero.images
    }))
    return heroes;
};

exports.fetchSpecificHero = async ({ heroId }) => {
    const response = await axios.get(process.env.API_URL);
    const completeHeroesInfo = response.data;

    const hero = completeHeroesInfo.filter((hero) => hero.id === heroId)

    return hero;
};
