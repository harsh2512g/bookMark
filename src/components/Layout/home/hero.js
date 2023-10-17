import Image from 'next/image'

export function Hero() {
  return (
    <main>
      <div className="relative px-6 lg:px-8">
        <div className=" max-w-7xl py-32 sm:py-48 lg:py-56 bg-[url('/banner.svg')] mt-[-9%] xl:mt-[4%] bg-center bg-no-repeat w-full h-[400px] mx-auto">
          <div className=""></div>
        </div>

        {/* grids */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 grid-rows-3 ">
          {/* grid1 */}
          <div className="h-[630px] mx-auto grid place-content-center pl-5">
            <p className=" text-green-700 text-3xl font-bold mb-6">1. Browse</p>
            <p className=" text-zinc-800 text-lg font-normal pr-5">
              Start by browsing through our extensive collection of college
              materials. From textbooks to study guides, you'll find everything
              you need for your courses.
            </p>
            <div className="flex items-center mt-6">
              <span className="text-green-700 text-lg font-bold mr-4">
                Start your search
              </span>
              <span>
                <Image
                  src="./gridTraingle.svg"
                  height={10}
                  width={20}
                  className="mx-auto"
                  alt="Your Company"
                />
              </span>
            </div>
          </div>
          {/* grid2 */}
          <div className="bg-[#E5F0EA]">
            <div className="h-[630px] mx-auto grid place-content-center">
              <p className=" text-green-700 text-3xl font-bold mb-6">
                1. Browse
              </p>
            </div>
          </div>
          {/* grid3 */}
          <div className="bg-[#E5F0EA]">
            <div className="h-[630px] mx-auto grid place-content-center">
              <Image
                src="./grid3Frame.svg"
                height={90}
                width={470}
                className="mx-auto"
                alt="Your Company"
              />
            </div>
          </div>
          {/* grid4 */}
          <div className="">
            <div className="h-[630px] mx-auto grid place-content-center pl-5">
              <p className=" text-green-700 text-3xl font-bold mb-6">
                2. Reserve
              </p>
              <p className="text-zinc-800 text-lg font-normal pr-5 ">
                Once you've found the perfect materials, simply click to reserve
                them. You'll be able to chat with the seller for the
                availability and choose the most convenient option for you.
              </p>
              <div className="flex items-center mt-6">
                <span className="text-green-700 text-lg font-bold mr-4">
                  Reserve books now
                </span>
                <span>
                  <Image
                    src="./gridTraingle.svg"
                    height={10}
                    width={20}
                    className="mx-auto"
                    alt="Your Company"
                  />
                </span>
              </div>
            </div>
          </div>
          {/* grid5 */}
          <div className="">
            <div className="h-[630px] mx-auto grid place-content-center pl-5">
              <p className=" text-green-700 text-3xl font-bold mb-6">3. Meet</p>
              <p className="text-zinc-800 text-lg font-normal pr-5 ">
                Arrange a convenient meeting with the seller to pick up your
                materials. This is a chance to connect with fellow students on
                your campus.
              </p>
              <div className="flex items-center mt-6">
                <span className="text-green-700 text-lg font-bold mr-4">
                  Start connecting
                </span>
                <span>
                  <Image
                    src="./gridTraingle.svg"
                    height={10}
                    width={20}
                    className="mx-auto"
                    alt="Your Company"
                  />
                </span>
              </div>
            </div>
          </div>
          {/* grid6 */}
          <div className="bg-[#E5F0EA]">
            <div className="h-[630px] mx-auto grid place-content-center">
              <Image
                src="./grid6Frame.svg"
                height={90}
                width={470}
                className="mx-auto"
                alt="Your Company"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
