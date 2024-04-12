import React, { useEffect, useState } from 'react';

const baseUrl = 'http://54.253.204.230:8080';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // useEffect(callback); // the callback is executed everytime some state/prop changes
  // useEffect(callback, []); // the callback (effect) is executed only and exactly once when the component is mounted
  // useEffect(callback, [dep1, dep2]); // the callback is executed everytime dep1 or dep2 changes

  useEffect(() => {
    fetch(baseUrl + '/products')
      .then((resp) => resp.json())
      .then(setProducts) // .then(data=>setProducts(data))
      .catch(console.log); // .catch((err) => console.log(err))
  }, []);

  return (
    <>
      <h3>List of products</h3>

      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Description</th>
            <th>Unit price</th>
            <th>Brand</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>
                <img
                  style={{ height: '75px' }}
                  src={baseUrl + p.picture}
                  alt={p.name}
                />
              </td>
              <td>{p.description}</td>
              <td>{p.unit_price}</td>
              <td>{p.brand}</td>
              <td>{p.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductList;
