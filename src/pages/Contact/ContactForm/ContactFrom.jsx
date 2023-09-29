import React from 'react';
import { useForm } from 'react-hook-form';

const ContactFrom = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className=''>
            <div className='flex flex-col md:flex-row lg:w-3/4 mx-auto gap-5'>
                <div className='lg:w-1/2 lg:mt-20'>
                    <p className='uppercase text-neutral-600 font-semibold text-sm'>contact us</p>
                    <h3 className='text-neutral-600 text-6xl my-10'>
                        Get in the Touch
                    </h3>
                    <p className='text-neutral-600 text-lg '>
                        Welcome to our website, your gateway to a world of exceptional travel experiences. Whether you're planning a romantic getaway, a family vacation, or a business trip, we are your trusted partner in finding the perfect accommodations.
                    </p>
                    <button type="submit" className="btn bg-[#a98467] w-1/2 p-1 rounded-md text-white flex justify-evenly items-center lg:mt-8">See rooms</button>
                </div>

                <div className='lg:w-1/2 lg:mt-20'>
                    <form className='w-full mx-auto p-2 md:p-5 lg:p-10 ' onSubmit={handleSubmit(onSubmit)}>

                        <div className="flex flex-col gap-3  mb-2">
                            <input
                                className="w-full rounded-md"
                                type="text"
                                placeholder='Name'
                                {...register("username")} required />
                        </div>

                        <div className="flex flex-col gap-3  my-6">
                            <input
                                className="w-full rounded-md"
                                type="email"
                                placeholder='Email'
                                {...register("email")} required />
                        </div>

                        <div className="flex flex-col gap-3 mb-2">
                            <textarea
                                className="w-full rounded-md"
                                type="text"
                                placeholder='Message'
                                {...register("message")} required />
                        </div>
                        <div className="flex justify-center my-10">
                            <button type="submit" className="btn bg-[#a98467] w-full p-1 rounded-md text-white flex justify-evenly items-center">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactFrom;