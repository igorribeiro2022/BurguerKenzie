import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import ProductsList from "./Components/ProductsList";
import Cart from "./Components/Cart";
import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  const [ products, setProducts ] = useState([]);
  const [ filteredProducts, setFilteredProducts ] = useState([]);
  const [ inputDescription, setInputDescription ] = useState("");
  const [ currentSale, setCurrentSale ] = useState([]);
  const [ cartTotal, setCartTotal ] = useState(0);

  function showProducts() {
    const filtered = products.filter((elem) =>
      elem.name.toLowerCase().includes(inputDescription.toLowerCase())
    );
    setFilteredProducts(filtered);
    setInputDescription("");
  }

  function handleClick(productId) {
    const findProduct = products.find((elem) => {
      return elem.id === productId;
    });
    findProduct.unidade = 1;

    const findInArray = currentSale.find((elem) => elem === findProduct);

    if (findInArray === undefined) {
      setCurrentSale([...currentSale, findProduct]);
      toast.success("Adicionado ao carrinho!");
    } else {
      toast.error(
        `${findProduct.name} já está no carrinho, altere a quantidade!`
      );
    }
  }

  function handleChange(productId, value) {
    const findProduct = products.find((elem) => {
      return elem.id === productId;
    });

    findProduct.unidade = value;
    setCurrentSale([...currentSale]);
  }

  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((resp) => resp.json())
      .then((resp) => setProducts(resp))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>
          Burguer <span>Kenzie</span>
        </h1>
        <form>
          <input
            value={inputDescription}
            onChange={(event) => setInputDescription(event.target.value)}
            placeholder="Digitar Pesquisa"
          />
          <button
            onClick={(event) => {
              showProducts();
              event.preventDefault();
            }}
          >
            Pesquisar
          </button>
        </form>
      </header>

      <main className="main-header">
        {filteredProducts.length > 0 ? (
          <>
            <ProductsList
              products={filteredProducts}
              handleClick={handleClick}
              setCurrentSale={setCurrentSale}
            />
            <Cart
              handleChange={handleChange}
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
            />
          </>
        ) : (
          <>
            <ProductsList
              products={products}
              handleClick={handleClick}
              setCurrentSale={setCurrentSale}
            />
            <Cart
              handleChange={handleChange}
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
            />
          </>
        )}
      </main>
      <ToastContainer
        theme="colored"
        position="bottom-right"
        autoClose={5000}
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
