import Link from 'next/link'
import userStyles from '../styles/User.module.css'

const UserItem = ({ user }) => {
  return (
    <Link href="/user/[_id]" as={`/user/${user._id}`}>
      <a className={userStyles.card}>
        <h3>{user.username} &rarr;</h3>
        <p>{user._id}</p>
      </a>
    </Link>
  )
}

export default UserItem