import React, { useState } from 'react';
import { connect } from 'react-redux'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import InfoModal from '../Layouts/InfoModal'
import FromInput from './FormInput';
import { resetValue } from '../../actions/startAction'

const useStyles = makeStyles(theme => {
  return ({
    FormControl:
    {
      display: 'flex',
      justifyContent: 'space-between',
      margin: 0
    },
    label: {
      display: 'flex',
      alignItems: 'center',
      marginRight: 10
    },
    iconButton: {
      width: 25,
      height: 25,
      marginLeft: 10,
      display: 'flex',
      alignItems: 'center',
      padding: 0,
      '&:hover': {
        background: 'none'
      },
      '& span svg': {
        border: 'none'
      }
    }
  })
})
const IOSSwitch = withStyles(theme => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,

      '& + $track': {
        backgroundColor: '#D34F98',
        opacity: 1,
        borderWidth: 0
      },
    },
    '& + $track': {
      border: 'none'
    },
    '&$focusVisible $thumb': {
      color: '#D34F98',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});



const FormSwitch = ({ title, userInputs, helperText, id, checked, section, resetValue }) => {
  const classes = useStyles();
  const [isChecked, setChecked] = useState(checked || false)
  const [modalStatus, setModalStatus] = useState(false)

  return (
    <>
      <FormControlLabel
        labelPlacement="start"
        className={classes.FormControl}
        control={
          <IOSSwitch
            checked={isChecked}
            onChange={() => { setChecked(!isChecked); resetValue({ section, id, checked: isChecked }) }}
            name={title}
            value={checked}
          />
        }
        label={<div className={classes.label}>
          <h3>{title}</h3>
          <IconButton onClick={() => setModalStatus(true)} aria-label="?" size="small" className={classes.iconButton} >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 16H11V14H9V16ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 4C7.79 4 6 5.79 6 8H8C8 6.9 8.9 6 10 6C11.1 6 12 6.9 12 8C12 10 9 9.75 9 13H11C11 10.75 14 10.5 14 8C14 5.79 12.21 4 10 4Z" fill="black" />
            </svg>
          </IconButton>
        </div>}
      />

      {isChecked &&
        userInputs.map((input, index) => <FromInput input={input} key={index} id={id} section={section} setChecked={setChecked} resetValue={resetValue} isChecked={isChecked} />
        )}
      <InfoModal modalStatus={modalStatus} setModalStatus={setModalStatus} info={helperText} title={title} id={id} />
    </>
  )

}


export default connect(null, { resetValue })(FormSwitch);