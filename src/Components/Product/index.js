import './Style.css'

function Product({ prod, handleClick }){
    
    return (
        <div className='cards'>
            <figure>
                <img src={prod.img} alt={prod.name}/>
            </figure>
            <h2>{prod.name}</h2>
            <p className='cards-category'>{prod.category}</p>
            <p className='cards-price'>{prod.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
            <button onClick={(e) => {
                e.preventDefault()
                handleClick(prod.id)
            }}>Adicionar</button>

        </div>
    )
}

export default Product