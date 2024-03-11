import ContactItem from "./ContactItem.jsx";
import styles from "./ContactsList.module.css";

function ContactsList({ contacts, deleteHandler }) {
  return (
    <div className={styles.container}>
      <h3>Contacts List</h3>
      {!contacts.length ? (
        <p className={styles.message}>no contacts Yet !</p>
      ) : (
        <ul className={styles.contacts}>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactsList;
