
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../layout/navbar";
import Api from "../../network/model";
export default function ProductPage() {

    const parm = useParams();
    const id = parm.id;
    const [product, setproduct] = useState({});

    useEffect(() => {
        Api.get('products/' + id).then((res) => {
            console.log(res.data)
            setproduct(res.data)
        })
    }, []);

    return (<>
        <Navbar />

        <section1 className="d-flex justify-content-evenly mt-5 ">

            <div className="div-image  d-flex justify-content-center   align-items-center"><img src={product.image} />  </div>

            <div className="div-center mt-5">

                <div className="div-title"><h3>{product.title}</h3></div>
                <div className="div-price">  <h5>{product.price}$</h5> </div>
                <div className="div-description">    <p>{product.description}</p></div>


            </div>

            <aside className="aside-pageproduct ">
                <div className="div-price2">  <h5>{product.price}$</h5> </div>
                <div className="div-title2"><h6>{product.title}</h6></div>


                <h4 >In Stock.</h4>
                <label for="dd"> Qty: </label>
                <select id="dd" >
                    <option> 1</option>
                    <option> 2</option>
                    <option> 3</option>
                    <option> 4</option>
                    <option> 5</option>
                    <option> 6</option>
                    <option> 7</option>
                    <option> 8</option>
                    <option> 9</option>
                    <option> 10</option>
                    <option> 11</option>

                </select>

                <div className=" ddd">
                    Add to Cart
                </div>
                <div className="bbb">
                    Buy Now
                </div>

            </aside>
        </section1>

    </>);
}







/*

 <h1> {id}</h1>
        <h1>{product.title }</h1>
        <h1>{product.price}</h1>
        <p>{product.description}</p>
        <img src={product.image} /> 


*/










/*

import React, { Component } from "react";
import { useParams } from "react-router-dom";
import Api from "../../network/model";
import Navbar from "../layout/navbar";

export default class ProductPage extends Component {
  
    constructor() {
        super();
        this.state = {
            products: []
        }
        Api.get('products').then(res => {
            console.log(res.data);
            this.setState({ products: res.data })
        })
        const parm = useParams();
        const id = parm.id;
    }
    render() {
        return (<>
            <Navbar />
            <h4>Hello product {id}</h4>
        </>)
    }
}
*/
