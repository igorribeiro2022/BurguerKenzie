import { useEffect } from "react"
import { toast } from "react-toastify"
import './StyleComp.css'



export function CartVazio() {
    return (
        <div id="div-cartVazio">
            <h4 >Sua sacola está vazia</h4>
            <p>Adicione itens</p>
        </div>
    )
}


export function CartUl({ prod, currentSale, setCurrentSale }) {


    function removeItem(id, name) {
        const newCurrent = currentSale.filter((elem) => elem.id !== id)

        setCurrentSale(newCurrent)
        toast.success(`${name} foi removido`)
    }

    return (
        <li id={prod.id} className="prods-li">
            <figure>
                <img src={prod.img} alt={prod.name} />
            </figure>
            <div>
                <div>
                    <h2>{prod.name}</h2>
                    <p onClick={() => removeItem(prod.id, prod.name)}>Remover</p>
                </div>
                <div className="cart-item">
                    <p>{prod.category}</p>
                    <input className="inpQuant" type="number" min={1} defaultValue={prod.unidade}/>
                </div>
            </div>
        </li>
    )
}

export function CartFooter({ currentSale, cartTotal, setCartTotal, setCurrentSale }) {

    useEffect(() => {
        const total = currentSale.reduce((acc, atual) => acc + atual.price*atual.unidade, 0)
        setCartTotal(total)
    }, [currentSale])

    return (
        <div id='footer-cart'>
            <div>
                <p id="total-foot">Total</p>
                <p>{cartTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </div>
            <button onClick={() => {
                setCurrentSale([])
                toast.success('Itens removidos com sucesso!')
            }}>Remover todos</button>
        </div>
    )
}
