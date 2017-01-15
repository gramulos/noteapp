import React from 'react'
import { NoteInput, Notes } from '../../containers'

const HomeView = () => {
  return (
    <div className='container text-center'>
      <h1 className='appHeader'>NotesApp</h1>
      <NoteInput />
      <Notes />
    </div>
  )
}

export default HomeView
