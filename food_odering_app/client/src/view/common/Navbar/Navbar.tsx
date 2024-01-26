import React, {Component} from 'react';

export class Navbar extends Component {
    render() {
        return (
            <div></div>
            // <>
            //     <ToastContainer autoClose={3000}/>
            //     <div className='flex items-center p-3 shadow-lg h-20 w-screen'>
            //         <img src={logo} className='w-14 h-14'/>
            //         <h1 className='font-bold text-sm underline ml-5'>Other</h1>
            //         {props?.restaurantsList ? <h1 className='text-sm ml-3'>{props?.restaurantsList[0]?.address_obj?.city}</h1>
            //             : <h1 className='text-sm ml-3'>Location</h1>}
            //         <img src={arrow} className='w-7 h-7'/>
            //         <div className='ml-56 flex items-center'>
            //             <Link to="/search" state={{data:props?.restaurantsList}}>
            //                 <div className='flex items-center cursor-pointer'>
            //                     <img src={lens} className='w-4 h-4 ml-96'/>
            //                     <h1 className='ml-3'>Search</h1>
            //                 </div>
            //             </Link>
            //             <img src={profile} className='w-7 h-7 ml-16'/>
            //             <div className='flex items-center cursor-pointer' onClick={()=> setLoginModal(true)}>
            //                 <h1 className='ml-3'>Sign In</h1>
            //                 <div onClick={logout} className='flex items-center cursor-pointer'>
            //                     <img src={out} className='w-5 h-5 ml-16'/>
            //                     <h1 className='ml-3'>Logout</h1>
            //                 </div>
            //             </div>
            //         </div>
            //         {loginModal && <Login setLoginModal={setLoginModal}/>}
            //     </div>
            // </>
        );
    }
}
