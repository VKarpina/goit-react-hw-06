import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const getVisibleContacts = (contacts, statusFilter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(statusFilter.toLowerCase())
  );
};

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const statusFilter = useSelector((state) => state.filters.name);
  const visibleContacts = getVisibleContacts(contacts, statusFilter);

  return (
    <ul className={s.list}>
      {visibleContacts.map((item) => (
        <li className={s.item} key={item.id}>
          <Contact contact={item} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
