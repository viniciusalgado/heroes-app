import React from 'react'
import { Typography } from '@mui/material'
import FormatString from '../../../../utils/FormatString';
import { StatProgressBar, DetailsStack } from './styles';

export default function InfoStacks({ spacing, dataObject }) {
  return (
    <DetailsStack spacing={spacing} sx={{width: '100%'}}>
      {Object.keys(dataObject).map(information => {
        if (isNaN(dataObject[information])) {
          return (
            <Typography key={information} variant='b1'>{
              `${FormatString(information)}: ${dataObject[information]}`
              }</Typography>
          )
        }

        return (
          <>
            <Typography key={information} variant='b1'>{
              `${FormatString(information)}:`
            }</Typography>
            <StatProgressBar variant="determinate" value={dataObject[information]}/>
          </>
        )
      })}
    </DetailsStack>
  )
}
