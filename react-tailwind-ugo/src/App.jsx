import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      {/* <header className="text-gray-700 border-b border-y-gray-400">
        <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
          <a href="#" className="font-medium text-gray-900">
            <span className="text-xl ml3 mb-4 md:mb-0">Test</span>
            <span className="text-yellow-500 text-xl ml3 mb-4 md:mb-0">
              Code
            </span>
          </a>
          <nav className="md:ml-auto text-base">
            <a href="#home" className="mr-5 hover:text-blue-400 duration-300">
              Home
            </a>
            <a href="#about" className="mr-5 hover:text-blue-400 duration-300">
              About
            </a>
            <a href="#Skills" className="mr-5 hover:text-blue-400 duration-300">
              Skills
            </a>
            <a href="#Blog" className="hover:text-blue-400 duration-300">
              Blog
            </a>
          </nav>
        </div>
      </header>

      <section className="text-gray-700" id="home">
        <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16">
            <h1 className="text-3xl sm:text-6xl text-gray-900 font-medium">
              hi
              <br />
              Everyone
              <br />
              I'm Jonh
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
              accusantium sapiente! Repudiandae sit libero iste dolorum
              blanditiis itaque laboriosam reprehenderit?
            </p>
            <button className="text-white bg-purple-300 py-2 px-6 border-0 rounded text-lg hover:bg-purple-600 duration-150">
              問い合わせ
            </button>
          </div>
          <div className="md:w-1/2 lg:max-w-lg w-5/6">
            <img src="./img/human1.jpeg" alt="" />
          </div>
        </div>
      </section>

      <section className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-2xl sm:text-3xl font-medium mb-2 text-gray-900">
              About Me
            </h1>
            <p className="pb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
              hic eos. Repellendus cumque ipsam laudantium laborum quod placeat
              aliquam ipsum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              non qui doloribus tenetur. Velit officiis vero sunt beatae error
              ea nostrum incidunt minima illum rerum, perferendis, assumenda,
              corporis debitis minus porro veritatis ad? Eos eligendi cum
              assumenda nemo facilis ipsa est laborum earum ducimus
              exercitationem at itaque quam voluptates, consequuntur officiis
              ipsam nisi quidem inventore pariatur dolores quasi facere
              laudantium eum obcaecati! Quisquam natus laborum dolore dolorem
              quos itaque illum recusandae, voluptatibus officiis quaerat beatae
              magnam, consectetur molestias tenetur, suscipit ratione? Dicta
              error iusto laudantium corrupti facere vero assumenda quas, ad
              nihil similique quam tempora voluptate esse reprehenderit
              possimus? Officia!
            </p>
          </div>

          <div className="flex flex-wrap">
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 rounded-lg p-2">
                <div className="flex items-center">
                  <div className="bg-green-500 text-white rounded-full">
                    icon
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium">
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio necessitatibus harum nemo neque eius illo at numquam
                    dolorum itaque dignissimos!
                  </p>
                  <a href="#" className="flex mt-3 text-green-500 items-center">
                    もっと見る
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 rounded-lg p-2">
                <div className="flex items-center">
                  <div className="bg-green-500 text-white rounded-full">
                    icon
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium">
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio necessitatibus harum nemo neque eius illo at numquam
                    dolorum itaque dignissimos!
                  </p>
                  <a href="#" className="flex mt-3 text-green-500 items-center">
                    もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.3294 19L0.731323 17.9641L5.06145 15.4641L7.1029 19H1.3294Z"
                        fill="currentColor"
                      />
                      <path
                        d="M15.1858 19H9.4123L5.7935 12.7321L10.1236 10.2321L15.1858 19Z"
                        fill="currentColor"
                      />
                      <path
                        d="M23.2687 19H17.4952L10.8557 7.5L15.1858 5L23.2687 19Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 rounded-lg p-2">
                <div className="flex items-center">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.3294 19L0.731323 17.9641L5.06145 15.4641L7.1029 19H1.3294Z"
                        fill="currentColor"
                      />
                      <path
                        d="M15.1858 19H9.4123L5.7935 12.7321L10.1236 10.2321L15.1858 19Z"
                        fill="currentColor"
                      />
                      <path
                        d="M23.2687 19H17.4952L10.8557 7.5L15.1858 5L23.2687 19Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium">
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio necessitatibus harum nemo neque eius illo at numquam
                    dolorum itaque dignissimos!
                  </p>
                  <a href="#" className="flex mt-3 text-green-500 items-center">
                    もっと見る
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
export default App;
