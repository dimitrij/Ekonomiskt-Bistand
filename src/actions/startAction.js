import {
  CHANGE_LANGUAGE,

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
    type: 'changeValue',
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
    type: 'resetValue',
    payload: {
      section,
      id,
      checked
    }
  }
}
export const doCalculate = () => {
  return ({
    type: 'calculate'
  })
}

export const ediAmount = (index) => {
  return ({
    type: "editMode",
    payload: index
  })
}