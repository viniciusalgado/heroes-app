import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'
import FormatString from '../../../../utils/FormatString'
import { StatProgressBar, DetailsStack } from './styles'

const InfoStacks = ({ spacing, dataObject }) => {
  return (
    <DetailsStack spacing={spacing}>
      {Object.keys(dataObject).map(information => {
        if (dataObject[information] && dataObject[information] !== 'null') {
          if (isNaN(dataObject[information])) {
            return (
              <Typography key={information} variant='b1'>
                {`${FormatString(information)}: ${dataObject[information]}`}
              </Typography>
            );
          }
          if (information !== 'total') {
            return (
              <React.Fragment key={information}>
                <Typography variant='b1'>
                  {`${FormatString(information)}:`}
                </Typography>
                <StatProgressBar 
                  variant="determinate" 
                  value={dataObject[information] !== 'null' ? dataObject[information] : 0}
                />
              </React.Fragment>
            );
          }
        }
        return null;
      })}
    </DetailsStack>
  )
}

InfoStacks.propTypes = {
  dataObject: PropTypes.shape({}).isRequired,
  spacing: PropTypes.number.isRequired
}

export default InfoStacks
