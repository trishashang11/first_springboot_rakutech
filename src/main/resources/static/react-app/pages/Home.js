import MidNavigation from "../components/mid-navigation/MidNavigation";
import TopBanner from "../components/top-banner/TopBanner";
import CardList from '../components/card/CardList';
import MidBanner from "../components/mid-banner/MidBanner";
import OtherOptions from "../components/other-options/OtherOptions";
import LatestNews from "../components/latest-news/LatestNews";
import FeaturedProducts from "../components/featured-products/FeaturedProducts";
import HeaderFooter from "../pages/HeaderFooter";
import Newsletter from "../components/news-letter/Newsletter";

import '../components/card/Card.scss';

import  { useState } from 'react';

import { items1, items2 } from '../data';
import Container from "../components/container/Container";


const Home = () => {

    const [ isNewsLetterHidden, setIsNewsLetterHiden ] = useState(false);

    
    
    return (
        <div>
        {!isNewsLetterHidden && <Newsletter event={setIsNewsLetterHiden} />}
        <HeaderFooter>
        
            <TopBanner/>
            <MidNavigation/>
            <CardList items={items1} hasFirstHot={true}/>
            <CardList items={items2}/>
            <Container>
            <p className="load">LOAD MORE</p>
            </Container>
            <MidBanner/>
            <OtherOptions/>
            <LatestNews/>
            <FeaturedProducts/>
        
        </HeaderFooter>
        </div>

    )
}

export default Home;