import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormSwitch from '../common/FormSwitch'
import FormRadio from '../common/FormRadio'


const IncomeForm = ({ data: { description, inputs, section } }) => {

  return (
    <>
      <p style={{ fontWeight: 'bold', color: 'black' }}>{description}</p>
      <FormGroup>
        {inputs.map(({ title, helpText, userInputs, id, checked, type }, index) => (
          <div key={index}> {type === 'radio' ?
            <FormRadio userInputs={userInputs} title={title} /> : type === 'select' ?
              <div>select</div> :
              <FormSwitch
                userInputs={userInputs}
                section={section}
                title={title}
                helperText={helpText}
                checked={checked}
                id={id}
              />
          }
          </div>)
        )}
      </FormGroup>
    </>
  );
}
export default IncomeForm
