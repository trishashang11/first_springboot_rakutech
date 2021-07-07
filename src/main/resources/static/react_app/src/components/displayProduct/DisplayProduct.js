import { useState} from 'react';
import Container from '../container/Container';
import './DisplayProduct.scss';
import Star from '../star/Star';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useSelector, useDispatch } from 'react-redux';
import { add } from '../../features/user/myCartSlice';

import gpro from '../../raw-images/mn3.png';
import Card from '../card/Card';
import CardList from '../card/CardList';
import TopNav from '../top-nav/TopNav';

import { items1 } from '../../data';

function DisplayProduct(props){
    const sproduct = useSelector((state) => state.myCart.singleProduct);
    const headSets = useSelector((state) => state.UIProducts.products.headsets)
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();
    
    const [imagesFuschia, setImagesFuschia] = useState(headSets[0].imgs);
    const [imagesRed, setImagesRed] = useState(headSets[1].imgs);
    const [imagesBlack, setImagesBlack] = useState(headSets[2].imgs);
    const [imagesWhite, setImagesWhite] = useState(headSets[3].imgs);
    const [imagesPeach, setImagesPeach] = useState(headSets[4].imgs);

    const [ selectedVariants, setSelectedVariants ] = useState(imagesBlack);
    const [ selectedImg, setSelectedImg ] = useState(imagesBlack[0]);
    const [ toCart, setToCart ] = useState(headSets[2].id);
    const [ productName, setproductName ] = useState(headSets[2].name);

    const [count, setCount] = useState(0);

    const addToCart = () => {
        if (!count==0){
            // const p = products.filter(product => product.id === toCart)
        dispatch(add(sproduct));
        }
        return;
        
    }

    const incrementBtn = () =>{
        setCount(count + 1);
    }
    const deccrementBtn = () =>{

        if(count>0){
            setCount(count - 1);
        }
        return;
    }

    const onSelectImg = (image) => {
        setSelectedImg(image);
    }
    const onSelectColor = (color) => {
        if(color === 'fuschia') {
            setSelectedVariants(imagesFuschia);
            setSelectedImg(imagesFuschia[0]);
            setToCart(headSets[0].id);
            setproductName(headSets[0].name);
        }
        if(color === 'red') {
            setSelectedVariants(imagesRed);
            setSelectedImg(imagesRed[0]);
            setToCart(headSets[1].id);
            setproductName(headSets[1].name);
        }
        if(color === 'black') {
            setSelectedVariants(imagesBlack);
            setSelectedImg(imagesBlack[0]);
            setToCart(headSets[2].id);
            setproductName(headSets[2].name);
        }
        if(color === 'white') {
            setSelectedVariants(imagesWhite);
            setSelectedImg(imagesWhite[0]);
            setToCart(headSets[3].id);
            setproductName(headSets[3].name);
        }
        if(color === 'peach') {
            setSelectedVariants(imagesPeach);
            setSelectedImg(imagesPeach[0]);
            setToCart(headSets[4].id);
            setproductName(headSets[4].name);
        }
        
    }

    return (
        
        <div>

            <TopNav/>

            <Container>
            
            <div className="pd-con">

            <div className="pd-sp">

            <div className="product-display">
                <div className="product-images">
                    <img src={sproduct.image ? sproduct.image : selectedImg} alt=""/>
                {
                    !sproduct.image &&
                    <div className="product-small-images">
                    {
                        selectedVariants.map((img, i) => {
                            return <img key={i} onClick={() => onSelectImg(img)} src={img} alt={"image"} />
                        })
                    }
                    </div>
               }
                </div>
                <div className="product-details">

                    <h3>{sproduct.title ? sproduct.title : productName}</h3>

                    <div className="rate-review">
                        <Star rate={4} />
                    <p>0 reviews</p>
                    <p>Submit a review</p>
                    </div>

                    <hr className="hr"/>

                    <div className="price">
                    <p>${sproduct.price ? sproduct.price : 499}</p>
                    <p>$599</p>
                    </div>

                    <div className="stock">
                    <p>Availability:</p> <p>In stock</p>
                    </div>

                     <div className="category">
                    <p>Category:</p> <p>{sproduct.category ? sproduct.category : 'Accessories' }</p>
                    </div>

                    <p className="free">Free Shipping</p>
                    
                    <hr className="hr"/>

                    <div className="color">
                    <p>Select Color:</p>

                                    <label onClick={() => onSelectColor('fuschia')} className="color-option" >
                                    <input name="color" type="radio" className="color-radio" />
                                    <span className="blue"></span>
                                  </label>
                                  
                                  <label onClick={() => onSelectColor('red')} className="color-option">
                                    <input name="color" type="radio" className="color-radio" />
                                    <span className="red"></span>
                                  </label>
                                  
                                  <label onClick={() => onSelectColor('black')} className="color-option" >
                                    <input name="color" type="radio" className="color-radio" />
                                    <span className="black"></span> 
                                  </label> 
 
                                  <label onClick={() => onSelectColor('white')} className="color-option" > 
                                    <input name="color" type="radio" className="color-radio" />
                                    <span className="white"></span> 
                                  </label> 
                                  <label onClick={() => onSelectColor('peach')} className="color-option"> 
                                    <input name="color" type="radio" className="color-radio" />
                                    <span className="peach"></span>
                                  </label>
                    </div>
                    <div className="size">
                    <p>Size</p>
                    <select name="" id="" className="sizing-select">
                                <option value="">XS</option>
                                <option value="">S</option>
                                <option value="">M</option>
                    </select>
                    </div>

                    <hr className="hr"/>

                    <div className="btn-option">
                    <div className="btn-counter">
                    <button onClick={deccrementBtn}><FontAwesomeIcon icon="minus"/></button>
                <input type="text" value={count} id="" readOnly/>
                <button onClick={incrementBtn}><FontAwesomeIcon icon="plus"/></button>
                    </div>
                    <div className="btn-add-heart">
                    <button onClick={addToCart}><FontAwesomeIcon icon='shopping-cart' />Add to Cart</button>
                    <button><FontAwesomeIcon icon={['far', 'heart']} /></button>
                    </div>
                    </div>

                    <hr className="hr"/>

                </div>
            </div>

            <div className="socialmedia">
                        <button className="socialmedia--facebook"><FontAwesomeIcon icon={['fab','facebook-f']} />Share on Facebook</button>
                        <button className="socialmedia--twitter"><FontAwesomeIcon icon={['fab','twitter']} />Share on Twitter</button>
                    </div>
    
                    <div className="productInformation">
                        <div className="productInformation-menu">
                            <a href="" className="product">Product Information</a>
                            <a href="" className="reviews">Reviews <span>0</span></a>
                            <a href="" className="anotherTab">Another tab</a>
                        </div>
                        <hr />
                        <p className="productInformation-p">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sit nesciunt sapiente ipsum laudantium in deleniti ipsam omnis, doloribus, hic veritatis magni temporibus quos, sed possimus fuga distinctio laboriosam maxime.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque unde tempore hic sed cupiditate, natus placeat fuga porro corrupti reprehenderit veniam praesentium pariatur impedit neque dicta sint. Sunt, qui asperiores!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dicta, consequuntur facilis adipisci unde omnis amet assumenda labore magni necessitatibus eum veniam libero maiores odit in quaerat? Quo, dicta molestias.
                            <br /><br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nesciunt in eaque! Harum possimus mollitia dolorem. Voluptatum asperiores quo accusamus natus? Dolore veritatis id accusamus dolorem deleniti odit consequuntur doloremque!
                        </p>
                        {/* <p className="productInformation-p--reviews">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sit nesciunt sapiente ipsum laudantium in deleniti ipsam omnis, doloribus, hic veritatis magni temporibus quos, sed possimus fuga distinctio laboriosam maxime.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque unde tempore hic sed cupiditate, natus placeat fuga porro corrupti reprehenderit veniam praesentium pariatur impedit neque dicta sint. Sunt, qui asperiores!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dicta, consequuntur facilis adipisci unde omnis amet assumenda labore magni necessitatibus eum veniam libero maiores odit in quaerat? Quo, dicta molestias.
                            <br /><br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nesciunt in eaque! Harum possimus mollitia dolorem. Voluptatum asperiores quo accusamus natus? Dolore veritatis id accusamus dolorem deleniti odit consequuntur doloremque!
                            Review
                        </p>
                        <p className="productInformation-p--another">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sit nesciunt sapiente ipsum laudantium in deleniti ipsam omnis, doloribus, hic veritatis magni temporibus quos, sed possimus fuga distinctio laboriosam maxime.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque unde tempore hic sed cupiditate, natus placeat fuga porro corrupti reprehenderit veniam praesentium pariatur impedit neque dicta sint. Sunt, qui asperiores!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dicta, consequuntur facilis adipisci unde omnis amet assumenda labore magni necessitatibus eum veniam libero maiores odit in quaerat? Quo, dicta molestias.
                            <br /><br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nesciunt in eaque! Harum possimus mollitia dolorem. Voluptatum asperiores quo accusamus natus? Dolore veritatis id accusamus dolorem deleniti odit consequuntur doloremque!
                            Another tab
                        </p> */}
                    </div>

            </div>

            
            <div className="pd-ad">

            <div className="items-right-bestSeller">
                        <h4 className="items-right-bestSeller-h4">BEST SELLER</h4>
                       <Card hasFirstHot={false} img={items1[2].img} rate={4} price={499} mprice={599} name={'Apple Macbook Pro'} />
                    </div>
                    <div className="items-right-slides">
                        <div className="items-right-slides-button"></div>
                        <div className="items-right-slides-button"></div>
                        <div className="items-right-slides-button"></div>
                        <div className="items-right-slides-button"></div>
                    </div>
                    <div className="items-right-ads">
                        <h2 className="items-right-ads--h2">GoPro Hero 6</h2>
                        <p className="items-right-ads--p">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className="items-right-ads--price">$299</p>
                        <figure>
                        <img src={gpro} alt=""/>
                        </figure>
                    </div>

            </div>

            </div>

            <div className="related-products">
            <h2 className="related-products-title">RELATED PRODUCTS</h2>

            <CardList items={items1} hasFirstHot={true}/>
            </div>

            
        </Container>

        </div>

       
    )
}

export default DisplayProduct;