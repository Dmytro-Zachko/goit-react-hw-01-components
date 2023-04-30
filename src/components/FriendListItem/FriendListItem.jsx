import PropTypes from 'prop-types';
import { FriendListItems,FriendListItemsName,FriendListItemsStatus, FriendListItemsImage } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <FriendListItems>
  <FriendListItemsStatus status={isOnline} ></FriendListItemsStatus >
  <FriendListItemsImage src= {avatar} alt="User avatar" width="48" />
  <FriendListItemsName > {name} </FriendListItemsName>
</FriendListItems>
    )
}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}