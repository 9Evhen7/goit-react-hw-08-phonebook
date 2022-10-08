import { Wraper } from '../styles/sectionStyles';
import PropTypes from 'prop-types';

export const Section = ({ children }) => {
  return <Wraper>{children}</Wraper>;
};

Section.propTypes = {
  children: PropTypes.node,
};
