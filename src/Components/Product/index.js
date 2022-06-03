import { toast } from 'react-toastify'
import './Style.css'

function Product({ prod, handleClick }){
    
    return (
        <div className='cards'>
            <figure>
                <img src={prod.img} alt={prod.name}/>
            </figure>
            <h2>{prod.name}</h2>
            <p className='cards-category'>{prod.category}</p>
            <p className='cards-price'>R$ {prod.price.toFixed(2).replace(".", ",")}</p>
            <button onClick={(e) => {
                e.preventDefault()
                handleClick(prod.id)
                toast.success('Adicionado ao carrinho')
            }}>Adicionar</button>

        </div>
    )
}

export default Product