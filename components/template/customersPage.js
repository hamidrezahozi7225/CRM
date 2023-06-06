import { useState } from 'react';
import styles from './customersPage.module.css';
import Form from '../module/form';
import ItemList from '../module/itemList';
import { useRouter } from 'next/router';

const CustomersPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    postal: '',
    address: '',
    products: [{ name: '', price: '', qty: '' }],
  });

  const saveHandler = async () => {
    const res = await fetch('/api/customers', {
      method: 'POST',
      body: JSON.stringify({ data: form }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    if (data.status === 'success') router.push('/');
  };

  const cancelHandler = () => {
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      postal: '',
      address: '',
      products: [{ name: '', price: '', qty: '' }],
    });
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <Form form={form} setForm={setForm} />
      <ItemList form={form} setForm={setForm} />
      <div className={styles.btn}>
        <button className={styles.cancel} onClick={cancelHandler}>
          Cancel
        </button>
        <button className={styles.save} onClick={saveHandler}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CustomersPage;
