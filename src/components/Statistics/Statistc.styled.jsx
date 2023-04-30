import styled from '@emotion/styled'
import { getRandomHexColor } from 'units/randomColor'

export const StatisticContainer = styled.section`
width: 500px;
box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.7);
margin: ${props => props.theme.spacing(3)} auto;
`

export const UploadStats = styled.h2`
padding: ${props => props.theme.spacing(7)};
text-align: center;
color: ${props => props.theme.colors.grey};
font-size: 36px;
text-transform: uppercase;
margin: 0px
`
export const StatsList = styled.ul`
 display: flex; 
`

export const StatsListItem = styled.li`
 display: flex;
 flex-direction: column;
 width: 20%;
  background-color: ${getRandomHexColor};
  text-align: center;
  padding: ${props => props.theme.spacing(3)};
`

export const StatsListItemLabel = styled.span`
color: ${props => props.theme.colors.white};
`

export const StatsListItemPercentage = styled.span`
font-size: 32px;
color: ${props => props.theme.colors.white};
`