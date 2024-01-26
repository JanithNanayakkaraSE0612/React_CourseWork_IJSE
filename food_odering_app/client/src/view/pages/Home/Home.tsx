import React, {Component} from "react";
import {Navbar} from "../../common/Navbar/Navbar";
import {Footer} from "../../common/Footer/Footer";

export class Home extends Component{

    render() {
        return (
            <>
                {/*<ToastContainer autoClose={3000}/>*/}
                <div>
                    {/*<Navbar restaurantsList={restarantsList}/>*/}
                    <div className='ml-44 w-8/12'>
                        <h1 className='mt-7 font-bold text-2xl'>Best offers for you</h1>
                        {/*<Offers/>*/}
                        <h1 className='mt-7 font-bold text-2xl'>What's on your mind?</h1>
                        {/*<Menu setMenu={setMenu}/>*/}
                        {/*<h1 className='mt-7 font-bold text-2xl'>Top restaurant chains in {restarantsList ? restarantsList[0]?.address_obj?.city : "Location"}</h1>*/}
                        {/*<TopRated restaurantsList={restarantsList}/>*/}
                    </div>
                    <div className='ml-44'>
                        {/*<h1 className='mt-7 font-bold text-2xl'>Restaurants with online food delivery in {restarantsList ? restarantsList[0]?.address_obj?.city : "Location"}</h1>*/}
                        {/*<Restaurants menu={menu} restaurantsList={restarantsList}/>*/}
                    </div>
                    <Footer/>
                </div>
            </>
        );
    }
}
