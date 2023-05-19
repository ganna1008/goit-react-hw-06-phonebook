import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { getFilter } from 'redux/filterSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFiltredContacts = (contacts, query) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(query.toLocaleLowerCase())
    );
  };

  const filtredContacts = getFiltredContacts(contacts, filter);

  return (
    <ul>
      {filtredContacts.map(contact => {
        return <ContactListItem key={contact.id} contact={contact} />;
      })}
    </ul>
  );
};
