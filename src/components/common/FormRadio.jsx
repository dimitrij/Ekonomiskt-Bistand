import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderRadius: 20,
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
    padding: '5px 10px',
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
    transform: 'translateY(-1px)',
    transition: 'all .3s',
  },
  notActive: {
    background: theme.palette.primary.mainLight,
    color: '#929292e0'
  }
}));
const FormRadio = ({ userInputs }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('withAdult');

  console.log(classes)
  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      <div style={{ width: '70%', display: 'flex' }}>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
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

export default FormRadio;
const styles = {
  right: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  left: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}