import { useState } from 'react'
import { CartFooter, CartUl, CartVazio } from './Cart'
import './Style.css'

function Cart({ cartTotal, setCartTotal, currentSale, setCurrentSale, handleChange }) {
    // const [valueInp, setValueInp] = useState(1)

    return (
        <aside id='aside-cart'>
            <div id='header-cart'>
                <h3>Carrinho de Compras</h3>
            </div>

            {currentSale.length > 0 ?
                <>
                    <ul id='cart-ul'>
                        {currentSale.map((elem, index) => <CartUl handleChange={handleChange} prod={elem} key={index} setCurrentSale={setCurrentSale} currentSale={currentSale}/>)}
                    </ul>
                    <CartFooter currentSale={currentSale} setCurrentSale={setCurrentSale} setCartTotal={setCartTotal} cartTotal={cartTotal}/>
                </>
                :
                <CartVazio />
            }
        </aside>
    )
}

export default Cart