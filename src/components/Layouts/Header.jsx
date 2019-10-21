import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { changeLanguage, reset } from '../../actions/startAction'
import { connect } from 'react-redux';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 40,
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 0,
    backgroundColor: 'white'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  editedSelect: {
    padding: 0,
    background: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      display: 'none'
    },
    '& .MuiSelect-selectMenu': {
      padding: '5px 0',
      display: 'flex',
      justifyContent: 'center',
    }
  }
}));
const AppHeader = ({ defaultLanguage: { name, icon }, supportedLanguages, changeLanguage, reset, appLanguageData: { generalTexts: { title } } }) => {
  const classes = useStyles();
  return (
    <>
      <Box fontWeight="fontWeightBold" m={1} fontSize="h6.fontSize" textAlign="center" style={{ paddingTop: 45 }}>
        {title}
      </Box>
      <FormControl variant="filled" className={classes.formControl}>
        <Select
          className={classes.editedSelect}
          value={name}
          onChange={(e) => { reset(); changeLanguage(e.target.value) }}
          inputProps={{
            name: 'Language',
            id: 'filled-age-simple',
          }}
        >
          {supportedLanguages.map(({ name, icon }, index) => <MenuItem key={index} icon={icon} value={name}>{icon}</MenuItem>)}

        </Select>
      </FormControl>
    </>
  )
}

const mapStateToProps = ({ defaultLanguage, supportedLanguages, appLanguageData }) => ({ defaultLanguage, supportedLanguages, appLanguageData })
export default connect(mapStateToProps, { changeLanguage, reset })(AppHeader);


