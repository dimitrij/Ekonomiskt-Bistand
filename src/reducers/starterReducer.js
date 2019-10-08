import {
  CHANGE_LANGUAGE,
  CHANGE_VALUE,
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
      const n = state.appLanguageData.sections.inputs.map((inp) => {
        if (inp.section === action.payload.section && inp.id === action.payload.id) {
          inp.userInputs.map((usInp) => {
            if (usInp.name === action.payload.name && inp.type !== 'radio') {
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
        }
        return inp

      })
      return {
        ...state, appLanguageData: {
          ...state.appLanguageData,
          sections: {
            ...state.appLanguageData.section,
            inputs: n
          }
        }
      };
    case RESET_VALUE:
      const x = state.appLanguageData.sections.inputs.map((inp) => {
        if (inp.section === action.payload.section) {
          if (inp.id === action.payload.id) {
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
          return inp;
        }
        return inp
      })
      return {
        ...state, appLanguageData: {
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
                inp.userInputs.map((usInp) => {
                  if (usInp.defaultValue) {
                    total += (values[usInp.name] * parseInt(usInp.defaultValue));
                    antalFamilyNumber += parseInt(usInp.defaultValue);
                    section.inputs.push({
                      title: usInp.placeholder + ' * ' + usInp.defaultValue,
                      userInputs: [{
                        defaultValue: ((values[usInp.name] * parseInt(usInp.defaultValue))),
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
                checked
              }) => checked)
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
          const nx = state.appLanguageData.sections.map((sec) => {
            sec.inputs.map((inp) => {
              inp.userInputs.map((usInp) => {
                if (inp.type !== 'radio') {
                  inp.checked = false;
                  usInp.defaultValue = ''
                  return {
                    ...usInp,
                    ...inp
                  }
                } else if (inp.type === 'radio') {
                  inp.defaultValue = '0';
                  return {
                    ...usInp,
                    ...inp
                  }
                }
                return usInp
              })
              return inp
            })

            return sec

          })
          return {
            ...state,
            appLanguageData: {
                ...state.appLanguageData,
                sections: nx,
              },
              calculate: [],
              defaultActiveSection: 0,
          };
        default:
          return state
  }
}