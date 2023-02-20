import PropTypes from 'prop-types';


import { FriensList, FriendsItem, Status } from "./Friends.styled"


export const FriendList = ({ friends }) => {
 return <FriensList className="friend-list">
    {friends.map (({avatar, name, isOnline, id}) => {
    return <FriendsItem key={id} className="item">
  <Status className="status"isOnline={isOnline}></Status>
  <img className="avatar" src={avatar} alt={name} width="48" />
  <p className="name">{name}</p>
</FriendsItem>
})}
</FriensList> 
}

FriendList.propTypes ={
  friends: PropTypes.arrayOf(
    PropTypes.shape({
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }
  ).isRequired)
  .isRequired
}