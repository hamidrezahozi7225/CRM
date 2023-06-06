import styles from './customersDetail.module.css';

const CustomersDetail = ({
  firstName,
  lastName,
  email,
  phone,
  postal,
  address,
  products,
}) => {
  console.log({ firstName, lastName, email, phone, postal, address, products });
  return (
    <div className={styles.container}>
      <div>
        <ul>
          <li>
            <span>First-Name : </span>
            {firstName}
          </li>
          <li>
            <span>Last-Name : </span>
            {lastName}
          </li>
          <li>
            <span>Email : </span>
            {email}
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <span>Phone-Number : </span>
            {phone}
          </li>
          <li>
            <span>Postal-Code : </span>
            {postal}
          </li>
          <li>
            <span>Address : </span>
            {address}
          </li>
        </ul>
      </div>
      <div>
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              <span>Products : </span>
              {product.name} - {product.price}$ - {product.qty}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomersDetail;
