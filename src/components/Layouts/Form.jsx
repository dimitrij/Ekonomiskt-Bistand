import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormSwitch from '../common/FormSwitch'
import FormRadio from '../common/FormRadio'


const IncomeForm = ({ leftToRight, data }) => {
  const { description, inputs } = data
  return (
    <>
      <p style={{ fontWeight: 'bold', color: 'black' }}>{description}</p>
      <FormGroup style={{ flexWrap: 'nowrap' }}>
        {
          inputs.map((input, index) => {
            return (
              <div style={{ width: '100%' }} key={index}>
                {
                  input.type === 'radio' ?
                    <FormRadio input={input} />
                    :
                    <FormSwitch input={input} leftToRight={leftToRight}
                    />
                }
              </div>
            )
          }
          )
        }
      </FormGroup>
    </>
  );
}
export default IncomeForm
