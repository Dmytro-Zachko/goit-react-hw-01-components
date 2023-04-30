import styled from '@emotion/styled'

export const FriendsList = styled.ul`
display: flex;
flex-direction: column;
margin: auto;
width: 450px;
box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.7);
padding: ${props => props.theme.spacing(3)};
margin-top: ${props => props.theme.spacing(3)};
`