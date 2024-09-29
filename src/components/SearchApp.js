import React, { useState } from 'react';

function SearchApp() {
  const [productUid, setProductUid] = useState('');
  const [productDetails, setProductDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
   

  const handleProductUidChange = (event) => {
    setProductUid(event.target.value);
  };

  const getProductDetails = () => {
    
    if (!productUid) {
      alert('Please enter a product UID');
      return;
    }

    setIsLoading(true);

    fetch(`http://localhost:8080/product/id/${productUid}`)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 404) {
          return { error: 'Not found' };
        } else {
          throw new Error('Failed to fetch product details');
        }
      })
      .then(data => { 
         setProductDetails(data);
      })
      .catch(error => { 
       // console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <label htmlFor="product-uid">Product UID:</label>
      <input type="text" id="product-uid" value={productUid} onChange={handleProductUidChange} />
      <button id="get-product-details" onClick={getProductDetails} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Get Product Details'}
      </button>

      <div id="product">
        { productDetails !== null ? 
          (<>
                <p>Name: <span id="name">{productDetails.name}</span></p>
                <p>Product Type: <span id="type">{productDetails.productType}</span></p>
                <img src={productDetails.image} alt="Product" id="image" />
                <p>Price: <span id="price">{productDetails.unit_price.price}</span></p>
                <p>Measure: <span id="measure">{productDetails.unit_price.measure}</span></p>
              </>)
            : (<p>not found</p>)
        }
      </div>
    </div>
  );
}

export default SearchApp;
