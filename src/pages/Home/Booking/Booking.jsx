import React from 'react';
import { useForm } from 'react-hook-form';

const Booking = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className='mt-40 mb-32'>
            <form className='w-2/4 flex justify-evenly items-center bg-[#884A39] mx-auto p-2 md:p-5 lg:p-10 ' onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3  mb-2">
                    <label htmlFor="check-in" className='uppercase text-white'>check-in</label>
                    <input
                        className="w-full"
                        type="date"
                        placeholder='check-in'
                        {...register("check-in-date")} required />
                </div>

                <div className="flex flex-col gap-3  mb-2">
                    <label htmlFor="check-out" className='uppercase text-white'>check-out</label>
                    <input
                        className="w-full"
                        type="date"
                        placeholder='check-out'
                        {...register("check-out-date")} required />
                </div>

                <div className="flex flex-col gap-3  mb-2">
                    <label htmlFor="guests" className='uppercase text-white'>Guests</label>
                    <input
                        className="w-full"
                        type="number"
                        defaultValue={1}
                        minLength={1}
                        {...register("guests")} required />
                </div>

                <button type='submit' className='btn uppercase bg-[#a98467] text-white rounded-none border-none hover:text-black lg:mt-5'>Check Availability</button>

            </form>
        </div>
    );
};

export default Booking;