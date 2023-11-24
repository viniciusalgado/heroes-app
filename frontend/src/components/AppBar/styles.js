import { styled, Typography } from '@mui/material'

export const BodyParagraph = styled(Typography, {
  shouldForwardProp: prop => !['textColor'].includes(prop)
})`
  color: ${({ textColor }) => (textColor ?? '#000')};
  font-size: 0.9rem;
`