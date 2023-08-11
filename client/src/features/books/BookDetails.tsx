import { useState, useEffect } from "react";
import { Book } from "../../app/models/book";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookSuggest from "./BookSuggest";
import ReviewBook from "./ReviewBook";
import agent from "../../app/api/agent";

export default function BookDetails() {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Product.details(parseInt(id))
      .then((product) => setBook(product))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <div>
        <svg className="loader" viewBox="0 0 48 30" width="48px" height="30px">
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          >
            <g transform="translate(9.5,19)">
              <circle
                className="loader_tire"
                r="9"
                strokeDasharray="56.549 56.549"
              ></circle>
              <g
                className="loader_spokes-spin"
                strokeDasharray="31.416 31.416"
                strokeDashoffset="-23.562"
              >
                <circle className="loader_spokes" r="5"></circle>
                <circle
                  className="loader_spokes"
                  r="5"
                  transform="rotate(180,0,0)"
                ></circle>
              </g>
            </g>
            <g transform="translate(24,19)">
              <g
                className="loader_pedals-spin"
                strokeDasharray="25.133 25.133"
                strokeDashoffset="-21.991"
                transform="rotate(67.5,0,0)"
              >
                <circle className="loader_pedals" r="4"></circle>
                <circle
                  className="loader_pedals"
                  r="4"
                  transform="rotate(180,0,0)"
                ></circle>
              </g>
            </g>
            <g transform="translate(38.5,19)">
              <circle
                className="loader_tire"
                r="9"
                strokeDasharray="56.549 56.549"
              ></circle>
              <g
                className="loader_spokes-spin"
                strokeDasharray="31.416 31.416"
                strokeDashoffset="-23.562"
              >
                <circle className="loader_spokes" r="5"></circle>
                <circle
                  className="loader_spokes"
                  r="5"
                  transform="rotate(180,0,0)"
                ></circle>
              </g>
            </g>
            <polyline
              className="loader_seat"
              points="14 3,18 3"
              strokeDasharray="5 5"
            ></polyline>
            <polyline
              className="loader_body"
              points="16 3,24 19,9.5 19,18 8,34 7,24 19"
              strokeDasharray="79 79"
            ></polyline>
            <path
              className="loader_handlebars"
              d="m30,2h6s1,0,1,1-1,1-1,1"
              strokeDasharray="10 10"
            ></path>
            <polyline
              className="loader_front"
              points="32.5 2,38.5 19"
              strokeDasharray="19 19"
            ></polyline>
          </g>
        </svg>
      </div>
    );
  if (!book) return <h3>Book not found</h3>;
  return (
    <>
      {/* <!-- Features --> */}
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="relative p-6 md:p-16">
          {/* <!-- Grid --> */}
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-7 lg:order-2 lg:mr-10">
              {/* <!-- Tab Navs --> */}
              <nav
                className="grid gap-4 mt-5 md:mt-10"
                aria-label="Tabs"
                role="tablist"
              >
                <div className="w-full lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">
                    {book.category}
                  </h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    {book.title}
                  </h1>
                  <div className="flex mb-4">
                    <span className="flex items-center">
                      <div className="rating">
                        <input
                          hidden
                          value="star-1"
                          name="star-radio"
                          id="star-1"
                          type="radio"
                        />
                        <label htmlFor="star-1">
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                              pathLength="360"
                            ></path>
                          </svg>
                        </label>
                        <input
                          hidden
                          value="star-2"
                          name="star-radio"
                          id="star-2"
                          type="radio"
                        />
                        <label htmlFor="star-2">
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                              pathLength="360"
                            ></path>
                          </svg>
                        </label>
                        <input
                          hidden
                          value="star-3"
                          name="star-radio"
                          id="star-3"
                          type="radio"
                        />
                        <label htmlFor="star-3">
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                              pathLength="360"
                            ></path>
                          </svg>
                        </label>
                        <input
                          hidden
                          value="star-4"
                          name="star-radio"
                          id="star-4"
                          type="radio"
                        />
                        <label htmlFor="star-4">
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                              pathLength="360"
                            ></path>
                          </svg>
                        </label>
                        <input
                          hidden
                          value="star-5"
                          name="star-radio"
                          id="star-5"
                          type="radio"
                        />
                        <label htmlFor="star-5">
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                              pathLength="360"
                            ></path>
                          </svg>
                        </label>
                      </div>

                      <span className="text-gray-600 ml-3">4 Reviews</span>
                    </span>
                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                      <a className="text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                  <p className="leading-relaxed">{book.description}</p>
                  <div className="flex mt-6 items-center pb-2 border-b-2 border-gray-100 mb-5">
                    <div className="flex">
                      <span className="mr-3">Color</span>
                      <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                      <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                      <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                    </div>
                    <div className="flex ml-6 items-center">
                      <span className="mr-3">Size</span>
                      <div className="relative">
                        <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                          <option>SM</option>
                          <option>M</option>
                          <option>L</option>
                          <option>XL</option>
                        </select>
                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="flex pt-5">
                    <span className="title-font font-medium text-2xl text-gray-900">
                      ${book.price}
                    </span>
                    <a
                      href={"/check-out/" + book.id}
                      className="flex ml-auto text-white bg-orange-based border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded"
                    >
                      Rent now
                    </a>
                    <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </nav>
              {/* <!-- End Tab Navs --> */}
            </div>
            {/* <!-- End Col --> */}

            <div className="lg:col-span-6 lg:col-start-1">
              <div className="relative">
                {/* <!-- Tab Content --> */}
                <div>
                  {/*  lg:pl-48 */}
                  <div className="" aria-labelledby="Image of book">
                    <img
                      className="object-scale-down shadow-xl h-96 w-full  shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                      src={book.image}
                      alt="Image Description"
                    />
                  </div>
                </div>
                {/* <!-- End Tab Content --> */}

                {/* <!-- SVG Element --> */}
                <div className="hidden absolute top-0 right-10 translate-x-20 md:block lg:translate-x-20">
                  <svg
                    className="w-16 h-auto text-orange-500"
                    width="121"
                    height="135"
                    viewBox="0 0 121 135"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                      stroke="currentColor"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                      stroke="currentColor"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                      stroke="currentColor"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                {/* <!-- End SVG Element --> */}
              </div>
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}

          {/* <!-- Background Color --> */}
          <div className="absolute inset-0 grid grid-cols-12 w-full h-full">
            <div
              style={{
                zIndex: -1,
              }}
              className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]"
            ></div>
          </div>
          {/* End Background Color */}
        </div>
        <div className="flex bg-gray-100 mt-10">
          <div className=" flex text-center items-center md:w-1/4 text-gray-500 ">
            <div className="w-32 h-32 ml-2 mt-2 -mb-2 ">
              <img
                className="mx-auto w-28 h-28 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="Jese Avatar"
              />
            </div>

            <div className="w-2/3 flex-col text-left">
              <h3 className=" ml-3 mb-1 text-xl md:text-2xl font-bold tracking-tight text-gray-900">
                <a href="#">Jese Leos</a>
              </h3>
              <button className="flex ml-3 mt-4 bg-orange-300 hover:bg-orange-400 text-black py-1 md:px-2 px-1 rounded-full">
                <svg
                  viewBox="0 0 24 24"
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white w-5 h-5"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 3C7.85113 3 4 5.73396 4 10C4 11.5704 4.38842 12.7289 5.08252 13.6554C5.79003 14.5998 6.87746 15.3863 8.41627 16.0908L9.2326 16.4645L8.94868 17.3162C8.54129 18.5384 7.84997 19.6611 7.15156 20.5844C9.56467 19.8263 12.7167 18.6537 14.9453 17.1679C17.1551 15.6948 18.3969 14.5353 19.0991 13.455C19.7758 12.4139 20 11.371 20 10C20 5.73396 16.1489 3 12 3ZM2 10C2 4.26604 7.14887 1 12 1C16.8511 1 22 4.26604 22 10C22 11.629 21.7242 13.0861 20.7759 14.545C19.8531 15.9647 18.3449 17.3052 16.0547 18.8321C13.0781 20.8164 8.76589 22.2232 6.29772 22.9281C5.48665 23.1597 4.84055 22.6838 4.56243 22.1881C4.28848 21.6998 4.22087 20.9454 4.74413 20.3614C5.44439 19.5798 6.21203 18.5732 6.72616 17.4871C5.40034 16.7841 4.29326 15.9376 3.48189 14.8545C2.48785 13.5277 2 11.9296 2 10Z"
                      fill="#0F0F0F"
                    ></path>{" "}
                    <path
                      d="M9 10C9 10.8284 8.32843 11.5 7.5 11.5C6.67157 11.5 6 10.8284 6 10C6 9.17157 6.67157 8.5 7.5 8.5C8.32843 8.5 9 9.17157 9 10Z"
                      fill="#0F0F0F"
                    ></path>{" "}
                    <path
                      d="M13.4976 10C13.4976 10.8284 12.826 11.5 11.9976 11.5C11.1692 11.5 10.4976 10.8284 10.4976 10C10.4976 9.17157 11.1692 8.5 11.9976 8.5C12.826 8.5 13.4976 9.17157 13.4976 10Z"
                      fill="#0F0F0F"
                    ></path>{" "}
                    <path
                      d="M16.5 11.5C17.3284 11.5 18 10.8284 18 10C18 9.17157 17.3284 8.5 16.5 8.5C15.6716 8.5 15 9.17157 15 10C15 10.8284 15.6716 11.5 16.5 11.5Z"
                      fill="#0F0F0F"
                    ></path>{" "}
                  </g>
                </svg>
                <p className="mx-2 text-sm"> Chat now</p>
              </button>
            </div>
          </div>
          <div>
            <p> Detail: </p>
          </div>
        </div>

        <BookSuggest />
        <ReviewBook />
      </div>
      {/* End Features */}
    </>
  );
}
