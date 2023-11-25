import { createContext, useContext, useMemo, useState } from 'react'

const BattleContext = createContext({})
const useBattleHeroesContext = () => useContext(BattleContext)

const BattleHeroesContextProvider = ({ children }) => {
  const [battleHeroes, setBattleHeroes] = useState({
    firstHero: {},
    secondHero: {}
  })
  const value = useMemo(() => ({ battleHeroes, setBattleHeroes }), [battleHeroes])

  return <BattleContext.Provider value={value}>{children}</BattleContext.Provider>
}

export { BattleHeroesContextProvider, useBattleHeroesContext }
