import Link from 'next/link'
import React from 'react'

const BloodTest = () => {
  return (
    <div className='mx-auto'>
  
  <section className="py-10 md:py-16">
    <div className="container max-w-screen-xl px-4">
      <nav className="flex items-center justify-center mb-40 w-full">
        <div className="text-center">
          <div className="flex justify-center mb-16 w-full">
            
      
              <img
              src="https://images.pexels.com/photos/3786132/pexels-photo-3786132.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Image" align="right"
               width="300"/>
            
          </div>
          <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
            Dr Venkatesh Naidu
          </h6>
          <h1
            className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8"
            style={{ textAlign: "center" }}
          >
            Blood Test
          </h1>
          <p className="font-normal text-gray-600  md:text-xl mb-16">
            A doctor passionate about his work finds fulfillment in healing and
            uplifting others.
          </p>
          <Link
            href="pricing"
            className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
          >
            BOOK NOW
          </Link>
        </div>
      </nav>
    </div>
  </section>
  <section className="py-10 md:py-16">
    <div className="container max-w-screen-xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-50 px-8 py-10 rounded-md">
          <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
            <i data-feather="activity" />
          </div>
          <h4 className="font-medium text-gray-700 text-lg mb-4">
            High experience
          </h4>
          <p className="font-normal text-gray-500 text-md">
            {" "}
            <br /> Dr. Venkatesh Naidu is highly experienced in pathological
            testing, specializing in a wide range of diagnostic procedures. His
            expertise in blood tests ensures accurate and reliable results. With
            years of hands-on experience, he is a trusted professional in his
            field.{" "}
          </p>
        </div>
        <div className="bg-gray-50 px-8 py-10 rounded-md">
          <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
            <i data-feather="codesandbox"/>
          </div>
          <h4 className="font-medium text-gray-700 text-lg mb-4">
            Instructions
          </h4>
          <p className="font-normal text-gray-500 text-md">
            Before a blood test, fast for 8-12 hours if required, and stay
            hydrated to ease the process. Avoid alcohol, smoking, and strenuous
            exercise, as they can affect results. Consult your doctor about any
            medications that may need to be paused before the test.
          </p>
        </div>
        <div className="bg-gray-50 px-8 py-10 rounded-md">
          <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
            <i data-feather="coffee"/>
          </div>
          <h4 className="font-medium text-gray-700 text-lg mb-4">
            Side projects
          </h4>
          <p className="font-normal text-gray-500 text-md">
            Dr. Venkatesh Naidu is leading an innovative project to improve
            blood testing accuracy and early disease detection. His work focuses
            on developing advanced diagnostic techniques. With his expertise,
            the project is set to make a significant impact in healthcare.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="py-10 md:py-16">
    <div className="container max-w-screen-xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="mb-10 lg:mb-0">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            Equiments
          </h1>
          <p className="font-normal text-gray-500 text-xs md:text-base">
            Required Equiments and tools for Blood Test
          </p>
        </div>
        <div className="space-y-24">
          <div className="flex space-x-6">
            <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
              01
            </h1>
            <span className="w-28 h-0.5 bg-gray-300 mt-5" />
            <div>
              <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                Vacutainer System
              </h1>
              <p className="font-normal text-gray-500 text-sm md:text-base">
                A collection device that includes tubes and needles for drawing
                blood.
              </p>
            </div>
          </div>
          <div className="flex space-x-6">
            <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
              02
            </h1>
            <span className="w-28 h-0.5 bg-gray-300 mt-5" />
            <div>
              <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                Needles
              </h1>
              <p className="font-normal text-gray-500 text-sm md:text-base">
                Various gauge needles are used depending on the test and
                patient’s vein size.
              </p>
            </div>
          </div>
          <div className="flex space-x-6">
            <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
              03
            </h1>
            <span className="w-28 h-0.5 bg-gray-300 mt-5" />
            <div>
              <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                Alcohol Swaps
              </h1>
              <p className="font-normal text-gray-500 text-sm md:text-base">
                For disinfecting the skin before the blood draw to prevent
                infection.
              </p>
            </div>
          </div>
          <div className="flex space-x-6">
            <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
              04
            </h1>
            <span className="w-28 h-0.5 bg-gray-300 mt-5" />
            <div>
              <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                Cotton Balls or Gauze
              </h1>
              <p className="font-normal text-gray-500 text-sm md:text-base">
                For applying pressure to the site after blood collection.
              </p>
            </div>
          </div>
          <div className="flex space-x-6">
            <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
              05
            </h1>
            <span className="w-28 h-0.5 bg-gray-300 mt-5" />
            <div>
              <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                Adhesive Bandages
              </h1>
              <p className="font-normal text-gray-500 text-sm md:text-base">
                To cover the puncture site after the blood draw.
              </p>
            </div>
          </div>
          <div className="flex space-x-6">
            <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
              06
            </h1>
            <span className="w-28 h-0.5 bg-gray-300 mt-5" />
            <div>
              <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                Tourniquet
              </h1>
              <p className="font-normal text-gray-500 text-sm md:text-base">
                Used to constrict blood flow and make veins more visible.
              </p>
            </div>
          </div>
          <div className="flex space-x-6">
            <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
              07
            </h1>
            <span className="w-28 h-0.5 bg-gray-300 mt-5" />
            <div>
              <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                Pipettes or Syringes
              </h1>
              <p className="font-normal text-gray-500 text-sm md:text-base">
                For transferring blood samples to testing containers.
              </p>
            </div>
          </div>
          <div className="flex space-x-6">
            <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
              08
            </h1>
            <span className="w-28 h-0.5 bg-gray-300 mt-5" />
            <div>
              <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
              Refrigerator or Cooler
              </h1>
              <p className="font-normal text-gray-500 text-sm md:text-base">
                For storing samples that need to be kept at specific
                temperatures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="py-10 md:py-16 mb-20 md:mb-40 lg::mb-52">
    <div className="container max-w-screen-xl mx-auto px-4">
      <div className="text-center">
        <h1 className="font-medium text-gray-700 text-4xl md:text-5xl mb-5">
          What to do just after Blood Test
        </h1>
        <avoid className="font-normal text-gray-500 text-md md:text-lg mb-20">
          {" "}
          Avoid any side effects after a blood test, you should: Apply Pressure
          and Keep the Bandage On: This helps prevent bruising and bleeding at
          the puncture site. Stay Hydrated: Drinking water can help replenish
          any fluid loss and reduce the risk of dizziness or fainting. Avoid
          Strenuous Activities: Refrain from heavy lifting or intense exercise
          for the rest of the day to prevent strain on the puncture site. Rest
          if Necessary: If you feel lightheaded or weak, sit or lie down until
          you feel better. Monitor the Puncture Site: Check for any unusual
          swelling, redness, or pain, and report any concerns to a healthcare
          professional. By following these steps, you can minimize the risk of
          side effects after your blood test.
          <p />
        </avoid>
      </div>
    </div>
  </footer>
</div>

  )
}

export default BloodTest
