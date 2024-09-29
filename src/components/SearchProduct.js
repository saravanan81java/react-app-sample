import { useState } from "react"; 


function SearchProduct() {
    const[productUid, setProductUid] = useState('');
    const [productDetails, setProductDetails] = useState(null);
    const [isLoading,setIsLoading] = useState(false);

    const handleProductUidChange= (event) =>{
        setProductUid(event.target.value);
    }

    const featchProductDetails =() =>{        
        if(!productUid){
            alert('Please enter proper productId');
            return;
        }
        setIsLoading(true);
        fetch(`http://localhost:8080/product/id/${productUid}`)
        .then(response=>{
            if(response.status === 200) {       
                return response.json();
            } else if (response.status === 404) {
                return {error : 'not found'};
            } else {
                throw new Error('Failed to fetch product details.');
            }
        }).then(data =>{
            if(data && data.length === 0) {
                setProductDetails(null);
            } else {
                setProductDetails(data);
            }
        }).catch(
            error => {
                 setProductDetails(null);
                //console.log(error);
        }).finally(()=>{
            setIsLoading(false);
        });
    }

    return (
        <>
        <div id='productId'>
            <div id='serach'>  
                <p>Search Product : 
                    <input type='text' id='product-uid1' value={productUid} onChange={handleProductUidChange}/> &nbsp;
                    <button id='btn' onClick={featchProductDetails} disabled={isLoading}> 
                    {isLoading ? 'Loading.....' : 'Search'}
                    </button>
                </p>
            </div>
            <div>
                <p>Search Result</p>
                { productDetails === null ?
                    <p>Not Found</p> :
                    (
                    <>
                        <p>prodcutId : {productDetails.productUid}</p>
                        <p>Name: {productDetails.name}</p>
                        <img id='image1' src={productDetails.image} alt="Product" />
                        <p>Prodcut Type: {productDetails.productType}</p>
                        <p>Price: {productDetails.unit_price.price}</p>
                        <p>measure: {productDetails.unit_price.measure}</p>
                        <p>measure amount: {productDetails.unit_price.measure_amount}</p>
                    </>
                    )
                }
            </div>
        </div>
        </>
    )
}

export default SearchProduct;