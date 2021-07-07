import './ProductList.scss';

const ProductPriceRange = () =>{
    return(
        <div className="pd">
        <h3 className="pd-title">PRICES</h3>
        <ul className="pd-ul">
        <li className="pd-li"><span>Ranger:</span><span>$13.99 - $25.99</span></li>
        </ul>
        <input type="range" id="" name="" min="0" max="100" className="pd-range" />
        </div>
    )
}
export default ProductPriceRange;