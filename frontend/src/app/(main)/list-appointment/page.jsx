'use client';
import axios from 'axios'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ListAppointment = () => {

    const [appointmentList, setAppointmentList] = useState([]);
    const fetchAppointmentData = async () => {
        const res = await axios.get('http://localhost:5500/appointment/getall');
        const data = res.data;
        console.table(data);
        setAppointmentList(data);
    }

    useEffect(() => {
        fetchAppointmentData();
    }, [])

    const deleteAppointment = (id) => {
        axios.delete('http://localhost:5500/appointment/delete/'+id)
        .then((result) => {
            toast.success('Appointment deleted');
            fetchAppointmentData();
        }).catch((err) => {
            console.log(err);
            toast.error('Error occured');
        });
    }

    const displayAppointments = () => {
        return <>
            {/* Card Blog */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Title */}
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
                        Booked Appointments
                    </h2>
                    <p className="mt-1 text-gray-700 dark:text-neutral-500">
                        See how regular checkups & test can change your life for better
                    </p>
                </div>
                {/* End Title */}
                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card */}
                    {
                        appointmentList.map(appointment => (
                            <Link
                                className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
                                href="#"
                            >
                                <div className="my-6">
                                    <h3 className="text-xl font-semibold text-gray-800 ">
                                        {appointment.services}
                                    </h3>
                                    <p className=" text-gray-600 dark:text-neutral-700">
                                        {appointment.referredby}
                                    </p>
                                    <p className="mt-5 text-gray-600 dark:text-neutral-400">
                                        {appointment.address}
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <p className='text-black-900'>{appointment.fullname}</p>
                                    <p className="text-gray-600 dark:text-neutral-400">
                                        {appointment.email}
                                    </p>
                                    <p className="text-gray-600 dark:text-neutral-400">
                                        {appointment.contact}
                                    </p>
                                    <button className='mt-5 bg-red-500 text-white p-3 rounded'
                                        onClick={() => deleteAppointment(appointment._id)}
                                    >Delete</button>
                                </div>
                            </Link>
                        ))
                    }

                </div>
            </div>
            {/* End Card Blog */}
        </>

    }

    return (
        <div>
            {displayAppointments()}
        </div>
    )
}

export default ListAppointment;