import React, {Component} from 'react';

export class Footer extends Component {
    render() {
        return (
            <div className='bg-black w-screen h-52 mt-5 flex flex-col justify-center items-center'>
                <h1 className='font-extrabold text-2xl text-white'>Swiggy</h1>
                <h1 className='text-white'>© 2023 Bundl Technologies Pvt. Ltd</h1>
            </div>
        );
    }
}
