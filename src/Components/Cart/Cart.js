import { useEffect } from "react"
import { toast } from "react-toastify"
import './StyleComp.css'


export function CartVazio() {
    return (
        <div id="div-cartVazio">
            <p>Sua sacola está vazia</p>
            <p>Adicione itens</p>
        </div>
    )
}


export function CartUl({ prod, currentSale, setCurrentSale }) {
    function removeItem(id, name) {
        const newCurrent = currentSale.filter((elem) => elem.id != id)

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
                    <p>{prod.category}</p>
                </div>
            </li>
    )
}

export function CartFooter({ currentSale, cartTotal, setCartTotal, setCurrentSale }) {

    useEffect(() => {
        const total = currentSale.reduce((acc, atual) => acc + atual.price, 0)
        setCartTotal(total)
    }, [currentSale])

    return (
        <div id='footer-cart'>
            <div>
                <p>Total</p>
                <p>{cartTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
            </div>
            <button onClick={() => {
                setCurrentSale([])
                toast.success('Itens removidos com sucesso!')
            }}>Remover todos</button>
        </div>
    )
}
