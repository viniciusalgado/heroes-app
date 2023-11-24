import React from 'react'
import { Typography } from '@mui/material'
import FormatString from '../../../../utils/FormatString';
import { StatProgressBar, DetailsStack } from './styles';

export default function InfoStacks({ spacing, dataObject }) {
  return (
    <DetailsStack spacing={spacing}>
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
              <Typography key={information + 'typography'} variant='b1'>{
                `${FormatString(information)}:`
              }</Typography>
              {dataObject[information] !== 'null'
                ? <StatProgressBar key={information + 'bar'} variant="determinate" value={dataObject[information]}/>
                : <StatProgressBar key={information + 'bar'} variant="determinate" value={0}/>
              }
            </>
          )
        }
        return null
      })}
    </DetailsStack>
  )
}
