import languageData from './lang';
import {} from "../actions/types";
const INITIAL_STATE = {
  appLanguageData: languageData.find(({
    language
  }) => language === "english"),
  calculate: [],
  defaultActiveSection: 2,

};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'changeValue':
      const n = state.appLanguageData.sections.map((sec) => {
        if (sec.section === action.payload.section) {
          sec.inputs.map((inp) => {
            inp.userInputs.map((usInp) => {
              if (usInp.name === action.payload.name) {
                inp.checked = true;
                return usInp.defaultValue = action.payload.value
              }
              return usInp;
            })
            return inp
          })
        }
        return sec

      })
      return {
        ...state, appLanguageData: {
          ...state.appLanguageData,
          sections: n
        }
      }
      case 'resetValue':
        const x = state.appLanguageData.sections.map((sec) => {
          if (sec.section === action.payload.section) {
            sec.inputs.map((inp) => {
              if (inp.id === action.payload.id) {
                inp.checked = !action.payload.checked
                inp.userInputs.map((d) => d.defaultValue = '')
                return inp;
              }
              return inp;
            })
          }
          return sec
        })
        return {
          ...state, appLanguageData: {
            ...state.appLanguageData,
            sections: x
          }
        }
        case 'calculate':
          const calculate = state.appLanguageData.sections.reduce((acc, d) => {
            const foundType = acc.find(a => a.section === d.section);
            if (!foundType) {
              acc.push({
                section: d.section,
                inputs: d.inputs.filter(({
                  checked
                }) => checked)
              })
            }
            return acc;
          }, [])
          return {
            ...state, calculate
          }
          case 'editMode':
            return {
              ...state, defaultActiveSection: action.payload
            }
            default:
              return state
  }
}