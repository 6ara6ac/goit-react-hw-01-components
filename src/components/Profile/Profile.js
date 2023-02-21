import PropTypes from 'prop-types';

import { Image, UserCard, StatsList, StatsItem, Description, Title, SubTitle } from "./Profile.styled"


export const Profile = ({ username, tag, location, avatar, stats: {followers, views, likes}  }) => {
return (<UserCard className="profile">
<Description className="description">
  <Image
    src={avatar}
    alt={username}
    className="avatar"
  />
  <Title className="name">{username}</Title>
  <SubTitle className="tag">{tag}</SubTitle>
  <SubTitle className="location">{location}</SubTitle>
</Description>

<StatsList className="stats">
  <StatsItem>
    <span className="label">Followers</span>
    <span className="quantity">{followers}</span>
  </StatsItem>
  <StatsItem>
    <span className="label">Views</span>
    <span className="quantity">{views}</span>
  </StatsItem>
  <StatsItem>
    <span className="label">Likes</span>
    <span className="quantity">{likes}</span>
  </StatsItem>
</StatsList>
</UserCard>)
}


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape ({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired
}
