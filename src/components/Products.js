/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from "react";

import { FaShoppingCart } from "react-icons/fa";

import p1 from "../img/broed.jpg";
import p2 from "../img/brunsviger.jpg";
import p3 from "../img/cookies.jpg";
import p4 from "../img/droemmekage.jpg";
import p5 from "../img/gaasebryst.jpg";
import p6 from "../img/jordbaertaerte.jpg";
import p7 from "../img/kajkage.jpg";
import p8 from "../img/romkugler.jpg";
import hat from "../img/chef_hat.png";

const style = css`
    background-color:black;
    .header{
        display:flex;
        justify-content:center;
        color:white;
        margin-bottom:2rem;
    }
    .header h1{
        font-size:2.5rem;
        margin-right:1rem;
    }
    .header img{
        margin-top:10px;
        width:75px;
        height:75px;
    }
    .products{
        display: grid;
        grid-template-columns:1fr 1fr;
    }
    .product{
        margin:1rem;
        color:white;
    }
    .product h2, sub{
        color:white;
        margin:0rem;
    }
    .productIMG{
        width:66%;
        height:10rem;
        border-radius:5px;
    }
    .productBTN{
        border:none;
        text-decoration:none;
        margin-left:10px;
        margin-top:10px;
        background-color:rgba(30, 139, 195, 1);
        border-radius:5px;
        height:1.5rem;
    }
    .productDLT{
        border:none;
        text-decoration:none;
        margin-left:10px;
        margin-top:10px;
        background-color:rgba(207, 0, 15, 1);
        border-radius:5px;
        height:1.5rem;
    }
    .productDLT:hover, .productBTN:hover{
        transition:0.5s;
        color:white;
        cursor:pointer;
    }
    .continue{
        text-decoration:none;
        position: relative;
        margin-top:2rem;
        padding-bottom:2rem;
    }
    .continue button{
        position:relative;
        left:14.5rem;
        border:none;
        border-radius:5px;
        height:3rem;
        background-color: rgba(207, 0, 15, 1);
        color: rgba(255, 255, 255, 0.8);
        font-weight:bold;
    }
    .continue button:hover{
        transition:0.5s;
        cursor:pointer;
        color: rgba(255, 255, 255, 1);
        box-shadow: 0 5px 15px rgba(207, 0, 15, .4);
    }
    .shopping{
        margin-top:3rem;
        margin-left:3rem;
        font-size:2rem;
    }   
    .items{
        margin-top:4rem;
        font-size:1rem;
    }

    /*--MEDIA QUERIES--*/
    @media screen and (max-width:800px){

        .header{
            display:block;
            padding:2rem 0;
        }
        .product{
            margin-top:3rem;
        }
        .products{
            display:block;
        }
        .productIMG{
            max-width:33%;
            max-height:100%;
        }
        .continue{
            display:block;
            right:14rem;
        }
    }
    @media screen and (max-width:350px){

        .productIMG{
            max-width:50%;
            max-height:100%;
        }
    }
`



function Products() {

    // Sætter varer-nummers oprindelige værdi
  const [count, setCount] = useState(0);

  // tilføjer varer til kurv
  const itemAdded = () => {
    setCount(prevCount => prevCount + 1);
  };

  // sletter varer fra kurv
  const itemDeleted = () => {
    setCount(prevCount => prevCount - 1);
  };

    return (
        <section css={style}>
            <div className="container">
            <div class="header">
                <h1>Benny's Bageri</h1>
                <img src={hat} alt="hej" />
                <FaShoppingCart class="shopping"/>
                <sub class="items">{count}</sub>
            </div>
        
            <article class="products">

                <div class="product">
                    <img src={p1} alt="hej" class="productIMG" />
                    <h2>Brød</h2>
                    <sub>19.95 kr.</sub>
                    <button class="productBTN" onClick={itemAdded}>Læg i kurv</button>
                    <button class="productDLT" onClick={itemDeleted}>Slet fra kurv</button>
                </div>

                <div class="product">
                    <img src={p2} alt="hej" class="productIMG" />
                    <h2>Brunsviger</h2>
                    <sub>23.95 kr.</sub>
                    <button class="productBTN" onClick={itemAdded}>Læg i kurv</button>
                    <button class="productDLT" onClick={itemDeleted}>Slet fra kurv</button>
                </div>

                <div class="product">
                    <img src={p3} alt="hej" class="productIMG" />
                    <h2>Cookies</h2>
                    <button class="productBTN" onClick={itemAdded}>Læg i kurv</button>
                    <button class="productDLT" onClick={itemDeleted}>Slet fra kurv</button>
                </div>

                <div class="product">
                    <img src={p4} alt="hej" class="productIMG" />
                    <h2>Drømmekage</h2>
                    <sub>35.95 kr.</sub>
                    <button class="productBTN" onClick={itemAdded}>Læg i kurv</button>
                    <button class="productDLT" onClick={itemDeleted}>Slet fra kurv</button>
                </div>

                <div class="product">
                    <img src={p5} alt="hej" class="productIMG" />
                    <h2>Gåsebryst</h2>
                    <sub>24.95 kr.</sub>
                    <button class="productBTN" onClick={itemAdded}>Læg i kurv</button>
                    <button class="productDLT" onClick={itemDeleted}>Slet fra kurv</button>
                </div>

                <div class="product">
                    <img src={p6} alt="hej" class="productIMG" />
                    <h2>Jordbærtærte</h2>
                    <sub>39.95 kr.</sub>
                    <button class="productBTN" onClick={itemAdded}>Læg i kurv</button>
                    <button class="productDLT" onClick={itemDeleted}>Slet fra kurv</button>
                </div>

                <div class="product">
                    <img src={p7} alt="hej" class="productIMG" />
                    <h2>Kajkage</h2>
                    <sub>19.95 kr.</sub>
                    <button class="productBTN" onClick={itemAdded}>Læg i kurv</button>
                    <button class="productDLT" onClick={itemDeleted}>Slet fra kurv</button>
                </div>

                <div class="product">
                    <img src={p8} alt="hej" class="productIMG" />
                    <h2>Romkugle</h2>
                    <sub>24.95 kr.</sub>
                    <button class="productBTN" onClick={itemAdded}>Læg i kurv</button>
                    <button class="productDLT" onClick={itemDeleted}>Slet fra kurv</button>
                </div>
                    

            </article>

            <div class="continue">
                <a href="/"><button>FORSÆT TIL KASSEN</button></a>
            </div>
            </div>
        </section>
    )
}




export default Products;