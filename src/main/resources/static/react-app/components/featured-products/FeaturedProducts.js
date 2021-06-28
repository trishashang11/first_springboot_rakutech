import Container from '../container/Container';
import './FeaturedProducts.scss';
import fp1 from '../../raw-images/fp1.jpg';
import fp2 from '../../raw-images/fp2.png';
import fp3 from '../../raw-images/fp3.png';
import Star from '../star/Star';

const FeaturedProducts = (props) =>{
    return(

        <Container>

        <div className="featuredproducts">

        <h2>FEATURED PRODUCTS</h2>

        <div className="featured-container">

            <div className="box">
                <img src={fp1}alt="image" />
                <div class="box-content">
                    <h5>Beats Solo 2 On Ear Headphones-Black</h5>
                    <Star rate={2}/>
                     <div className="price">
                                <p className="price1">$499</p>
                                <p className="price2">$599</p>
                            </div>
                </div>
            </div>

            <div className="box">
            <img src={fp2}alt="image" />
                <div class="box-content">
                    <h5>H-Squared tvTray</h5>
                    <Star rate={3}/>
                     <div className="price">
                                <p className="price1">$499</p>
                                <p className="price2">$599</p>
                            </div>
                </div>
            </div>

            <div className="box">
            <img src={fp3}alt="image" />
                <div class="box-content">
                    <h5>Netatmo Rain Gauge</h5>
                    <Star rate={4}/>

                     <div className="price">
                                <p className="price1">$499</p>
                                <p className="price2">$599</p>
                            </div>
                </div>
            </div>
        </div>

        <div className="search">
        <input type="text" placeholder="Search query" className="input-search" />
            <button className="search-btn">Search</button>
        </div>

    </div>

    </Container>

    )
}
export default FeaturedProducts;