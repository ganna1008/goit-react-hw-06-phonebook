import PropTypes from 'prop-types';
import { ContactItem, ContactItemButton } from './ContactListItem.style';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactListItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => dispatch(deleteContact(id));
  return (
    <ContactItem>
      <p>
        {name}: {number}
      </p>
      <ContactItemButton type="button" onClick={onDeleteContact}>
        Delete
      </ContactItemButton>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
