import React, { Component } from "react";
// import React, { Component, useEffect, useState } from "react";
import Api from "../../network/model";
import Navbar from "../layout/navbar";
import { Link } from "react-router-dom";
class ShopPage extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
        Api.get('products').then(res => {
            console.log(res.data);
            this.setState({ products: res.data })
        })

    }

    render() {
        return (<>
            <Navbar />
            {




                <div className="d-flex justify-content-between mt-4">


                    <aside>
                        <div>
                            <h5> Climate Pledge Friendly</h5>
                            <input type="checkbox" className="input-check" /> <a className="links-aside" href=" # ">Climate Pledge Friendly</a>
                        </div><br />

                        <h5>Department</h5>
                        <div>
                            <h6 className="bold">Computer Accessories & Peripherals</h6>
                            <ul>
                                <li> <a className="links-aside" href=" # ">Audio & Video Accessories</a> </li>
                                <li> <a className="links-aside" href=" # ">Blank Media</a> </li>
                                <li> <a className="links-aside" href=" # ">Cable Security Devices</a> </li>
                                <li> <a className="links-aside" href=" # ">Cables & Accessories</a> </li>
                                <li> <a className="links-aside" href=" # ">Cleaning & Repair</a> </li>
                                <li> <a className="links-aside" href=" # ">Computer Cable Adapters</a> </li>
                                <li> <a className="links-aside" href=" # ">Game Hardware</a> </li>
                                <li> <a className="links-aside" href=" # ">Hard Drive Accessories</a> </li>
                                <li> <a className="links-aside" href=" # ">Input Devices</a> </li>

                            </ul>
                        </div><br />

                        <div>
                            <h5>Avg. Customer Review</h5>
                            <div>
                                <img className="image-star" src="https://images.onlinelabels.com/images/clip-art/jean_victor_balin/jean_victor_balin_icon_star.png" />
                                <img className="image-star" src="https://images.onlinelabels.com/images/clip-art/jean_victor_balin/jean_victor_balin_icon_star.png" />
                                <img className="image-star" src="https://images.onlinelabels.com/images/clip-art/jean_victor_balin/jean_victor_balin_icon_star.png" />
                                <img className="image-star" src="https://images.onlinelabels.com/images/clip-art/jean_victor_balin/jean_victor_balin_icon_star.png" />
                                <img className="image-star" src="https://images.onlinelabels.com/images/clip-art/jean_victor_balin/jean_victor_balin_icon_star.png" />
                                <a className="links-aside" href=" # " > & Up </a>
                            </div>
                            <div>
                                <img className="image-star" src="https://images.onlinelabels.com/images/clip-art/jean_victor_balin/jean_victor_balin_icon_star.png" />
                                <img className="image-star" src="https://images.onlinelabels.com/images/clip-art/jean_victor_balin/jean_victor_balin_icon_star.png" />
                                <img className="image-star" src="https://images.onlinelabels.com/images/clip-art/jean_victor_balin/jean_victor_balin_icon_star.png" />
                                <img className="image-star" src="https://images.onlinelabels.com/images/clip-art/jean_victor_balin/jean_victor_balin_icon_star.png" />
                                <img className="image-star" src="https://images.onlinelabels.com/images/clip-art/jean_victor_balin/jean_victor_balin_icon_star.png" />
                                <a className="links-aside" href=" # " > & Up </a>
                            </div>
                            <div>
                                <img className="image-star" src="https://images.onlinelabels.com/images/clip-art/jean_victor_balin/jean_victor_balin_icon_star.png" />
                                <img className="image-star" src="https://images.onlinelabels.com/images/clip-art/jean_victor_balin/jean_victor_balin_icon_star.png" />
                                <img className="image-star" src="https://images.onlinelabels.com/images/clip-art/jean_victor_balin/jean_victor_balin_icon_star.png" />
                                <a className="links-aside" href=" # " > & Up</a>
                            </div>
                            <div>
                                <img className="image-star" src="https://images.onlinelabels.com/images/clip-art/jean_victor_balin/jean_victor_balin_icon_star.png" />
                                <img className="image-star" src="https://images.onlinelabels.com/images/clip-art/jean_victor_balin/jean_victor_balin_icon_star.png" />

                                <a className="links-aside" href=" # " > & Up</a>

                            </div>

                        </div><br />
                        <div>
                            <h5> Price</h5>
                            <p><a className="links-aside" href=" # ">Under $25</a></p>
                            <p><a className="links-aside" href=" # "> $25 to $50</a></p>
                            <p><a className="links-aside" href=" # ">$50 to $100 </a></p>
                            <p><a className="links-aside" href=" # ">  $100 to $200  </a></p>
                            <p><a className="links-aside" href=" # "> $200 & Above  </a></p>
                        </div><br />

                        <div className="d-flex">
                            <form>
                                <div className="d-flex">
                                    <input className="input-text " type='text' placeholder="$ Min" />
                                    <input className="input-text " type='text' placeholder="$ max" />
                                    <button type="submit" className="button-go"> Go</button>
                                </div>
                            </form>
                        </div><br />

                        <div>
                            <h5>Colors</h5>
                            <div className="d-flex">
                                <div className="div-color1"></div>
                                <div className="div-color2"></div>
                                <div className="div-color3"></div>
                            </div>
                        </div><br />


                        <div className="">
                            <h5>Seller</h5>
                            <input type="checkbox" className="input-check" /> <a className="links-aside" href=" #">Amazon.eg</a><br />
                            <input type="checkbox" className="input-check" /> <a className="links-aside" href=" #">White house eg</a><br />
                            <input type="checkbox" className="input-check" /> <a className="links-aside" href=" #">Brother Team</a><br />
                            <input type="checkbox" className="input-check" /> <a className="links-aside" href=" #">Jawel.Shop</a><br />
                            <input type="checkbox" className="input-check" /> <a className="links-aside" href=" #">Elsheikh_store</a><br />
                            <input type="checkbox" className="input-check" /> <a className="links-aside" href=" #">P.N.P</a><br />
                            <input type="checkbox" className="input-check" /> <a className="links-aside" href=" #">B-Watches</a><br />
                            <input type="checkbox" className="input-check" /> <a className="links-aside" href=" #">Asfour Crystal</a><br />
                            <input type="checkbox" className="input-check" /> <a className="links-aside" href=" #">A/F jewellery store</a><br />
                            <input type="checkbox" className="input-check" /> <a className="links-aside" href=" #">Amman.Shop</a><br />
                        </div><br />
                        <h5>Availability</h5>
                        <input type="checkbox" className="input-check" /><a className="links-aside" href=" # " > Include Out of Stock</a>
                    </aside>


                    <section>
                        <div className="d-flex  justify-content-between" >
                            {
                                this.state.products.map((product) => {
                                    if (product.id < 5) {
                                        return (<>
                                            <Link className="contentProduct" to={'/shop/product' + product.id} >

                                                <div className="div-image-products d-flex align-items-center justify-content-center "><img className="image-products" src={product.image} /></div>

                                                <div className="div-p" >
                                                    <p className="P_title " >{product.title}</p>
                                                    <p>{product.price}$ </p>
                                                </div>

                                            </Link>
                                        </>)
                                    }
                                })
                            }
                        </div>
                        <br />

                        <div className="d-flex   justify-content-between" >
                            {
                                this.state.products.map((product) => {
                                    if (product.id > 4 && product.id < 9) {
                                        return (<>
                                            <Link className="contentProduct" to={'/shop/product' + product.id} >

                                                <div className="div-image-products d-flex align-items-center justify-content-center "><img className="image-products" src={product.image} /></div>

                                                <div className="div-p" >
                                                    <p className="P_title " >{product.title}</p>
                                                    <p>{product.price}$ </p>
                                                </div>

                                            </Link>
                                        </>)
                                    }
                                })
                            }
                        </div>
                        <br />

                        <div className="d-flex justify-content-between" >
                            {
                                this.state.products.map((product) => {
                                    if (product.id > 8 && product.id < 13) {
                                        return (<>
                                            <Link className="contentProduct " to={'/shop/product' + product.id} >

                                                <div className="div-image-products d-flex align-items-center justify-content-center "><img className="image-products" src={product.image} /></div>

                                                <div className="div-p" >
                                                    <p className="P_title " >{product.title}</p>
                                                    <p>{product.price}$ </p>
                                                </div>

                                            </Link>
                                        </>)
                                    }
                                })
                            }
                        </div>
                        <br />

                        <div className="d-flex justify-content-between" >
                            {
                                this.state.products.map((product) => {
                                    if (product.id > 12 && product.id < 17) {
                                        return (<>
                                            <Link className="contentProduct " to={'/shop/product' + product.id} >

                                                <div className="div-image-products d-flex align-items-center justify-content-center "><img className="image-products" src={product.image} /></div>

                                                <div className="div-p" >
                                                    <p className="P_title " >{product.title}</p>
                                                    <p>{product.price}$ </p>
                                                </div>

                                            </Link>
                                        </>)
                                    }
                                })
                            }
                        </div>
                        <br />

                        <div className="d-flex justify-content-between" >
                            {
                                this.state.products.map((product) => {
                                    if (product.id > 16 && product.id < 21) {
                                        return (<>
                                            <Link className="contentProduct " to={'/shop/product' + product.id} >

                                                <div className="div-image-products d-flex align-items-center justify-content-center "><img className="image-products" src={product.image} /></div>

                                                <div className="div-p" >
                                                    <p className="P_title " >{product.title}</p>
                                                    <p>{product.price}$ </p>
                                                </div>

                                            </Link>
                                        </>)
                                    }
                                })
                            }
                        </div>
                        <br />

                    </section>
                </div >
            }
        </>)
    }
}
export default ShopPage
/*
this.state.products.map((product) => { return (<><h3>{product.id}</h3> </>) })}


           // <h3>{this.state.products.title}</h3>

                this.state.products.map((product)=>{return (<>
                    <Link to={'/shop/product' + product.id }><h3>{product.title}</h3> </Link>
                    <Link ><p>{product.description}<br /></p></Link> </>)})

*/


/*
   <div className="d-flex justify-content-between mt-4">

    <section>
                <div className="d-flex" >
                    {
                        this.state.products.map((product) => {
                            return (<>
                                <div className="contentProduct">

                                    <div><p>{product.description}</p> </div>

                                </div>
                            </>)
                        })
                    }
        </div>
    </section>


    <aside>  </aside>
 </div>
*/









// export default function ShopPage() {

//     const [product, setproduct] = useState({});

//     useEffect(() => {
//         Api.get('products').then(res => {
//             console.log(res.data.data) ;
//             setproduct( res.data.data)
//  }).catch((error)=>{console.log(error)})

//     }, []);

//     return (<>

//         <h2>ShopPage</h2>
//         {
//             product.map((prod) => { return (<> <h1>{prod.title}</h1> </>)  } )
//         }

//     </>);
// }
