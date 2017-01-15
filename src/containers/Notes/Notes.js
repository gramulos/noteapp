import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getNotes } from '../../redux/modules/notes'
import { Note } from '../../components'
import Mansory from 'react-masonry-component'
import Styles from './notes.scss'

class Notes extends Component {
  componentWillMount () {
    this.props.getNotes()
  }
  render () {
    const { notes } = this.props
    return (
      <Mansory className={Styles.notes}
               options={masonryOptions}>
         {notes && notes.toJS().map((note, index) => <Note color={note.color}
                                                           text={note.text}
                                                           key={'nt_' + index}/>)}
      </Mansory>
    )
  }
}

const masonryOptions = {
  transitionDuration: 100
}

Notes.propTypes = {
  getNotes: PropTypes.func.isRequired,
  notes: PropTypes.object
}

const mapStateToProps = ({notes}) => ({
  notes: notes.get('notes')
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getNotes }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes)
