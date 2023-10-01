import ProductView from './components/ProductView/ProductView';
import products from './mockdata/products.json';

function App() {
  return <ProductView products={products} />;
}

export default App;
