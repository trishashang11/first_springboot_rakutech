import './ProductList.scss';

const ProductBrand = () =>{
    return(
        <div>
        <div className="pd">
        <h3 className="pd-title">BRAND</h3>
        <ul className="pd-ul">
            <li className="pd-li"><span>Apple</span><span>2</span></li>
            <li className="pd-li"><span>LG</span><span>2</span></li>
            <li className="pd-li"><span>Samsung</span><span>2</span></li>
            <li className="pd-li"><span>Siemens</span><span>2</span></li>
        </ul>
        </div>

<div className="pd-more">
<button className="pd-btn">MORE</button>
</div>

</div>
    )
}
export default ProductBrand;