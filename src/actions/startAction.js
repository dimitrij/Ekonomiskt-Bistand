import {
  CHANGE_LANGUAGE,
  CHANGE_VALUE,
  RESET_VALUE,
  CALCULATE,
  EDIT_MODE,
  RESET

} from "./types";

export const ChangeLanguage = (lang) => {
  return {
    type: CHANGE_LANGUAGE,
    payload: lang
  }
};
export const changeValue = ({
  id,
  section,
  name,
  value
}) => {
  return {
    type: CHANGE_VALUE,
    payload: {
      id,
      section,
      name,
      value
    }
  }
}
export const resetValue = ({
  section,
  id,
  checked
}) => {
  return {
    type: RESET_VALUE,
    payload: {
      section,
      id,
      checked
    }
  }
}
export const doCalculate = () => {
  return ({
    type: CALCULATE
  })
}

export const ediAmount = (index) => {
  return ({
    type: EDIT_MODE,
    payload: index
  })
}
export const reset = () => {
  return ({
    type: RESET
  })
}