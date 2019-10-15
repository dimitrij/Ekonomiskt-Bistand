import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { changeValue, doCalculate } from '../../actions/startAction'
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";


const MySlider = withStyles((theme) => {
  return {
    root: {
      color: theme.palette.primary.main,
      height: 8
    },
    thumb: {
      height: 34,
      width: 34,
      backgroundColor: "#fff",
      border: "10px solid currentColor",
      boxShadow: "0 0 10px rgba(0,0,0,.3)",
      marginTop: -14,
      marginLeft: -12,
      "&:focus,&:hover,&$active": {
        boxShadow: "inherit"
      }
    },
    active: {
      boxShadow: "0 0 0.625rem rgba(0,0,0,.3)"
    },
    valueLabel: {
      left: "calc(-50% + 4px)"
    },
    track: {
      height: 8,
      borderRadius: 4
    },
    rail: {
      height: 8,
      borderRadius: 4
    }
  }
})(Slider);

const FromInput = ({
  input,
  input: { name, type, placeholder, defaultValue, max },
  id, section, changeValue, isChecked, resetValue,
  setValue, doCalculate
}) => {
  useEffect(() => {
    setValue(defaultValue)
    doCalculate()
    return () => {
      if (type === 'number' && (defaultValue === 0 && section !== 'familyStatus') && ((defaultValue === '' && section === 'familyStatus'))) {
        resetValue({ section, id, checked: isChecked })
      }
    }
    /*eslint-disable */
  }, [defaultValue]
    /*eslint-enable */
  )
  return (<>
    {(section === 'familyStatus' && type !== 'radio') && <p style={{ marginTop: 40 }}>{name}  {(defaultValue) ? ' = ' + defaultValue : null}</p>}
    <MySlider
      valueLabelDisplay="off"
      defaultValue={parseInt(defaultValue)}
      min={0}
      max={max ? max : 30000}
      step={max ? 1 : 100}
      onChange={
        (e, val) => {
          changeValue({ id, section, name, value: parseInt(val) })
        }
      }

    />
  </>)

}
const mapStateToProps = ({ appLanguageData }) => ({ appLanguageData })
export default connect(mapStateToProps, { changeValue, doCalculate })(FromInput);



