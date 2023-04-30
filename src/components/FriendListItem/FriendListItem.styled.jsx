import styled from '@emotion/styled'

export const FriendListItems = styled.li`
display: flex;
margin-bottom: ${props => props.theme.spacing(3)};
box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.7);
align-items: center;
gap: ${props => props.theme.spacing(3)};
padding: ${props => props.theme.spacing(3)};
`
export const FriendListItemsName = styled.p`
font-size: 24px;
font-weight: 600;
`
export const FriendListItemsStatus = styled.span`
width: 12px;
height: 12px;
border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`

export const FriendListItemsImage = styled.img`
display: block;
`