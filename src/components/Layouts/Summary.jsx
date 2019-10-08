import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { doCalculate, ediAmount } from '../../actions/startAction'
const useStyles = makeStyles(theme => {
  return ({
    root: {
      color: theme.palette.primary.second,
      marginBottom: 50,
      fontSize: 18,
      fontWeight: 500,
      textTransform: 'capitalize'
    },
    rowDiv: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid #E5E5E5',
      padding: '10px 0'
    },
    mainHolder: {
      color: '#707070'
    }
  })
});


const Summary = ({ calculate, doCalculate, ediAmount, appLanguageData: { resultText, leftToRight } }) => {
  const classes = useStyles()
  useEffect(() => {
    doCalculate(); ediAmount(0)
  },
    /*eslint-disable */
    []
    /*eslint-enable */
  )
  let all = 0;
  return (
    <div>
      {calculate.map(({ section, sectionTitle, inputs }, SectionIndex) => {
        let total = 0;
        return (
          <div key={SectionIndex} className={classes.root}>
            <h3>{sectionTitle}</h3>
            <div className={classes.mainHolder}>{inputs.map(({ title, userInputs }, index) => {
              return (
                <div key={index}
                  className={classes.rowDiv} style={{ flexDirection: !leftToRight ? 'row-reverse' : 'row' }}>
                  <div style={{ flex: 4 }}>{title}</div>
                  <div style={{ flex: 2 }}>
                    {userInputs.map(({ defaultValue, name }) => {
                      total += defaultValue;
                      section !== 'income' ?
                        all -= defaultValue : all += defaultValue
                      return defaultValue
                    }
                    )}
                  </div>
                  <div style={{ flex: 1, textAlign: 'center' }} onClick={() => { ediAmount(SectionIndex) }}>   <svg width="33" height="32" viewBox="0 0 33 32" style={{ border: 'none' }} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.6621 11.3301L24.7266 10.2754C25.2539 9.74805 25.2734 9.17188 24.7949 8.68359L24.4141 8.29297C23.9355 7.81445 23.3496 7.86328 22.8223 8.38086L21.7578 9.42578L23.6621 11.3301ZM11.6992 23.2734L22.7246 12.248L20.8301 10.3633L9.80469 21.3691L8.85742 23.6738C8.74023 23.9668 9.04297 24.2891 9.33594 24.1816L11.6992 23.2734Z" fill="#E5E5E5" />
                  </svg></div>
                </div>
              )
            })}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0' }}>
                <h3 style={{ flex: 4 }}>Total</h3>
                <h3 style={{ flex: 2 }}>{total}</h3>
                <div style={{ flex: 1 }}></div>
              </div>
            </div>
          </div >)
      })
      }
      <div>
        <h3>Result</h3>
        <div dangerouslySetInnerHTML={{ __html: all > 0 ? resultText.no.replace("#####", '<span style="color:green">' + all + '</span>') : resultText.yes.replace("#####", '<span style="color:red">' + all * -1 + '</span>') }} />
      </div>
    </div >
  );
}
const mapStateToProps = ({ calculate, appLanguageData }) => ({ calculate, appLanguageData })
export default connect(mapStateToProps, { doCalculate, ediAmount })(Summary)

              // total += userInputs.find(a => a.type === 'number')['defaultValue'];
