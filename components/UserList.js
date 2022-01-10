import userStyles from '../styles/User.module.css'
import UserItem from './UserItem'

const UserList = ({ users }) => {
  return (
    <div className={userStyles.grid}>
      {users.map((user) => (
        <UserItem key={user._id} user={user} />
      ))}
    </div>
  )
}

export default UserList