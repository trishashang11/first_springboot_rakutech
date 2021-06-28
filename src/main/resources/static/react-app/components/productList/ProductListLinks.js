import './ProductList.scss';
import {CgMenuGridR, CgMenu} from 'react-icons/cg';


const ProductListLinks = () =>{
    return(
<div className="pd-links">
                            <div className="links-opt">
                            <span>13 Items</span>
                            <div>
                            <span>Sort By</span>
                            <select name="" id="" className="sel">
                            <option value="">Name</option>
                            </select>
                            </div>
                            <div>
                            <span>Show</span>
                            <select name="" id="" className="sel">
                            <option value="">12</option>
                            </select>
                            </div>
                            
                        </div>
                         <div className="links-btn">
                         <CgMenuGridR className="menugrid-svg"/>
                        <CgMenu className="menu-svg"/>
                        </div>

                    </div>
    )
}
export default ProductListLinks;