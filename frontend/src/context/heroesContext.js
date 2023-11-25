import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import HeroesQueries from '../services/heroesQueries'

const HeroesContext = createContext({})
const useHeroesContext = () => useContext(HeroesContext)

const HeroesContextProvider = ({ children }) => {
  const [heroes, setHeroes] = useState([])
  const value = useMemo(() => ({ heroes, setHeroes }), [heroes])

  useEffect(() => {
    (async () => {
      const tempHeroes = await HeroesQueries.getHeroes()

      setHeroes(tempHeroes)
    })()
  }, [])  
  

  return <HeroesContext.Provider value={value}>{children}</HeroesContext.Provider>
}

export { HeroesContextProvider, useHeroesContext }
