import React from 'react'
import Styles from './note.scss'

const Note = ({color, text}) => {
  return (
    <div className={`col-sm-4 ${Styles.noteBox}`}>
      <div className={Styles.note} style={{backgroundColor: color}}>
        {text}
      </div>
    </div>
  )
}

export default Note
