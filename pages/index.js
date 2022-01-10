/* eslint-disable react/jsx-key */
import Head from 'next/head'

import UserList from '../components/UserList'

export default function Home({ users }) {
  return (
    <div>
      <Head>
        <title>First NextJS App</title>
        <meta name='keywords' content='web development, programming'/>
      </Head>
      
      {/* <p>{users[0]._id}</p> */}
      <UserList users={users}/>
    </div>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`http://localhost:3030/users`)
  const users = await res.json()

  if (!users) {
    return {
      notFound: true,
    }
  }

  return {
    props: { users }, // will be passed to the page component as props
  }
}