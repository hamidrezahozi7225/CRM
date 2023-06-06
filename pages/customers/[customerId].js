import CustomersEditPage from '@/components/template/CustomersEditPage';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const CustomersEdit = () => {
  const router = useRouter();

  const {
    isReady,
    query: { customerId },
  } = router;
  const [customer, setCustomer] = useState();
  useEffect(() => {
    if (isReady) {
      fetch(`/api/customers/${customerId}`)
        .then((res) => res.json())
        .then((data) => setCustomer(data.data));
    }
  }, [isReady]);

  if (customer) {
    return (
      <div>
        <CustomersEditPage data={customer} customerId={customer._id} />
      </div>
    );
  }
};

export default CustomersEdit;
