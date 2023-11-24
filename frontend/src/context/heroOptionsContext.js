import { createContext, useContext, useMemo, useState } from 'react'

const context = createContext({})
const useHeroOptionsContext = () => useContext(context)

const HeroOptionsContextProvider = ({ children }) => {
  const [heroOptions, setHeroOptions] = useState([])
  const value = useMemo(() => ({ heroOptions, setHeroOptions }), [heroOptions])

  return <context.Provider value={value}>{children}</context.Provider>
}

export { HeroOptionsContextProvider, useHeroOptionsContext }
