import { Wraper, Title } from '../styles/sectionStyles';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <Wraper>
      <Title>{title}</Title>
      {children}
    </Wraper>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
