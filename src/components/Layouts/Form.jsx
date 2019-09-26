import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormSwitch from '../common/FormSwitch'



const IncomeForm = ({ data: { description, inputs, section } }) => {
  return (
    <>
      <p style={{ fontWeight: 'bold', color: 'black' }}>{description}</p>
      <FormGroup>
        {inputs.map(({ title, helpText, userInputs, id, checked }, index) => (
          <FormSwitch
            key={index}
            userInputs={userInputs}
            section={section}
            title={title}
            helperText={helpText}
            checked={checked}
            id={id}
          />
        )
        )}
      </FormGroup>
    </>
  );
}
export default IncomeForm

