import { useState, useEffect } from 'react'
import ProductsList from './Components/ProductsList';
import Cart from './Components/Cart';
import { ToastContainer } from 'react-toastify'
import './App.css';
import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  function showProducts() {

  }

  function handleClick(productId) {
    const findProduct = products.find((elem) => {
      return elem.id === productId
    })

    setCurrentSale([...currentSale, findProduct])
  }

  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then(resp => resp.json())
      .then(resp => setProducts(resp))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="app">
      <header className="app-header">

        <h1>Burguer <span>Kenzie</span></h1>
        <form>
          <input placeholder='Digitar Pesquisa' />
          <button>Pesquisar</button>

        </form>
      </header>

      <main className="main-header">

        <ProductsList products={products} handleClick={handleClick} setCurrentSale={setCurrentSale} />
        <Cart cartTotal={cartTotal} setCartTotal={setCartTotal} currentSale={currentSale} setCurrentSale={setCurrentSale} />

      </main>
      <ToastContainer
        theme= "colored"
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
