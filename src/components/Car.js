import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  useEffect(() => {
      axios.get(apiUrl)
           .then(response => setData(response.data))
           .catch(error => {
              console.error('Error fetching data:', error);
            });
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div>
      <h1>Posts</h1>
      <h2>{apiUrl}</h2>
      <ul>
        {data.map(post => (<li key={post.id}>{post.id}) {post.title}</li>))}
      </ul>
    </div>
  );
}

export default App;