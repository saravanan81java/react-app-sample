import React from 'react';

function BlogPage(props) {
   
const {carList} = props;  

const filterListCar = carList.filter((carInfo)=> !carInfo.brand.includes('BMW1'));
  return (
    <div>
      <h1>Blog Page</h1>
      <ul>
        {carList.map((carInfo, index)=><li key={carInfo.brand + index}>({index}) {carInfo.brand}  {carInfo.color} </li>)}
      </ul>

      <ul>
        { 
          filterListCar.map(
            (carInfo, index) => <li className={(index%2 === 0) ? "even-label" : "odd-label"} key={carInfo.brand + index}> Hi, Im a {carInfo.brand}  {carInfo.color} Car</li>)}
      </ul>
 
        

    </div>
  );
}

export default BlogPage;