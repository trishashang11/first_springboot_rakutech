import Container from '../container/Container';
import './ProductList.scss';

import pbimg from '../../raw-images/mn1.png';
import ProductAccessories from './ProductAccessories';
import ProductPriceRange from './ProductPriceRange';
import ProductColors from './ProductColors';
import ProductBrand from './ProductBrand';
import ProductItemList from './ProductItemList';
import ProductListLinks from './ProductListLinks';
import TopNav from '../top-nav/TopNav';

import { useState, useEffect } from 'react';

import fetchApi from '../../fetchApi';

const ProductList = () =>{

    const [fetchdata, setfetchdata] = useState([]);
    

    useEffect(() =>{
    fetchApi().then(data => {
        setfetchdata(data);
    // console.log(data)
        
    })
    },[])



    return(
        <div>

            <TopNav/>

            <Container>
            <div className="pd-list">
                <div className="pd-left">

                <ProductAccessories/>    

                   <ProductPriceRange/>

                  <ProductColors />

                   <ProductBrand/>

                </div>
                <div className="pd-right">

                    <div className="pd-banner">
                        <div className="pd-btext">
                            <h1>iPhone 8</h1>
                            <p className="pd-p">Performance and design. Token right to the edge.</p>
                            <p>SHOP NOW</p>
                        </div>
                        <img src={pbimg} alt=""/>
                    </div>

                    <ProductListLinks/>
                    {
                        (fetchdata.length <= 0) &&
                <p>Loading.....</p>
                    }
    
                  {

                  fetchdata.map(item => {
                      return(
                        <ProductItemList key={item.id} id={item.id} image={item.image} name={item.title} category={item.category} price={item.price} description={item.description} />
                      )
                })

                  }
           
             
             <div className="pd-numbers">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
            </div>

                </div>
            </div>
        </Container>
        
        </div>
       
    )
}
export default ProductList;