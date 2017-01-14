import React from 'react'
import Styles from './color.scss'

const Color = ({selected, color, onClick}) => {
  return <div className={selected ? `${Styles.color} ${Styles.selectedColor}` : Styles.color}
              style={{backgroundColor: color}} onClick={onClick}></div>
}

export default Color
