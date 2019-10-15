import {
  CHANGE_LANGUAGE,
  CHANGE_VALUE,
  CHANGE_SELECT_VALUE,
  RESET_VALUE,
  CALCULATE,
  EDIT_MODE,
  RESET
} from "../actions/types";
import lang from './lang.js'

const INITIAL_STATE = {
  defaultLanguage: {
    name: 'swedish',
    icon: '🇸🇪'
  },
  supportedLanguages: lang.map(({
    language
  }) => language),
  appLanguageData: lang.find(({
    language: {
      name
    }
  }) => name === 'swedish'),
  calculate: [],
  defaultActiveSection: 0,
  defaultSteps: ['Information'],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      const n =
        state.appLanguageData.sections.inputs.map((inp) => {
          if (inp.section === action.payload.section && inp.id === action.payload.id) {
            inp.userInputs.map((usInp) => {
              if (usInp.name === action.payload.name && inp.type !== 'radio') {
                if (inp.section === 'familyStatus' && inp.id === action.payload.id) {
                  for (const key in inp.defaultValues) {
                    if (inp.defaultValues.hasOwnProperty(key)) {
                      if (parseInt(key) >= action.payload.value) {
                        delete inp.defaultValues[key]
                      }
                    }
                  }
                  inp.userInputs.map((usInp) => {
                    inp.checked = true;
                    usInp.defaultValue = action.payload.value
                    inp.userInputsSelectValue.map((selectInp, i) => {
                      selectInp.indexes = selectInp.indexes.filter(value => value <= action.payload.value - 1);
                      return selectInp
                    })

                    return {
                      ...usInp,
                      ...inp
                    }
                  })
                } else {
                  inp.checked = true;
                  usInp.defaultValue = parseInt(action.payload.value)
                  return {
                    ...usInp,
                    ...inp
                  }
                }

              }
              if (inp.type === 'radio' && action.payload.id === inp.id) {
                inp.defaultValue = action.payload.value;
                return {
                  ...usInp,
                  ...inp
                }
              }
              return usInp
            })
            return inp
          }
          return inp

        })
      return {
        ...state,
        appLanguageData: {
          ...state.appLanguageData,
          sections: {
            ...state.appLanguageData.section,
            inputs: n
          }
        }
      };
    case CHANGE_SELECT_VALUE:
      const xxx =
        state.appLanguageData.sections.inputs.map((inp) => {
          if (inp.section === 'familyStatus' && inp.id === 18) {
            inp.defaultValues = {
              ...inp.defaultValues,
              ...action.payload.defaultValues
            }
            inp.userInputsSelectValue.map((selectInp, i) => {
              selectInp.indexes = selectInp.indexes.filter(value => value <= action.payload.selectsLength - 1);
              if (selectInp.name === action.payload.name && !selectInp.indexes.find(a => a === action.payload.index)) {
                selectInp.indexes.push(action.payload.index)
              } else {
                if (selectInp.indexes.indexOf(action.payload.index) !== -1) {
                  selectInp.indexes.splice(selectInp.indexes.indexOf(action.payload.index), 1);
                }
              }
              return selectInp
            })
            return inp
          }
          return inp
        })
      return {
        ...state,
        appLanguageData: {
          ...state.appLanguageData,
          sections: {
            ...state.appLanguageData.section,
            inputs: xxx
          }
        }
      };
    case RESET_VALUE:
      const x = state.appLanguageData.sections.inputs.map((inp) => {
        if (inp.section === action.payload.section) {
          if (inp.id === action.payload.id) {
            if (inp.id === 18) {
              //need to fix



              inp.defaultValues = {};
              inp.checked = !action.payload.checked;
              inp.userInputs = inp.userInputs.map((usInp, index) => {
                if (usInp.type === 'number') {
                  usInp.defaultValue = 1
                  return usInp
                }
                return usInp
              })

              inp.userInputsSelectValue = inp.userInputsSelectValue.map((usInp, index) => {
                if (usInp.indexes.length > 0) {
                  usInp.indexes = [];
                  return usInp
                }
                return usInp
              })
              return inp

            } else {
              if (inp.userInputs.length === 1) {
                inp.checked = !action.payload.checked;
                inp.userInputs.map((d) => d.defaultValue = '')
                return inp;
              } else if (!inp.userInputs.find(({
                  defaultValue
                }) => defaultValue)) {
                inp.checked = !action.payload.checked;
                inp.userInputs.map((d) => d.defaultValue = '')
              }
            }

          }
          return inp;
        }
        return inp
      })
      return {
        ...state,
        appLanguageData: {
          ...state.appLanguageData,
          sections: {
            ...state.appLanguageData.section,
            inputs: x
          }
        }
      };
    case CALCULATE:
      const arr =
        state.appLanguageData.sections.inputs.reduce((acc, d) => {
            const foundSection = acc.find(a => a.section === d.section);
            if (!foundSection) {
              acc.push({
                section: d.section,
                sectionTitle: d.sectionTitle,
                description: d.description,
                inputs: [d]
              })
            } else {
              foundSection.inputs.push(d)
            }
            return acc
          },
          [])
      const calculate = arr.reduce((acc, d) => {
        const foundType = acc.find(a => a.section === d.section);
        if (!foundType) {
          if (d.section === 'familyStatus') {
            let values = {
              '0': 3090,
              '1': 5570,
              '0-1': 2130,
              '1-2': 2380,
              '3': 2120,
              '4-6': 2380,
              '7-10': 2990,
              '11-14': 3440,
              '15-18': 3880,
              '19-20': 3910,
            };
            let antal = {
              '1': 990,
              '2': 1100,
              '3': 1380,
              '4': 1570,
              '5': 1810,
              '6': 2050,
              '7': 2220,
              '8': 170,
            };
            let total = 0;
            let antalFamilyNumber = 0;
            let section = {
              sectionTitle: d.sectionTitle,
              section: d.section,
              inputs: []
            };

            d.inputs.map((inp) => {
              if (inp.type === 'radio') {
                total = +values[inp.defaultValue]
                antalFamilyNumber += parseInt(inp.defaultValue) + 1;
                section.inputs.push({
                  title: inp.title + ' * ' + (parseInt(inp.defaultValue) + 1),
                  userInputs: [{
                    defaultValue: (values[inp.defaultValue]),
                    name: inp.title + ' * ' + (parseInt(inp.defaultValue) + 1)
                  }]
                })
              } else {
                inp.userInputsSelectValue.map((usInp) => {
                  if (usInp.indexes.length > 0) {
                    total += (values[usInp.name] * parseInt(usInp.indexes.length));
                    antalFamilyNumber += parseInt(usInp.indexes.length);
                    section.inputs.push({
                      title: usInp.placeholder + ' * ' + usInp.indexes.length,
                      userInputs: [{
                        defaultValue: ((values[usInp.name] * parseInt(usInp.indexes.length))),
                        name: usInp.title
                      }]
                    })
                  }
                  return usInp
                })

                total = antal[antalFamilyNumber.toString()] + total
              }
              return inp
            })
            section.inputs.push({
              title: state.appLanguageData.allFamilyCountText + ' * ' + antalFamilyNumber,
              userInputs: [{
                defaultValue: antalFamilyNumber > 8 ? ((((antalFamilyNumber - 7) * antal['8']) + (antal['7']))) : antalFamilyNumber === 8 ? ((antal['7']) + (antal['8'])) : (antal[antalFamilyNumber.toString()]),
                name: ''
              }]
            })
            acc.push(section)
          } else {
            acc.push({
              section: d.section,
              sectionTitle: d.sectionTitle,
              inputs: d.inputs.filter(({
                checked,
                userInputs
              }) => checked && userInputs[0].defaultValue)
            })
          }

        }
        return acc;
      }, [])
      return {
        ...state,
        calculate
      };
    case EDIT_MODE:
      return {
        ...state,
        defaultActiveSection: action.payload
      };
    case 'getSteps':
      return {
        ...state
      }
      case CHANGE_LANGUAGE:

        return {
          ...state,
          defaultLanguage: lang.find(({
              language: {
                name
              }
            }) => name === action.payload).language,
            appLanguageData: lang.find(({
              language: {
                name
              }
            }) => name === action.payload),
            defaultSteps: lang.find(({
              language: {
                name
              }
            }) => name === action.payload).sections.map(({
              sectionTitle
            }) => sectionTitle)
        }
        case RESET:
          const nx = state.appLanguageData.sections.inputs.map((inp) => {
            inp.userInputs.map((usInp) => {
              if (inp.type !== 'radio') {
                inp.checked = true;
                usInp.defaultValue = action.payload.value
                return {
                  ...usInp,
                  ...inp
                }
              } else if (inp.type === 'radio' && action.payload.id === inp.id) {
                inp.defaultValue = action.payload.value;
                return {
                  ...usInp,
                  ...inp
                }
              }
              return usInp
            })
            return inp


          })
          return {
            ...state,
            appLanguageData: {
              ...state.appLanguageData,
              sections: {
                ...state.appLanguageData.section,
                inputs: nx
              }
            }
          };
        default:
          return state
  }
}