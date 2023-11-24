import { createContext, useContext, useMemo, useState } from 'react'

const context = createContext({})
const useSelectedHeroContext = () => useContext(context)

const SelectedHeroContextProvider = ({ children }) => {
  const [selectedHero, setSelectedHero] = useState('')
  const value = useMemo(() => ({ selectedHero, setSelectedHero }), [selectedHero])

  return <context.Provider value={value}>{children}</context.Provider>
}

export { SelectedHeroContextProvider, useSelectedHeroContext }
