import React, { useEffect, useState } from 'react';
import Coin from "./Product";
import axios from "axios";
import Loader from './Loader';

const Home = () => {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {

    const fetchAllCoins = async() => {
      try {
        const {data} = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr");
        setCoins(data);
        setLoading(false)
      } catch (error) {
        alert("Not Working");
        
      }
    };

      fetchAllCoins();
  }, []);

  return (
    <div className='home'>
      {
        loading ?<Loader />: coins.map((i) => (
        <Coin
         name={i.name}
         symbol={i.symbol}
         key={i.id}
         imgSrc={i.image}
         price={i.current_price}
        />
      ))
      }
    </div>
  )
}

export default Home;