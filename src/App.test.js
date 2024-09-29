import { render, screen, fireEvent  } from '@testing-library/react';

import SearchProduct from './components/SearchProduct';

global.alert = jest.fn(console.log('test'));
 

test('does not display results when no search term provided', () => {
  const { getByText } = render(<SearchProduct/>);
  const searchButton = getByText('Search');
  fireEvent.click(searchButton);
  expect(getByText('Not Found')).toBeInTheDocument();
});


test('displays no products found message for empty response', async () => {
  jest.spyOn(global, 'fetch').mockResolvedValueOnce({
    ok: true,
    json: async () => []
  });
  const productUid = '6447344';
  const { getByText } = render(<SearchProduct productUid/>); 
  expect(getByText('Not Found')).toBeInTheDocument();
});

test('Sample test1',()=>{
  expect('one');
});



function testAdd(){
   expect('text');
}

test('Sample test2',()=>{testAdd();});