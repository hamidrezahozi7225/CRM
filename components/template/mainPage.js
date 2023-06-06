import React, { useEffect, useState } from 'react';
import styles from './mainPage.module.css';
import Card from '../module/card';

const MainPage = () => {
  const [customers, setCustomers] = useState([]);
  const [ready, setReadey] = useState(false);
  useEffect(() => {
    fetch('/api/customers')
      .then((res) => res.json())
      .then((data) => setCustomers(data.data));
  }, [ready]);

  return (
    <div className={styles.container}>
      <h2>Customers</h2>
      {customers.map((customer) => (
        <Card
          key={customer._id}
          {...customer}
          setReadey={setReadey}
          ready={ready}
        />
      ))}
    </div>
  );
};

export default MainPage;
