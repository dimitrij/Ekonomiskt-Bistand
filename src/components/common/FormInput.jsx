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
  input: { name, type, placeholder, defaultValue, max },
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
  }, [defaultValue]
    /*eslint-enable */
  )
  return (<>
    <CssTextField
      style={{ ...inputStyle }}
      id={name}
      label={placeholder}
      onChange={(e) => {
        setValue(parseInt(e.target.value));
        changeValue({ id, section, name, value: parseInt(e.target.value) })
      }}
      onBlur={(e) => {
        if (parseInt(value) > 9 && max) { setValue(parseInt(9)); changeValue({ id, section, name, value: 9 }) }
        if (parseInt(value) < 0) { setValue(parseInt(0)); changeValue({ id, section, name, value: 0 }) }

      }}
      value={value.toString()}
      type={type}
      name={name}
      margin="normal"
      variant="outlined"
      InputProps={{ inputProps: { min: 0, max: max } }}
    />
  </>)

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
