import React from 'react';

import Field from './Field/Field';
import Aux from '../../../hoc/Aux';

const fields = (props) => {
  const fieldsArr = [];
  const fieldColors = [...props.colors];

  for (let i = 0; i < props.num; i++) {
    fieldsArr.push(
      <Field
        activateField={props.activateField}
        key={i + 'field'}
        level={props.level}
        color={fieldColors[i]}
        colors={props.colors}
        fieldsActivated={props.fieldsActivated}
        desactivateFields={props.desactivateFields}
        identificator={i}
        isEndGame={props.isEndGame}
      />
    );
  }

  return <Aux>{fieldsArr}</Aux>;
};

export default fields;
