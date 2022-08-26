import React from 'react'

const Dashboard = ({user}) => {
  return (
    <section className='section'>
        <h3>Registration Complete</h3>
        <h4>Hello, {user?.name}</h4>
        <h4>We will contact you further via: <span><h5><b>{user?.email}</b></h5></span></h4>
    </section>
  )
}

export default Dashboard