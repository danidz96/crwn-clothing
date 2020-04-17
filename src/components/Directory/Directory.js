import React from 'react';
import { useSelector } from 'react-redux';
import { Wrapper } from './style';
import MenuItem from '../MenuItem/MenuItem';
import { selectDirectorySections } from '../../redux/directory/selector/index';

const Directory = () => {
  const sections = useSelector(selectDirectorySections);

  return (
    <Wrapper>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </Wrapper>
  );
};

export default Directory;
