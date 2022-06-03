import Product from '../Product'
import './Style.css'

function ProductsList({ products, handleClick }) {

    return (
        <section id='section'> {/*   items-wrapper   */}
            <div id='section-div'> {/*   items   */}
                {products.map((elem, index) => <Product prod={elem} key={index} handleClick={handleClick} />)}
            </div>
        </section>
    )
}

export default ProductsList