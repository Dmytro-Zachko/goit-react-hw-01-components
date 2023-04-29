import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li class="item">
  <span class="status"> {isOnline} </span>
  <img class="avatar" src= {avatar} alt="User avatar" width="48" />
  <p class="name"> {name} </p>
</li>
    )
}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}