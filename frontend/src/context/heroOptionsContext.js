import { createContext, useContext, useMemo, useState } from 'react'

const HeroContext = createContext({})
const useSelectedHeroContext = () => useContext(HeroContext)

const SelectedHeroContextProvider = ({ children }) => {
  const [selectedHero, setSelectedHero] = useState('')
  const value = useMemo(() => ({ selectedHero, setSelectedHero }), [selectedHero])

  return <HeroContext.Provider value={value}>{children}</HeroContext.Provider>
}

export { SelectedHeroContextProvider, useSelectedHeroContext }
