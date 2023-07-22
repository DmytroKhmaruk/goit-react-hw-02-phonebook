import PropTypes from 'prop-types';
import ContainerStyles from './ContainerStyles';

function Container({ children, ...restProps }) {
  return <ContainerStyles {...restProps}>{children}</ContainerStyles>;
}

export default Container;

Container.propTypes = {
  children: PropTypes.node,
};

// Container.propTypes = {
//   formAddContact: PropTypes.func.isRequired,
//     value: PropTypes.string.isRequired,
//     handleOnChangeFilter: PropTypes.func.isRequired,
//     filteredContact: PropTypes.array.isRequired,
//     contactsArr: PropTypes.array.isRequired,
//     onRemoveContact: PropTypes.func.isRequired

// };

