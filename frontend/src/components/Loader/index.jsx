import React from 'react'
import { CircularProgress } from '@mui/material'
import { useLoaderContext } from '../../context/loaderContext'
import { Container, Label } from './styles'

const Loader = () => {
  const { showLoader } = useLoaderContext()

  return (
    showLoader && (
      <Container>
        <CircularProgress
          variant={'indeterminate'}
          size={70}
          style={{ color: '#A0D4CD' }}
        />
        <Label>Loading...</Label>
      </Container>
    )
  )
}

export default Loader
