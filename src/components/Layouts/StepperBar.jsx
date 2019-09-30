import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Form from './Form'
import Summary from './Summary';
import { connect } from 'react-redux'
import { ediAmount } from '../../actions/startAction'
const useStyles = makeStyles(theme => {
  return ({
    root: {
      width: '100%',
      '& svg': {
        color: 'lightgray',
        borderRadius: '50%',
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



const StepperBar = ({ defaultSteps, ediAmount, defaultActiveSection, appLanguageData: { buttons: { resetBtn, next, finish, back }, steppersSteps: { incomeStepTitle, expensesStepTitle, summaryStepTitle, familyStatus }, sections } }) => {
  const getSteps = () => {
    return [...defaultSteps, summaryStepTitle];
  }
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(defaultActiveSection);
  const steps = getSteps()
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  useEffect(() => {
    setActiveStep(defaultActiveSection)
  },
    /*eslint-disable */
    [defaultActiveSection]
    /*eslint-enable */

  )
  useEffect(() => { ediAmount(activeStep) }, [activeStep, ediAmount])
  return (
    <div className={classes.root}>
      {activeStep !== steps.length && <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>}
      <div>
        {activeStep === steps.length ? (
          <div className={classes.resultHolder}>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>{resetBtn}</Button>
          </div>
        ) : (
            <div className={classes.bodyHolder}>
              {
                activeStep !== steps.length - 1 ?
                  sections.map((section, index) => section.sectionTitle === steps[activeStep] ? <Form key={index} data={section} /> : null)

                  : <Summary />
              }
              <div className={classes.buttonsHolder}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  {back}
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? finish : next}
                </Button>
              </div>
            </div>
          )}
      </div>
    </div >
  );
}
const mapStateToProps = ({ appLanguageData, defaultActiveSection, defaultSteps }) => ({ appLanguageData, defaultActiveSection, defaultSteps })
export default connect(mapStateToProps, { ediAmount })(StepperBar)