import React from 'react'
import { NoteInput, Notes } from '../../containers'

const HomeView = () => {
  return (
    <div className='container'>
      <h1>NotesApp</h1>
      <NoteInput />
      <Notes />
    </div>
  )
}

export default HomeView
