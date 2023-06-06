import { useRouter } from 'next/router';
import styles from './card.module.css';

const Card = ({ _id, firstName, lastName, email, phone, setReadey, ready }) => {
  const router = useRouter();
  const editHandler = (id) => {
    router.push(`/customers/${id}`);
  };

  const deleteHandler = async (id) => {
    const res = await fetch(`/api/customers/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    if (data.status === 'success') setReadey(!ready);
  };

  const detailHandler = (id) => {
    router.push(`/customers/details/${id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>
          {firstName}-{lastName}
        </p>
        <p> {email}</p>
        <p> {phone}</p>
      </div>
      <div className={styles.btn}>
        <button className={styles.details} onClick={() => detailHandler(_id)}>
          Detials
        </button>
        <button className={styles.edit} onClick={() => editHandler(_id)}>
          Edit
        </button>
        <button className={styles.delete} onClick={() => deleteHandler(_id)}>
          delete
        </button>
      </div>
    </div>
  );
};

export default Card;
