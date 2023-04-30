import PropTypes from 'prop-types';
import { ProfileContainer,Description,Image,Username,USerLocInfo,StatsList,StatsListItem,StatsListItemLabel,StatsListItemQuantity } from './Profile.styled';


export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
  <Description>
    <Image
      src={avatar}
      alt= {username}
    />
    <Username>{username} </Username>
    < USerLocInfo>{tag}</USerLocInfo>
    < USerLocInfo>{location}</USerLocInfo>
  </Description>

  <StatsList>
    <StatsListItem>
      <StatsListItemLabel>Followers</StatsListItemLabel>
      <StatsListItemQuantity>{stats.followers}</StatsListItemQuantity>
    </StatsListItem>
    <StatsListItem>
      <StatsListItemLabel>Views</StatsListItemLabel>
      <StatsListItemQuantity>{stats.views}</StatsListItemQuantity>
    </StatsListItem>
    <StatsListItem>
      <StatsListItemLabel>Likes</StatsListItemLabel>
      <StatsListItemQuantity>{stats.likes}</StatsListItemQuantity>
    </StatsListItem>
  </StatsList>
</ProfileContainer>
) 
}


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
  avatar: PropTypes.string.isRequired,
}