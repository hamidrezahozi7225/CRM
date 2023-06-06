import React from 'react';
import InputGroup from './inputGroup';
import styles from './itemList.module.css';

const ItemList = ({ form, setForm }) => {
  const { products } = form;

  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: '', price: '', qty: '' }],
    });
  };

  const changeHandler = (e, index) => {
    const { name, value } = e.target;
    const newProducts = [...products];
    newProducts[index][name] = value;
    setForm({ ...form, products: newProducts });
  };

  const deleteHandler = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setForm({ ...form, products: newProducts });
  };

  return (
    <div>
      <div className={styles.header}>
        <h2>Products</h2>
      </div>
      {products &&
        products.map((product, index) => (
          <div className={styles.container}>
            <InputGroup
              type='text'
              label='name'
              value={product.name}
              changeHandler={(e) => changeHandler(e, index)}
              name='name'
            />
            <div className={styles.price}>
              <InputGroup
                type='number'
                label='Price'
                value={product.price}
                changeHandler={(e) => changeHandler(e, index)}
                name='price'
              />
              <InputGroup
                type='number'
                label='Qty'
                value={product.qty}
                changeHandler={(e) => changeHandler(e, index)}
                name='qty'
              />
            </div>
            <div className={styles.delete}>
              <button onClick={() => deleteHandler(index)}>Delete Item</button>
            </div>{' '}
          </div>
        ))}
      <div className={styles.addItem}>
        <button onClick={addHandler}>Add ItemList</button>
      </div>
    </div>
  );
};

export default ItemList;
