import { useState } from 'react';
import Form from '../module/form';
import ItemList from '../module/itemList';
import styles from './CustomersEditPage.module.css';
import { useRouter } from 'next/router';

const CustomersEditPage = ({ data, customerId }) => {
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: data?.firstName,
    lastName: data?.lastName,
    email: data?.email,
    phone: data?.phone,
    postal: data?.postal,
    address: data?.address,
    products: data?.products,
  });

  const cancelHandler = () => {
    router.push('/');
  };
  const saveHandler = async (id) => {
    const res = await fetch(`/api/customers/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ data: form }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    if (data.status === 'success') router.push('/');
  };

  return (
    <div className={styles.container}>
      <h1>Edit Pages</h1>
      <Form form={form} setForm={setForm} />
      <ItemList form={form} setForm={setForm} />
      <div className={styles.btnEdit}>
        <button className={styles.cancel} onClick={cancelHandler}>
          Cancel
        </button>
        <button className={styles.save} onClick={() => saveHandler(customerId)}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CustomersEditPage;
