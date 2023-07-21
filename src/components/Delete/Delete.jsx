import PropTypes from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';
import DeleteStyles from './DeleteStyles'



const ContactItem = ({id, name, number, onRemoveContact})=>{
    return(
        <DeleteStyles key={id}>
            <p>
              {name}: {number}
            </p>
        <button type='button' onClick={() => onRemoveContact(id)}>
          <MdDeleteForever/>
        </button>
          </DeleteStyles>
    )
}

ContactItem.propTypes={
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onRemoveContact: PropTypes.func.isRequired
}

export default ContactItem