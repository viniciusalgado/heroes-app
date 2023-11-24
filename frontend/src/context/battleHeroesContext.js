import { createContext, useContext, useMemo, useState } from 'react'

const context = createContext({})
const useBattleHeroesContext = () => useContext(context)

const BattleHeroesContextProvider = ({ children }) => {
  const [battleHeroes, setBattleHeroes] = useState({
    firstHero: {},
    secondHero: {}
  })
  const value = useMemo(() => ({ battleHeroes, setBattleHeroes }), [battleHeroes])

  return <context.Provider value={value}>{children}</context.Provider>
}

export { BattleHeroesContextProvider, useBattleHeroesContext }
