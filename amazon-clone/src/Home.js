import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image" 
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />

                <div className="home__row">
                    <Product 
                    id= "1"
                    title="Corsair Gaming MM200 Extended Edition Cloth Gaming Mouse Mat (CH-9000086-WW) "
                    price={39.99}
                    image= "https://images-na.ssl-images-amazon.com/images/I/51TybKuNU9L._AC_SL1000_.jpg"
                    rating={5}
                    />
                    <Product 
                    id= "2"
                    title="USB WiFi Adapter 600Mbps, Techkey Wireless Network Adapter Dual Band 2.42GHz/5.8GHz WiFi Card 802.11ac WiFi for PC Desktop Laptop Support Windows 10/8.1/8 / 7 / XP/ Vista / Mac OS  "
                    price={16.99}
                    image= "https://images-na.ssl-images-amazon.com/images/I/61fnIf0hZ0L._AC_SX425_.jpg"
                    rating={2}
                    />
                    
                </div>

                <div className="home__row">
                    <Product 
                    id="3"
                    title="2 Pack - SimpleHouseware Stackable Front Loading Beverage Can Dispenser Rack"
                    price={21.87}
                    image= "https://images-na.ssl-images-amazon.com/images/I/910aJrHZtRL._AC_SX425_.jpg"
                    rating={3}
                    />
                    <Product 
                    id="4"
                    title="Airtight Food Storage Container 6 Pieces, Cereal Containers with Lids，BPA Free Plastic Food Storage Containers for Keep Food Fresh, Dry and Organized "
                    price={46.99}
                    image= "https://images-na.ssl-images-amazon.com/images/I/81M%2BxRV01NL._AC_SL1500_.jpg"
                    rating={4}
                    />
                    <Product 
                    id="5"
                    title=" Gorilla 6065016 6065001-2 Double-Sided Tough and Clear Mounting Tape (2 Pack), 1 x 60, Clear "
                    price={22.84}
                    image= "https://images-na.ssl-images-amazon.com/images/I/81FjacRvlOL._AC_SX425_.jpg"
                    rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product 
                    id="6"
                    title="KYVOL Cybovac S31 Robot Vacuum Cleaner and Mop, Automatic Dirt Disposal, Lidar Navigation & Smart Mapping Upgrade, Wi-Fi/APP/Alexa, 3000Pa Suction, 240Min Runtime & Self Charging, Quiet & Slim, Ideal for Hard Floor, Carpet & Pet Hair  "
                    price={699.99}
                    image= "https://images-na.ssl-images-amazon.com/images/I/61GUwm0NmJL._AC_SX425_.jpg"
                    rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
