import React from 'react';

const Service = () => {
    return (
        <section id="services" className="w-full min-h-screen bg-service-pattern bg-cover bg-fixed max-lg:bg-center max-sm:bg-center p-14">
            <div className="max-container padding-hero-y padding-x">
                <div className="flex justify-between items-end mb-28 max-lg:flex-col max-lg:items-start max-lg:gap-5 max-sm:mb-20">
                    <div>
                        <p className="text-red-600 relative before:absolute before:w-20 before:h-1 before:bg-red-600 before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%]">
                            OUR SERVICES FOR YOU</p>
                        <div className="text-6xl text-white mt-8 leading-[60px] max-w-[65%] font-semibold max-xl:text-4xl max-lg:text-5xl max-lg:leading-[60px] max-lg:max-w-[100%] max-sm:text-3xl">
                            <h1>PUSH YOUR LIMITS FORWARD WITH OUR TRAINING PROGRAMS</h1>
                        </div>
                    </div>
                    <div>
                        <button className="py-4 px-9 text-xl group relative text-white bg-red-600 rounded-sm">
                            <div className="buttonDiv">

                            </div>
                            <span className="buttonSpan">MORE SERVICES</span>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-3 cursor-pointer gap-10 place-items-center overflow-hidden max-lg:grid-cols-2 max-sm:grid-cols-1">
                    <div className="relative group bg-white min-h-[350px] pt-20 pb-9 text-center flex flex-col items-center justify-center max-xl:pt-16">
                        <div>

                            <p className="group flex justify-center mb-10 text-5xl group-hover:text-red-600">
                                <svg
                                    className="transition-colors duration-300"
                                    version="1.1"
                                    id="Uploaded to svgrepo.com"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 32.00 32.00"
                                    xml:space="preserve"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    stroke-width="0.8320000000000001"
                                    transform="rotate(0)"
                                >
                                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke="#CCCCCC"
                                        stroke-width="0.064"
                                    />
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            class="feather_een"
                                            d="M18.757,20.929L16.971,22l1.785,1.071c0.237,0.142,0.314,0.449,0.172,0.686 C18.835,23.914,18.669,24,18.5,24c-0.088,0-0.177-0.023-0.257-0.071L16,22.583l-2.243,1.346C13.677,23.977,13.588,24,13.5,24 c-0.169,0-0.335-0.086-0.429-0.243c-0.143-0.237-0.065-0.544,0.172-0.686L15.029,22l-1.785-1.071 c-0.237-0.142-0.314-0.449-0.172-0.686c0.144-0.237,0.451-0.312,0.686-0.171L16,21.417l2.243-1.346 c0.235-0.141,0.543-0.066,0.686,0.171C19.071,20.479,18.994,20.787,18.757,20.929z M18.929,25.243 c-0.143-0.237-0.45-0.312-0.686-0.171L16,26.417l-2.243-1.346c-0.234-0.141-0.542-0.066-0.686,0.171 c-0.143,0.237-0.065,0.544,0.172,0.686L15.029,27l-1.785,1.071c-0.237,0.142-0.314,0.449-0.172,0.686 C13.165,28.914,13.331,29,13.5,29c0.088,0,0.177-0.023,0.257-0.071L16,27.583l2.243,1.346C18.323,28.977,18.412,29,18.5,29 c0.169,0,0.335-0.086,0.429-0.243c0.143-0.237,0.065-0.544-0.172-0.686L16.971,27l1.785-1.071 C18.994,25.787,19.071,25.479,18.929,25.243z M29,8v9.021c0,1.708-0.398,3.393-1.162,4.921l-1.733,3.464 C26.036,25.545,26,25.698,26,25.853V28c0,1.657-1.343,3-3,3H9c-1.657,0-3-1.343-3-3v-2.147c0-0.155-0.036-0.308-0.106-0.447 l-1.732-3.463C3.398,20.415,3,18.73,3,17.022V14c0-0.887,0.387-1.685,1-2.234c0-0.005,0-0.01,0-0.016V8c0-3.866,3.134-7,7-7h11 C25.866,1,29,4.134,29,8z M28,8c0-3.314-2.686-6-6-6H11C7.686,2,5,4.686,5,8v3.171C5.312,11.061,5.649,11,6,11h1 c1.657,0,3,1.343,3,3v2.153c3.99,1.446,8.353,1.407,12.32-0.12c0.277-0.104,0.583,0.046,0.662,0.336 c0.069,0.252-0.085,0.514-0.328,0.608c-4.3,1.647-9.033,1.644-13.333-0.009c-0.192-0.074-0.319-0.259-0.32-0.465L9,14.004 C8.999,12.897,8.102,12,6.994,12H6c-1.105,0-2,0.895-2,2v3.022c0,1.553,0.362,3.084,1.056,4.473l1.631,3.281 C6.893,25.191,7,25.648,7,26.111V28c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2v-1.889c0-0.463,0.107-0.92,0.313-1.335l1.631-3.281 C27.639,20.106,28,18.575,28,17.022V8z"
                                        />
                                    </g>
                                </svg>
                            </p>


                            <p className="text-2xl mb-5">QUALITY TECHNIQUE</p>
                            <p className="px-12 font text-lg pb-16 max-xl:px-5">Master the art of Muay Thai with our focus on precision and technique, ensuring you train like a pro while improving your skills effectively.</p>
                        </div>
                        <button className="absolute -bottom-16 opacity-0 group-hover:bottom-0 group-hover:opacity-[1] duration-300 left-0 w-full flex justify-center items-center gap-3 py-5 bg-red-600 text-white text-lg text-center">DISCOVER MORE ABOUT US</button>
                    </div>
                    <div className="relative group bg-white min-h-[350px] pt-20 pb-9 text-center flex flex-col items-center justify-center max-xl:pt-16">
                        <div>
                            <p className="group-hover:text-red-600 flex justify-center mb-10 text-5xl">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em"
                                    width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01L8 2.748ZM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5Z">

                                    </path>
                                    <path
                                        d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162l-1.874-4.686Z">

                                    </path>
                                </svg>
                            </p>
                            <p className="text-2xl mb-5">HEART HEALTH</p>
                            <p className="px-12 font text-lg pb-16 max-xl:px-5">Boost your cardiovascular strength and stamina with our specialized training programs, designed to enhance heart health and overall fitness.</p>
                        </div>
                        <button className="absolute -bottom-16 opacity-0 group-hover:bottom-0 group-hover:opacity-[1] duration-300 left-0 w-full flex justify-center items-center gap-3 py-5 bg-red-600 text-white text-lg text-center">DISCOVER MORE ABOUT US</button>
                    </div>
                    <div className="relative group bg-white min-h-[350px] pt-20 pb-9 text-center flex flex-col items-center justify-center max-xl:pt-16">
                        <div>
                            <p className="group-hover:text-red-600 flex justify-center mb-10 text-5xl">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                                    <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"></path>
                                </svg>
                            </p>
                            <p className="text-2xl mb-5">TIME EFFICIENCY</p>
                            <p className="px-12 font text-lg pb-16 max-xl:px-5">
                                Maximize your results with tailored sessions that efficiently fit into your busy schedule, ensuring no time is wasted.
                            </p>
                        </div>
                        <button className="absolute -bottom-16 opacity-0 group-hover:bottom-0 group-hover:opacity-[1] duration-300 left-0 w-full flex justify-center items-center gap-3 py-5 bg-red-600 text-white text-lg text-center">
                            DISCOVER MORE ABOUT US
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
