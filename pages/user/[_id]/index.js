import React from 'react'
import Image from 'next/image'

// CDN Corespace Images
const CCImage = ({ src, width, quality }) => {
  // return `http://localhost/images/${src}?w=${width}&q=${quality || 75}`
  return `http://localhost:3008/images/file/${src}`
}

const User = ({ user }) => {
  if (user) {
    return (
      <div>
        
        <h3>{user.username}</h3><Image loader={CCImage} src={user.img} alt="User profile picture" width={100} height={100} />
        <p>UserID: {user._id} </p>
        <p>Email: {user.email} </p>
        <p>Created: {user.createdAt} </p>
      </div>
    )
  } else {
    return (
      <div>
        <p>API server is unresponsive</p>
      </div>
    )
  }
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/users')

  if (res.ok) {
    const users = await res.json()

    const paths = users.map((user) => ({
      params: { _id: user._id.toString() },
    }))

    return { paths, fallback: false }
  } else {
    return { paths: [], fallback: false }
  }
}


export async function getStaticProps({ params }) {
  if (params) {
    const res = await fetch(`http://localhost:3000/users/${params._id}`)
    const user = await res.json()

    return { props: { user } }
  } else {
    return { props: { user: null } }
  }
}

export default User