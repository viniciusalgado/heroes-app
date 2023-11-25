import axios from 'axios'

const HeroesQueries = {
  getHeroes: async () => {
    const url = `/api/heroes`
    const heroes = await axios.get(url)
      .catch((error) => {
        console.error(error)
      })
    return heroes.data
  },
  getHero: async ({ heroId }) => {
    const url = `/api/hero`
    const heroes = await axios.post(url, { heroId })
      .catch((error) => {
        console.error(error)
      })
    return heroes.data
  },
}

export default HeroesQueries
