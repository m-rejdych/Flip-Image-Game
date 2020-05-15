import React from 'react';

import Field from './Field/Field';
import Aux from '../../../hoc/Aux';

const fields = (props) => {
  const fieldsArr = [];
  for (let i = 0; i < props.num; i++) {
    fieldsArr.push(<Field level={props.level} />);
  }

  return <Aux>{fieldsArr}</Aux>;
};

export default fields;
