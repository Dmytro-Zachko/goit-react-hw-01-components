import styled from '@emotion/styled'

export const ProfileContainer = styled.div`
margin: auto;
width: 450px;
box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.7);
`
export const Description = styled.div`
text-align: center;
padding: ${props => props.theme.spacing(5)}
`
export const Image = styled.img`
border-radius: 50%;
margin-bottom: ${props => props.theme.spacing(5)};
width: 170px;
`
export const Username = styled.p`
font-size: 24px;
font-weight: 600;
margin-bottom: ${props => props.theme.spacing(3)};
`
export const USerLocInfo = styled.p`
margin-bottom: ${props => props.theme.spacing(3)};
color: ${props => props.theme.colors.grey};
`
export const StatsList = styled.ul`
 display: flex;
  background-color: ${props => props.theme.colors.backgroundColor};
`
export const StatsListItem = styled.li`
width: 33.3333%;
border: ${props => `1px solid ${props.theme.colors.borderColor}`};
text-align: center;
padding: ${props => props.theme.spacing(8)};
flex-direction: column;
display: flex;
`
export const StatsListItemQuantity = styled.span`
font-size: 24px;
font-weight: 600;
color: ${props => props.theme.colors.black};
`
export const StatsListItemLabel = styled.span`
font-size: 12px;
font-weight: 600;
`