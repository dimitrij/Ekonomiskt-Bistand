import languageData from './lang';
import {
  CHANGE_LANGUAGE,
  CHANGE_VALUE,
  RESET_VALUE,
  CALCULATE,
  EDIT_MODE,
  RESET
} from "../actions/types";
const INITIAL_STATE = {
  appLanguageData: languageData.find(({
    language
  }) => language === "swedish"),
  calculate: [],
  defaultActiveSection: 0,
  defaultSteps: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      const n = state.appLanguageData.sections.map((sec) => {
        if (sec.section === action.payload.section) {
          sec.inputs.map((inp) => {
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
          })
        }
        return sec

      })
      return {
        ...state, appLanguageData: {
          ...state.appLanguageData,
          sections: n
        }
      };
    case RESET_VALUE:
      const x = state.appLanguageData.sections.map((sec) => {
        if (sec.section === action.payload.section) {
          sec.inputs.map((inp) => {
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
          })
        }
        return sec
      })
      return {
        ...state, appLanguageData: {
          ...state.appLanguageData,
          sections: x
        }
      };
    case CALCULATE:
      const calculate = state.appLanguageData.sections.reduce((acc, d) => {
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
              section: d.sectionTitle,
              inputs: []
            };
            d.inputs.map((inp) => {
              if (inp.type === 'radio') {
                total = +values[inp.defaultValue]
                antalFamilyNumber += parseInt(inp.defaultValue) + 1;
                section.inputs.push({
                  title: inp.title + ' * ' + (parseInt(inp.defaultValue) + 1),
                  userInputs: [{
                    defaultValue: (-1 * values[inp.defaultValue]),
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
                        defaultValue: (-1 * (values[usInp.name] * parseInt(usInp.defaultValue))),
                        name: usInp.title
                      }]
                    })
                  }
                })

                total = antal[antalFamilyNumber.toString()] + total

              }
            })
            section.inputs.push({
              title: d.allFamilyCountText + ' * ' + antalFamilyNumber,
              userInputs: [{
                defaultValue: antalFamilyNumber > 8 ? (-1 * (((antalFamilyNumber - 7) * antal['8']) + (antal['7']))) : antalFamilyNumber === 8 ? -1 * ((antal['7']) + (antal['8'])) : (-1 * antal[antalFamilyNumber.toString()]),
                name: ''
              }]
            })
            acc.push(section)
          } else {
            acc.push({
              section: d.sectionTitle,
              inputs: d.inputs.filter(({
                checked
              }) => checked)
            })
          }

        }
        return acc;
      }, [])
      return {
        ...state, calculate
      };
    case EDIT_MODE:
      return {
        ...state, defaultActiveSection: action.payload
      };
    case 'getSteps':
      return {
        ...state
      }
      case RESET:
        return state = {
          appLanguageData: languageData.find(({
            language
          }) => language === "swedish"),
          calculate: [],
          defaultActiveSection: 0,
          defaultSteps: languageData.find(({
            language
          }) => language === "swedish").sections.map(({
            sectionTitle
          }) => sectionTitle)
        }
      default:
        const step = state.appLanguageData.sections.map(({
          sectionTitle
        }) => sectionTitle)
        return {
          ...state, defaultSteps: step
        }
  }
}