'use client'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const AddAppointment = () => {

  const router = useRouter();

  const addForm = useFormik({
    initialValues: {
      fullname: "",
      contact: "",
      email: "",
      age: "",
      address: "",
      dob: "",
      reason: "",
      services: "Blood Test",
      testdate: "",
      referredby: ""
    },
    onSubmit: async (values, action) => {
      console.log(values);
      const res = await fetch("http://localhost:5500/appointment/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json" },
      })
      console.log(res.status);
      action.resetForm()
      if (res.status === 200) {
        toast.success("Appointment added successfully")
        router.push('/list-appointment');
      }
      else {
        toast.error("Not booked")
      }
    }
  })

  return (
    <div>
      <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
          Book an Appointment
        </div>
        <form className="py-4 px-6" onSubmit={addForm.handleSubmit}>
          <div className='grid grid-cols-2 gap-5'>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullname"
              value={addForm.values.fullname}
              onChange={addForm.handleChange}
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={addForm.values.email}
              onChange={addForm.handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contact"
              type="tel"
              value={addForm.values.contact}
              onChange={addForm.handleChange}
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="time">
              Dob
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dob"
              type="date"
              value={addForm.values.dob}
              onChange={addForm.handleChange}
              placeholder="Select a time"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="time">
              Choose Service
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="services"
              value={addForm.values.services}
              onChange={addForm.handleChange}
              placeholder="Select a test"
            >
              <option value="Blood">Blood Test</option>
              <option value="Kidney Function">Kidney Function Test</option>
              <option value="Liver Function">Liver Function Test</option>
              <option value="Blood Glucose">Blood Glucose Test</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="time">
              Test Date & Time
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="testdate"
              type="datetime-local"
              value={addForm.values.testdate}
              onChange={addForm.handleChange}
              placeholder="Select a time"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="time">
              Referred by Doctor
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="referredby"
              type="text"
              value={addForm.values.referredby}
              onChange={addForm.handleChange}
              placeholder="Doctor Name"
            />
          </div>

          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
              Address
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              rows={4}
              value={addForm.values.address}
              onChange={addForm.handleChange}
              placeholder="Enter your address"
              defaultValue={""}
            />
          </div>
          <div className="flex items-center justify-center mb-4 col-span-2">
            <button
              className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Book Appointment
            </button>
          </div>
          </div>
        </form>
      </div>

    </div>
  )
}

export default AddAppointment
