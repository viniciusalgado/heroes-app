import { createContext, useContext, useMemo, useState } from 'react'

const LoaderContext  = createContext({})
const useLoaderContext = () => useContext(LoaderContext)

const LoaderContextProvider = ({ children }) => {
  const [showLoader, setShowLoader] = useState(false)
  const value = useMemo(() => ({ showLoader, setShowLoader }), [showLoader])

  return <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
}

export { LoaderContextProvider, useLoaderContext }

