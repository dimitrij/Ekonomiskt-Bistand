import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Form from './Form'
import Summary from './Summary';
import { connect } from 'react-redux'
import { ediAmount, reset } from '../../actions/startAction'
const useStyles = makeStyles(theme => {
  return ({
    root: {
      width: '100%',
      '& svg': {
        color: 'lightgray',
        borderRadius: '50%',
        border: '1px solid white',
        zIndex: 99
      },
      '& .MuiStepConnector-line': {
        borderColor: theme.palette.primary.main,
      }, '& .MuiStepConnector-alternativeLabel': {
        left: 'calc(-50% + 10px)',
        right: 'calc(50% + 10px)',
      },
      '& .MuiStepLabel-label.MuiStepLabel-alternativeLabel': {

        fontSize: 12,
        overflowWrap: 'break-word',
        wordWrap: 'break-word'

      }
    },
    bodyHolder: {
      width: '100%',
      padding: '24px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'center'
    },
    buttonsHolder: {
      padding: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
    ,
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    resultHolder: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  })
});



const StepperBar = ({
  defaultSteps, ediAmount, reset, defaultActiveSection,
  appLanguageData: {
    buttons: { next, finish, back },
    steppersSteps: { summaryStepTitle },
    sections,
    leftToRight
  }, calculate }) => {
  const getSteps = () => {
    return [...defaultSteps, summaryStepTitle];
  }
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(defaultActiveSection);
  const steps = getSteps()
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };
  const [calcAll, setCalcAll] = useState(0)

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    reset();
  };
  useEffect(() => {
    setActiveStep(defaultActiveSection)
  },
    /*eslint-disable */
    [defaultActiveSection]
    /*eslint-enable */

  )
  useEffect(() => {
    let all = 0;
    for (let index = 0; index < calculate.length; index++) {
      const element = calculate[index];
      for (let index_ = 0; index_ < element.inputs.length; index_++) {
        const usInp = element.inputs[index_];
        for (let index__ = 0; index__ < usInp.userInputs.length; index__++) {
          const inp = usInp.userInputs[index__];
          if (element.section !== 'income') {
            all -= inp.defaultValue
          } else {
            all += inp.defaultValue
          }
        }
      }
    }
    setCalcAll(all)

  },
    /*eslint-disable */
    [calculate, defaultActiveSection]
    /*eslint-enable */
  )
  useEffect(() => { ediAmount(activeStep) }, [activeStep, ediAmount])
  return (
    <div className={classes.root}>
      {activeStep !== steps.length &&
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>}
      <div>
        {
          <div className={classes.bodyHolder}>
            {
              activeStep !== steps.length - 1 ?
                <Form data={sections} leftToRight={leftToRight} />
                :
                <Summary />
            }
            <h2 style={{ textAlign: 'center' }}>{calcAll} kr</h2>
            <div className={classes.buttonsHolder}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                {back}
              </Button>
              <Button variant="contained" color="primary" onClick={() => { activeStep !== steps.length - 1 ? handleNext() : handleReset() }}>
                {activeStep === steps.length - 1 ? finish : next}
              </Button>
            </div>
          </div>
        }
      </div>
    </div >
  );
}
const mapStateToProps = ({ appLanguageData, defaultActiveSection, defaultSteps, calculate }) => ({ appLanguageData, defaultActiveSection, defaultSteps, calculate })
export default connect(mapStateToProps, { ediAmount, reset })(StepperBar)