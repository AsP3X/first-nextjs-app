import React from 'react'


const User = ({ user }) => {
  return (
    <div>
      <h3>{user.username}</h3>
      <p>UserID: {user._id} </p>
      <p>Email: {user.email} </p>
      <p>Created: {user.createdAt} </p>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3030/users')
  const users = await res.json()

  const paths = users.map((user) => ({
    params: { _id: user._id.toString() },
  }))

  return { paths, fallback: false }
}


export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3030/users/${params._id}`)
  const user = await res.json()

  return { props: { user } }
}

export default User