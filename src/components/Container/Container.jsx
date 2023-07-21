import Contacts from 'components/Contacts';
import ContactForm from '../Contacts/ContactForm';
import PropTypes from 'prop-types';
import ContainerStyles from './ContainerStyles';
import Filter from 'components/Filter';

function Container({
  formAddContact,
  value,
  handleOnChangeFilter,
  filteredContact,
  contactsArr,
  onRemoveContact,
}) {
  
  return (
    <ContainerStyles>
      <h1>Phonebook</h1>

      <ContactForm formAddContact={formAddContact}
       contactsArr={contactsArr}
       />
      <h2>Contacts</h2>     
      <Filter
       value={value}
       handleOnChangeFilter={handleOnChangeFilter} />      
      <Contacts
        filteredContact={filteredContact}
        onRemoveContact={onRemoveContact}
        value={value}
        handleOnChangeFilter={handleOnChangeFilter}
      />
    </ContainerStyles>
  );
}

Container.propTypes = {
  formAddContact: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    handleOnChangeFilter: PropTypes.func.isRequired,
    filteredContact: PropTypes.array.isRequired,
    contactsArr: PropTypes.array.isRequired,
    onRemoveContact: PropTypes.func.isRequired

};

export default Container;
