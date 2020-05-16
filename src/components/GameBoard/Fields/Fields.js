import React from 'react';

import Field from './Field/Field';
import Aux from '../../../hoc/Aux';

const fields = (props) => {
  const fieldsArr = [];
  const fieldColors = [...props.colors];

  for (let i = 0; i < props.num; i++) {
    const random = Math.floor(Math.random() * (fieldColors.length - 1));
    fieldsArr.push(
      <Field
        key={i + 'field'}
        level={props.level}
        color={fieldColors[random]}
      />
    );
    fieldColors.splice(random, 1);
  }

  return <Aux>{fieldsArr}</Aux>;
};

export default fields;
