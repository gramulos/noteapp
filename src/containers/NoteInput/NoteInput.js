import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { reduxForm } from 'redux-form'
import { getSettings } from '../../redux/modules/notes'
import { Color } from '../../components'
import Styles from './noteInput.scss'

class NoteInput extends Component {
  componentWillMount () {
    this.props.getSettings()
  }
  render () {
    const { fields: { text, noteColor }, colors } = this.props
    return (
      <div className='row'>
        <div className='col-md-10 col-md-offset-1'>
          <div className={Styles.noteInput}>
            <textarea placeholder='Enter your note here...' {...text}></textarea>
            {colors && <div className={Styles.colors}>
              {colors.toJS().map(color => <Color color={color}
                                                 key={color}
                                                 selected={noteColor.value === color}
                                                 onClick={() => {
                                                   noteColor.onChange(color)
                                                 }}/>)}
            </div>}
          </div>
        </div>
      </div>
    )
  }
}

NoteInput.propTypes = {
  getSettings: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
  colors: PropTypes.object
}

const mapStateToProps = ({notes}) => ({
  colors: notes.get('colors')
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getSettings }, dispatch)
}

export default reduxForm({
  form: 'NoteInputForm',
  fields: ['noteColor', 'text']
}, mapStateToProps, mapDispatchToProps)(NoteInput)
