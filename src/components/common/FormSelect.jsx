import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const FormSelect = ({ options, changeSelectValue, i, defaultValue, selectsLength, doCalculate, name }) => {
  const [value, setValue] = useState(defaultValue || name)
  const classes = useStyles();
  useEffect(() => {
    doCalculate()
  },
    /*eslint-disable */
    [value]
    /*eslint-enable */
  )
  useEffect(() => {
    !defaultValue && changeSelectValue({ name: name, index: i, defaultValues: { [i]: name }, selectsLength })
  },
    /*eslint-disable */
    []
    /*eslint-enable */
  )
  return (
    <FormControl className={classes.formControl}>
      <InputLabel shrink htmlFor="age-label-placeholder">
        Age
        </InputLabel>
      <Select
        value={value}
        onChange={(event) => {
          setValue(event.target.value)
          changeSelectValue({ name: event.target.value, index: i, defaultValues: { [i]: event.target.value }, selectsLength })
        }
        }
        inputProps={{
          name: 'age',
          id: 'age-label-placeholder',
        }}
        displayEmpty
        name="age"
        className={classes.selectEmpty}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map(({ name, placeholder }, index) => <MenuItem key={index} value={name}>{placeholder}</MenuItem>)}
      </Select>
      <FormHelperText>barnets {i + 1} ålder </FormHelperText>
    </FormControl>
  )
}

export default FormSelect;