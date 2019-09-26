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

const FromInput = ({ input: { name, type, placeholder, defaultValue, }, id, section, changeValue, setChecked, isChecked, resetValue }) => {
  let today = new Date().toJSON().slice(0, 10);
  const dateToday = today.slice(0, 4) + '-'
    + today.slice(5, 7) + '-'
    + today.slice(8, 10);
  const [value, setValue] = useState(defaultValue ? defaultValue : type === 'date' ? dateToday : '')
  useEffect(() => {
    return () => {
      if (type === 'number' && (value === 0 || value === '')) {
        resetValue({ section, id, checked: isChecked })
      }
    }
    /*eslint-disable */
  }, [value])
  /*eslint-enable */
  return <CssTextField
    required
    style={{ width: type === 'date' ? '50%' : '100%', ...inputStyle }}
    id={name}
    label={type === 'date' ? null : placeholder}
    onChange={(e) => {
      setValue(type === 'date' ? e.target.value : parseInt(e.target.value));
      changeValue({ id, section, name, value: type === 'date' ? e.target.value : parseInt(e.target.value) })
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
}
