import React from 'react'
import { NoteInput } from '../../containers'

const HomeView = () => {
  return (
    <div className='container text-center'>
      <h1 className='appHeader'>NotesApp</h1>
      <NoteInput />
    </div>
  )
}

export default HomeView
