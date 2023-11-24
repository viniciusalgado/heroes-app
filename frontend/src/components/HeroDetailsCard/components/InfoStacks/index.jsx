import React from 'react'
import { Typography } from '@mui/material'
import FormatString from '../../../../utils/FormatString';
import { StatProgressBar, DetailsStack } from './styles';

export default function InfoStacks({ spacing, dataObject }) {
  return (
    <DetailsStack spacing={spacing} sx={{width: '100%'}}>
      {Object.keys(dataObject).map(information => {
        if (dataObject[information] && dataObject[information] !== 'null' ) {
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
              {dataObject[information] !== 'null'
                ? <StatProgressBar variant="determinate" value={dataObject[information]}/>
                : <StatProgressBar variant="determinate" value={0}/>
              }
            </>
          )
        }
        return null
      })}
    </DetailsStack>
  )
}
