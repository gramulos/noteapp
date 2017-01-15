import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { reduxForm, resetForm } from 'redux-form'
import { getSettings, addNote } from '../../redux/modules/notes'
import { Color } from '../../components'
import { Note } from '../../models'
import Styles from './noteInput.scss'

class NoteInput extends Component {
  componentWillMount () {
    this.props.getSettings()
  }
  handleClick () {
    const { fields: { text, noteColor }, addNote, resetForm } = this.props
    const note = Note.create({
      text: text.value.trim(),
      color: noteColor.value
    })
    addNote(note)
    resetForm('NoteInputForm')
  }
  render () {
    const { fields: { text } } = this.props
    return (
      <div className='row'>
        <div className='col-sm-10 col-sm-offset-1'>
          <div className={Styles.noteInput}>
            <textarea placeholder='Enter your note here...' {...text}></textarea>
            {this.initColors()}
            <button type='button' className='btn btn-success pull-right'
                    disabled={text.value.trim().length === 0}
                    onClick={this.handleClick.bind(this)}>Add</button>
          </div>
        </div>
      </div>
    )
  }
  initColors () {
    const { fields: { noteColor }, colors } = this.props
    if (colors) {
      return (
        <div className={Styles.colors}>
          {colors.toJS().map(color => {
            return <Color color={color}
                          key={color}
                          selected={noteColor.value === color}
                          onClick={() => noteColor.onChange(color)}/>
          })}
        </div>
      )
    }
  }
}

NoteInput.propTypes = {
  getSettings: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
  addNote: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  colors: PropTypes.object
}

const mapStateToProps = ({notes}) => ({
  colors: notes.get('colors'),
  initialValues: { noteColor: notes.getIn(['colors', 0]) }
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getSettings, addNote, resetForm }, dispatch)
}

export default reduxForm({
  form: 'NoteInputForm',
  fields: ['noteColor', 'text']
}, mapStateToProps, mapDispatchToProps)(NoteInput)
