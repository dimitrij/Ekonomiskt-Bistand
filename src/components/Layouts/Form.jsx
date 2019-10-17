import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormSwitch from '../common/FormSwitch'
import FormRadio from '../common/FormRadio'


const IncomeForm = ({ leftToRight, data }) => {
  const { inputs } = data
  const sections =
    inputs.reduce((acc, d) => {
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
  return (
    sections.map(({ description, inputs, sectionTitle }, index) =>
      <div key={index} style={{ borderTop: '1px solid lightgray', padding: 15, margin: 5 }}>
        <p style={{ fontWeight: 'bold', color: 'black', textAlign: 'center' }}>{sectionTitle}</p>
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
      </div>
    )

  );
}
export default IncomeForm
