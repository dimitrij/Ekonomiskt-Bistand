import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import { changeValue } from '../../actions/startAction'

const CssTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#E5E5E5',
        borderRadius: 17.5,
      }
    },
  },
})(TextField);


const FromInput = ({
  input: { name, type, placeholder, defaultValue, },
  id, section, changeValue, setChecked, isChecked, resetValue
}) => {
  const [value, setValue] = useState(defaultValue ? defaultValue : '')
  useEffect(() => {
    return () => {
      if (type === 'number' && (value === 0 || value === '')) {
        resetValue({ section, id, checked: isChecked })
      }
    }
    /*eslint-disable */
  }, [value]
    /*eslint-enable */
  )

  return <CssTextField
    style={{ ...inputStyle }}
    id={name}
    label={placeholder}
    onChange={(e) => {
      setValue(parseInt(e.target.value));
      changeValue({ id, section, name, value: parseInt(e.target.value) })
    }}
    type={type}
    name={name}
    margin="normal"
    variant="outlined"
    value={value}
  />


}
const mapStateToProps = ({ appLanguageData }) => ({ appLanguageData })
export default connect(mapStateToProps, { changeValue })(FromInput);


const inputStyle = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '19px',
  width: '100%'
}
