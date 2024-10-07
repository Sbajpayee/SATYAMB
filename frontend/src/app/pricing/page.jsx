import React from 'react'

const Pricing = () => {
  return (
    <div>


      {/* Pricing */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            PRICING
          </h2>
          <p className="mt-1 text-gray-500 text-2xl">
            Whatever your status, our offers evolve according to your needs.
          </p>
        </div>
        {/* End Title */}
        {/* Switch */}
        <div className="flex justify-center items-center">


        </div>
        {/* End Switch */}
        {/* Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center">
          {/* Card */}
          <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-neutral-800">
            <span className="mt-7 font-bold text-3xl text-gray-600">
              Blood Sample Test
            </span>
            <p className="mt-2 text-2xl text-red-500">
              Rs. 200
            </p>
            <ul className="mt-7 space-y-2.5 text-sm">
              <li className="flex gap-x-2">
                <svg
                  className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-500">Patient Comfort and Safety</span>
              </li>
              <li className="flex gap-x-2">
                <svg
                  className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-500">
                  Accuracy of Results
                </span>
              </li>
              <li className="flex gap-x-2">
                <svg
                  className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-500">
                  Timely Processing
                </span>
              </li>
            </ul>
            <a
              className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              Book Now
            </a>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="flex flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-blue-700">
            <p className="mb-3">

            </p>
            <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">

            </h4>
            <span className="mt-5 font-bold text-3xl text-gray-600">
              <span className="font-bold text-3xl -me-2"></span>
              Blood Glucose Test
            </span>
            <p className="mt-2 text-2xl text-red-500">
              Rs. 400
            </p>

            <ul className="mt-7 space-y-2.5 text-sm">
              <li className="flex gap-x-2">
                <svg
                  className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-500">Patient Comfort and Safety</span>
              </li>
              <li className="flex gap-x-2">
                <svg
                  className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-500">
                  Accuracy of Results
                </span>
              </li>
              <li className="flex gap-x-2">
                <svg
                  className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-500">
                  Timely Processing
                </span>
              </li>
            </ul>
            <a
              className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              Book Now
            </a>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="flex flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-blue-700">
            <p className="mb-3">

            </p>
            <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">

            </h4>
            <span className="mt-5 font-bold text-3xl text-gray-600">
              <span className="font-bold text-3xl -me-2"></span>
              Blood Glucose Test
            </span>
            <p className="mt-2 text-2xl text-red-500">
              Rs. 400
            </p>

            <ul className="mt-7 space-y-2.5 text-sm">
              <li className="flex gap-x-2">
                <svg
                  className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-500">Patient Comfort and Safety</span>
              </li>
              <li className="flex gap-x-2">
                <svg
                  className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-500">
                  Accuracy of Results
                </span>
              </li>
              <li className="flex gap-x-2">
                <svg
                  className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-500">
                  Timely Processing
                </span>
              </li>
            </ul>
            <a
              className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              Book Now
            </a>
          </div>
          {/* End Card */}
          {/* Card */}

          <div className="flex flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-blue-700">
            <p className="mb-3">

            </p>
            <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">

            </h4>
            <span className="mt-5 font-bold text-3xl text-gray-600">
              <span className="font-bold text-3xl -me-2"></span>
              Liver Function Test
            </span>
            <p className="mt-2 text-2xl text-red-500">
              Rs. 800
            </p>

            <ul className="mt-7 space-y-2.5 text-sm">
              <li className="flex gap-x-2">
                <svg
                  className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-500">Patient Comfort and Safety</span>
              </li>
              <li className="flex gap-x-2">
                <svg
                  className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-500">
                  Accuracy of Results
                </span>
              </li>
              <li className="flex gap-x-2">
                <svg
                  className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-500">
                  Timely Processing
                </span>
              </li>
            </ul>
            <a
              className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              Book Now
            </a>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Pricing;