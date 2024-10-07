import Link from 'next/link'
import React from 'react'

const BloodGlucoseTest = () => {
  return (
    <div>
      <>

        <header className="">
          <nav className="bg-white border-gray-200 py-2.5 ">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
              <div className="flex items-center lg:order-2">
                <div className="hidden mt-2 mr-4 sm:inline-block"></div>
                {/* <a href="#" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a> */}

                <button
                  data-collapse-toggle="mobile-menu-2"
                  type="button"
                  className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="mobile-menu-2"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    className="hidden w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
              >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {/* Start block */}
        <section className="bg-white">
          <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-blue-700">
                Blood Glucose Test
              </h1>



              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                {" "}
                A Blood Glucose Test measures the amount of glucose in your blood,
                helping diagnose conditions like diabetes. It is typically done after
                fasting or following meals to assess how your body manages sugar
                levels and maintains metabolic balance.This test can be performed
                using a small blood sample from a fingertip or through a venous draw.
                Abnormal results may indicate issues with insulin production or usage.
                Regular monitoring is essential for managing diabetes and preventing
                complications.{" "}

              </p>
              <Link
                href="pricing"
                className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600"
              >

                Book now

              </Link>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              ></button>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img
                src="https://media.istockphoto.com/id/1437090526/photo/doctor-taking-blood-samples-from-a-female-patient.jpg?s=612x612&w=0&k=20&c=gHeGhg5twt4cBMYCA24Xrxa3VhGyk7BFY3Ij7k0clBY="
                alt="hero image"
              />
            </div>
          </div>
        </section>
        {/* End block */}
        {/* Start block */}
        <section className="bg-white">
          <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
            <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
              <a href="#" className="flex items-center lg:justify-center"></a>
              <a href="#" className="flex items-center lg:justify-center"></a>
              <a href="#" className="flex items-center lg:justify-center"></a>
              <a href="#" className="flex items-center lg:justify-center"></a>
              <a href="#" className="flex items-center lg:justify-center"></a>
              <a href="#" className="flex items-center lg:justify-center"></a>
            </div>
          </div>
        </section>
        {/* End block */}
        {/* Start block */}
        <section className="bg-white-900">
          <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
            {/* Row */}
            <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
              <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
                  Foods that spike your blood sugar level
                </h2>
                <p className="mb-8 font-light lg:text-xl text-gray-500">
                  {" "}
                  Foods that spike blood sugar levels are high in refined
                  carbohydrates and sugars. Common examples include white bread,
                  sugary beverages, sweets, pastries, and processed snacks. These
                  cause a rapid rise in glucose due to quick digestion, leading to
                  potential insulin spikes. Regular consumption of such foods may
                  increase the risk of obesity, insulin resistance, and diabetes.
                  Choose fiber-rich, whole foods for better blood sugar control.
                  {/* List */}
                </p>
                <ul
                  role="list"
                  className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
                >
                  <li className="flex space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium leading-tight text-gray-900">
                      Avoid carbohydrates
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-red-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium leading-tight text-gray-900">
                      {" "}
                      Avoid sugars{" "}
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-red-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium leading-tight text-gray-900">
                      {" "}
                      Avoid palm oil cooked food{" "}
                    </span>
                  </li>
                </ul>
                <p className="mb-8 font-light lg:text-xl text-gray-500">
                  Sugar intake is a drug addiction. So, dont be a drug addict
                </p>
              </div>
              <img
                className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
                src="https://media.istockphoto.com/id/1487924336/photo/tape-measure-around-the-arms-of-women-stop-eating-trans-fats-spaghetti-donuts-waffles-and.jpg?s=612x612&w=0&k=20&c=GrX_6b6-CwJtAh45e1egoxk-6QhE0UUjiO9wW5cvbeg="
                alt="dashboard feature image"
              />
            </div>
            {/* Row */}
            <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
              <img
                className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
                src="https://images.pexels.com/photos/6942171/pexels-photo-6942171.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="feature image 2"
              />
              <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-5xl text-blue-700">
                  {" "}
                  DIABETES{" "}
                </h2>
                <p className="mb-8 font-light lg:text-xl text-gray-500">
                  {" "}
                  Diabetes is a chronic condition characterized by the body's
                  inability to produce sufficient insulin or effectively use the
                  insulin it produces, leading to elevated blood sugar (glucose)
                  levels. There are two primary types of diabetes: Type 1 and Type 2.
                  Type 1 diabetes is an autoimmune disorder where the immune system
                  attacks insulin-producing beta cells in the pancreas, often
                  occurring in childhood or adolescence, and requiring lifelong
                  insulin therapy. In contrast, Type 2 diabetes develops when the body
                  becomes resistant to insulin or fails to produce enough insulin,
                  commonly associated with risk factors such as obesity, a sedentary
                  lifestyle, unhealthy eating habits, genetics, and advancing age.
                  Additionally, gestational diabetes can occur during pregnancy when
                  hormonal changes lead to insulin resistance, often resolving after
                  childbirth but increasing the risk of Type 2 diabetes later on.
                  Symptoms of diabetes include frequent urination, excessive thirst
                  and hunger, fatigue, blurred vision, and slow-healing wounds.{" "}
                </p>
                {/* List */}
                <ul
                  role="list"
                  className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
                >
                  <li className="flex space-x-3">
                    {/* Icon */}
                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                      Normal blood sugar levels vary based on the timing of the test:{" "}
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium leading-tight text-gray-900">
                      {" "}
                      Fasting (after 8-12 hours of no food) : 70-99 mg/dL (3.9-5.5
                      mmol/L){" "}
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium leading-tight text-gray-900">
                      {" "}
                      Before meals : 70-130 mg/dL (3.9-7.2 mmol/L){" "}
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium leading-tight text-gray-900">
                      {" "}
                      Two hours after eating : Less than 140 mg/dL (7.8 mmol/L){" "}
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium leading-tight text-gray-900">
                      {" "}
                      Bedtime : 90-150 mg/dL (5-8.3 mmol/L){" "}
                    </span>
                  </li>
                </ul>
                <p className="font-light lg:text-xl text-gray-500">
                  {" "}
                  These ranges help in assessing healthy glucose management.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* End block */}
        {/* Start block */}
        {/* End block */}
        {/* Start block */}
        {/* End block */}
        {/* Start block */}
        <section className="bg-white">
          <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl">
              Frequently asked questions
            </h2>

            <div className="max-w-screen-md mx-auto">

              <button type="button" class="w-full hs-collapse-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" id="hs-basic-collapse" aria-expanded="false" aria-controls="hs-basic-collapse-heading" data-hs-collapse="#hs-basic-collapse-heading">
              What is the major cause of Diabetes ?
                <svg class="hs-collapse-open:rotate-180 shrink-0 size-4 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <div id="hs-basic-collapse-heading" class="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-collapse">
                <div class="mt-5">
                <p className="mb-2 text-gray-500 ">
                      {" "}
                      The major cause of diabetes, particularly type 2, is insulin
                      resistance, often linked to obesity, poor diet, and lack of
                      physical activity. Genetic factors also play a role. Type 1
                      diabetes, however, is caused by the immune system attacking
                      insulin-producing cells in the pancreas, leading to insufficient
                      insulin production.
                    </p>
                    <p className="text-gray-500 ">
                      {" "}
                      The main cause of type 2 diabetes is insulin resistance, often
                      due to obesity, poor diet, and inactivity, along with genetic
                      factors.{" "}
                      <a
                        href="#"
                        className="text-purple-600 dark:text-purple-500 hover:underline"
                      >
                        {" "}
                        Type 1 diabetes, however, is an autoimmune disorder where the
                        body attacks insulin-producing cells in the pancreas.{" "}
                      </a>{" "}
                      Both types can lead to serious complications if untreated.
                    </p>
                </div>
              </div>

              <button type="button" class="w-full hs-collapse-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" id="hs-basic-collapse" aria-expanded="false" aria-controls="hs-basic-collapse-heading" data-hs-collapse="#hs-basic-collapse-heading1">
              What is the major cause of Diabetes ?
                <svg class="hs-collapse-open:rotate-180 shrink-0 size-4 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <div id="hs-basic-collapse-heading1" class="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-collapse">
                <div class="mt-5">
                <p className="mb-2 text-gray-500 ">
                      {" "}
                      The major cause of diabetes, particularly type 2, is insulin
                      resistance, often linked to obesity, poor diet, and lack of
                      physical activity. Genetic factors also play a role. Type 1
                      diabetes, however, is caused by the immune system attacking
                      insulin-producing cells in the pancreas, leading to insufficient
                      insulin production.
                    </p>
                    <p className="text-gray-500 ">
                      {" "}
                      The main cause of type 2 diabetes is insulin resistance, often
                      due to obesity, poor diet, and inactivity, along with genetic
                      factors.{" "}
                      <a
                        href="#"
                        className="text-purple-600 dark:text-purple-500 hover:underline"
                      >
                        {" "}
                        Type 1 diabetes, however, is an autoimmune disorder where the
                        body attacks insulin-producing cells in the pancreas.{" "}
                      </a>{" "}
                      Both types can lead to serious complications if untreated.
                    </p>
                </div>
              </div>

              <div
                id="accordion-flush"
                data-accordion="collapse"
                data-active-classes="bg-white text-gray-900"
                data-inactive-classes="text-gray-500"
              >
                <h3 id="accordion-flush-heading-1">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-red-600 bg-white border-b border-gray-200  "
                    data-accordion-target="#accordion-flush-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-flush-body-1"
                  >
                    <span> What is the major cause of Diabetes ? </span>
                    <svg
                      data-accordion-icon=""
                      className="w-6 h-6 rotate-180 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </h3>
                <div
                  id="accordion-flush-body-1"
                  className=""
                  aria-labelledby="accordion-flush-heading-1"
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    
                  </div>
                </div>

                <h3 id="accordion-flush-heading-2">
                  <button
                    type="button"
                    className="hs-collapse-toggle flex items-center justify-between w-full py-5 font-medium text-left text-red-600 border-b border-gray-200 "
                    id="hs-basic-collapse"
                    data-hs-collapse="#hs-basic-collapse-heading"
                    data-accordion-target="#accordion-flush-body-2"
                    aria-expanded="false"
                    aria-controls="accordion-flush-body-2"

                    
                  >
                    <span>
                      In a year how many times an individual should undergo B.G.T ?
                    </span>
                    <svg
                      data-accordion-icon=""
                      className="w-6 h-6 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </h3>
                <div
                  id="hs-basic-collapse-heading"
                  className="hidden hs-collapse"
                  aria-labelledby="accordion-flush-heading-2"
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500">
                      The frequency of blood glucose testing depends on individual
                      health status: 1. Healthy Individuals : Once a year during
                      routine health checkups. 2. Prediabetics : Two to four times a
                      year to monitor risk. 3. Diabetics : Regularly, as advised by a
                      doctor, which can range from daily self-monitoring to quarterly
                      lab tests (HbA1c) to manage blood sugar levels. Always consult a
                      healthcare provider for personalized recommendations.{" "}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {" "}
                      Always follow{" "}
                      <a
                        href="#"
                        className="text-purple-600  hover:underline"
                      >
                        {" "}
                        your healthcare provider’s advice{" "}
                      </a>{" "}
                      for testing frequency based on personal health needsbased.{" "}
                    </p>
                  </div>
                </div>
                <h3 id="accordion-flush-heading-3">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-red-600 border-b border-gray-200 "
                    data-accordion-target="#accordion-flush-body-3"
                    aria-expanded="false"
                    aria-controls="accordion-flush-body-3"
                  >
                    <span>
                      {" "}
                      What is the diiference between prediabetic and diabetic ?{" "}
                    </span>
                    <svg
                      data-accordion-icon=""
                      className="w-6 h-6 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </h3>
                <div
                  id="accordion-flush-body-3"
                  className="hidden"
                  aria-labelledby="accordion-flush-heading-3"
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 ">
                      {" "}
                      Prediabetes occurs when blood sugar levels are higher than
                      normal, ranging from 100-125 mg/dL, but not yet high enough to
                      be classified as diabetes. It serves as a warning sign,
                      indicating an increased risk of developing type 2 diabetes, and
                      can often be reversed through lifestyle changes like diet and
                      exercise.{" "}
                    </p>
                    <p className="mb-2 text-gray-500">
                      {" "}
                      Diabetes, with blood sugar levels above 126 mg/dL, is a chronic
                      condition that requires ongoing management through medication,
                      monitoring, and lifestyle adjustments to prevent complications
                      such as heart disease, kidney failure, and nerve damage.{" "}
                    </p>
                  </div>
                </div>
                <h3 id="accordion-flush-heading-4">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-red-600 border-b border-gray-200 0"
                    data-accordion-target="#accordion-flush-body-4"
                    aria-expanded="false"
                    aria-controls="accordion-flush-body-4"
                  >
                    <span>What to do just after Kidney Function Test ?</span>
                    <svg
                      data-accordion-icon=""
                      className="w-6 h-6 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </h3>
                <div
                  id="accordion-flush-body-4"
                  className="hidden"
                  aria-labelledby="accordion-flush-heading-4"
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      {" "}
                      After a Blood Glucose Test (KFT), it's important to:
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Review Results : Discuss the test results with your healthcare
                      provider to understand your blood sugar levels and what they
                      mean for your health{" "}
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      {" "}
                      Follow Medical Advice : Based on the results, your doctor may
                      recommend lifestyle changes, medications, or further tests.{" "}
                    </p>
                    A
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      {" "}
                      Monitor Symptoms : If you have high or low blood sugar, pay
                      attention to any related symptoms like fatigue, dizziness, or
                      excessive thirst.{" "}
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      {" "}
                      Follow Your Doctor's Advice : If any special instructions were
                      given, such as resuming medications or dietary adjustments,
                      follow them closely{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </section>
        {/* End block */}
        {/* Start block */}
        <section className="bg-gray-50 dark:bg-gray-800">
          <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
            <div className="max-w-screen-sm mx-auto text-center">
              <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                Contact with us
              </h2>
              <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                Phone no - 6306248355
              </p>
              <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                Email - satyambajpai077@gmail.com
              </p>
            </div>
          </div>
        </section>
        {/* End block */}
      </>

    </div>
  )
}

export default BloodGlucoseTest
