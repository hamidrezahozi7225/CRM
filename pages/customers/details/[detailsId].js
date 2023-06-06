import CustomersDetail from '@/components/template/customersDetail';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const DetailsCustomers = () => {
  const router = useRouter();

  const {
    isReady,
    query: { detailsId },
  } = router;
  const [customer, setCustomer] = useState();
  useEffect(() => {
    if (isReady)
      fetch(`/api/customers/${detailsId}`)
        .then((res) => res.json())
        .then((data) => setCustomer(data.data));
  }, [isReady]);

  if (customer)
    return (
      <div>
        <CustomersDetail {...customer} />
      </div>
    );
};

export default DetailsCustomers;
