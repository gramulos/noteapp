import React from 'react'
import { Link } from 'react-router'

export class NotFoundView extends React.Component {
  render () {
    return (
      <div className='container text-center full-height'>
        <div className='center-vertically'>
          <h1>Oops, there is no any note here!</h1>
          <Link to='/'>Go to my notes</Link>
        </div>
      </div>
    )
  }
}

export default NotFoundView
