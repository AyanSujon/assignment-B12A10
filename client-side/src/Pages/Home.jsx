import React from 'react';
import HeroSlider from '../Components/Home/HeroSlider';
import EcoStatusCards from "../components/Home/EcoStatusCards";
import useChallenges from '../Hooks/useChallenges';
import Loading from './Loading';
import Error404 from './Error404';

const Home = () => {


        const { challenges, loading, error }  =useChallenges();
        if(loading){
        return <Loading/>;
       }
        if(error){
        return <Error404/>
       }
       const featuredchallenges = challenges.slice(0, 8);
       console.log(featuredchallenges)
    return (
        <div>
            <HeroSlider/>
            <EcoStatusCards/>
        </div>
    );
};

export default Home;


