import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { connect } from 'react-redux'
import { changeValue } from '../../actions/startAction'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderRadius: 20,
    margin: '30px 0',
    '& .MuiFormControlLabel-root': {
      margin: 0
    }
  },
  radioInput: {
    margin: 10,
    padding: 5,
    color: 'white'
  },
  formControl: {
    margin: theme.spacing(3),
  },
  Radio: {
    position: 'relative',
    color: 'white',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    '& svg.MuiSvgIcon-root': {
      color: theme.palette.primary.main
    },
    '& .MuiIconButton-colorSecondary:hover': {
      backgroundColor: 'none'
    }
  },
  active: {
    background: theme.palette.primary.main,
    boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
    transform: 'translateY(-2px)',
    transition: 'all .3s',
  },
  notActive: {
    background: theme.palette.primary.mainLight,
    color: '#929292e0',
    transform: 'scale(0.998)',
    transition: 'all .3s',
  }
}));


const FormRadio = ({ input: { userInputs, id, defaultValue }, section, changeValue }) => {

  const classes = useStyles();
  const [value, setValue] = React.useState(defaultValue);
  const handleChange = event => {
    setValue(event.target.value);
    changeValue({ id, section, value: event.target.value })
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      <div style={{ width: '80%', display: 'flex', fontSize: 10 }}>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={(e) => { handleChange(e); }}
          className={classes.root}>
          {userInputs.map(({ key, title }, index) => <FormControlLabel
            className={classes.Radio}
            key={index}
            value={key}
            control={<Radio
              style={{ background: 'none' }}
            />
            }
            label={
              <div
                className={value === key ? classes.active : classes.notActive}
                style={index !== 0 ? { ...styles.right } : { ...styles.left }}>
                {title}
              </div>}
          />)}
        </RadioGroup>
      </div>
    </div >)
}

const mapStateToProps = ({ appLanguageData }) => ({ appLanguageData })
export default connect(mapStateToProps, { changeValue })(FormRadio);
const commonStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 12,
  textAlign: 'center',
  zIndex: 100
}
const styles = {
  right: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    ...commonStyle
  },
  left: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    ...commonStyle

  }
}