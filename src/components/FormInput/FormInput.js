import React from 'react';
import { FormInputContainer, Input, Label } from './styles';

const FormInput = ({ handleChange, label, ...props }) => {
  return (
    <FormInputContainer>
      <Input onChange={handleChange} {...props} />
      {label && <Label shrink={Boolean(props.value?.length)}>{label}</Label>}
    </FormInputContainer>
  );
};

export default FormInput;
