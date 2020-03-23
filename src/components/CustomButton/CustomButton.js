import React from 'react';
import { CustomButtonContainer } from './styles';

const CustomButton = ({ children, ...props }) => {
  return <CustomButtonContainer>{children}</CustomButtonContainer>;
};

export default CustomButton;
