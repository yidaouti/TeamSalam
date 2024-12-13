import React from 'react';
import { motion } from 'framer-motion';

const Service = () => {
    return (
        <section id="services" className=" w-full min-h-screen bg-service-pattern bg-cover bg-fixed max-lg:bg-center max-sm:bg-center p-14">
            <div className=" max-container padding-hero-y padding-x">
                <div className="flex justify-between items-end mb-28 max-lg:flex-col max-lg:items-start max-lg:gap-5 max-sm:mb-20">
                    <div>
                        <p
                            className=" text-red-600 relative before:absolute before:w-20 before:h-1 before:bg-red-600 before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%]">
                            OUR SERVICES FOR YOU</p>
                        <div
                            className=" text-6xl text-white mt-8 leading-[60px] max-w-[65%] font-semibold max-xl:text-4xl max-lg:text-5xl max-lg:leading-[60px] max-lg:max-w-[100%] max-sm:text-3xl">
                            <h1>PUSH YOUR LIMITS FORWARD WE OFFER TO YOU</h1>
                        </div>
                    </div>
                    <div>
                        <button className=" py-4 px-9 text-xl group relative text-white bg-red-600 rounded-sm">
                            <div className=" buttonDiv">

                            </div>
                            <span className="buttonSpan">MORE SERVICES</span>
                        </button>
                    </div>
                </div>
                <div
                    className=" grid grid-cols-3 cursor-pointer gap-10 place-items-center overflow-hidden max-lg:grid-cols-2 max-sm:grid-cols-1">
                    <div
                        className=" relative group bg-white min-h-[350px] pt-20 pb-9 text-center flex flex-col items-center justify-center max-xl:pt-16">
                        <div>
                            <p className=" group-hover:text-red-600 flex justify-center mb-10 text-5xl">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                                    width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Dumbbell">
                                        <path
                                            d="M21.435,11.5h-.38V8.12a1.626,1.626,0,0,0-1.62-1.62h-.63V6.12a1.625,1.625,0,0,0-3.25,0V11.5H8.445V6.12a1.625,1.625,0,0,0-3.25,0V6.5h-.63a1.62,1.62,0,0,0-1.62,1.62V11.5h-.38a.5.5,0,1,0,0,1h.38v3.37a1.622,1.622,0,0,0,1.62,1.63H5.2v.37a1.625,1.625,0,1,0,3.25,0V12.5h7.11v5.37a1.625,1.625,0,1,0,3.25,0V17.5h.63a1.628,1.628,0,0,0,1.62-1.63V12.5h.38a.5.5,0,1,0,0-1ZM5.2,16.5h-.63a.625.625,0,0,1-.62-.63V8.12a.623.623,0,0,1,.62-.62H5.2Zm2.25,1.37a.634.634,0,0,1-.63.63.625.625,0,0,1-.62-.63V6.12a.623.623,0,0,1,.62-.62.632.632,0,0,1,.63.62Zm10.36,0a.625.625,0,1,1-1.25,0V6.12a.625.625,0,0,1,1.25,0Zm2.25-2a.625.625,0,0,1-.62.63h-.63v-9h.63a.623.623,0,0,1,.62.62Z">

                                        </path>
                                    </g>
                                </svg>
                            </p>
                            <p className=" text-2xl mb-5">QUALITY EQUIPMENT</p>
                            <p className="px-12 font text-lg pb-16 max-xl:px-5">The sea freight service has grown consider ably in
                                recent years. We spend timetting to kn.</p>
                        </div>
                        <button
                            className=" absolute -bottom-16 opacity-0 group-hover:bottom-0 group-hover:opacity-[1] duration-300 left-0 w-full flex justify-center items-center gap-3 py-5 bg-red-600 text-white text-lg text-center">DISCOVER
                            MORE ABOUT US<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z">

                                </path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className=" relative group bg-white min-h-[350px] pt-20 pb-9 text-center flex flex-col items-center justify-center max-xl:pt-16">
                        <div>
                            <p className=" group-hover:text-red-600 flex justify-center mb-10 text-5xl">
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
                            <p className=" text-2xl mb-5">HEALTH CARING</p>
                            <p className="px-12 font text-lg pb-16 max-xl:px-5">The sea freight service has grown consider ably in
                                recent years. We spend timetting to kn.</p>
                        </div>
                        <button
                            className=" absolute -bottom-16 opacity-0 group-hover:bottom-0 group-hover:opacity-[1] duration-300 left-0 w-full flex justify-center items-center gap-3 py-5 bg-red-600 text-white text-lg text-center">DISCOVER
                            MORE ABOUT US<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z">

                                </path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className=" relative group bg-white min-h-[350px] pt-20 pb-9 text-center flex flex-col items-center justify-center max-xl:pt-16">
                        <div>
                            <p className=" group-hover:text-red-600 flex justify-center mb-10 text-5xl">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                                    width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z">

                                    </path>
                                    <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z">

                                    </path>
                                </svg>
                            </p>
                            <p className=" text-2xl mb-5">GYM STRATEGIES</p>
                            <p className="px-12 font text-lg pb-16 max-xl:px-5">The sea freight service has grown consider ably in
                                recent years. We spend timetting to kn.</p>
                        </div>
                        <button
                            className=" absolute -bottom-16 opacity-0 group-hover:bottom-0 group-hover:opacity-[1] duration-300 left-0 w-full flex justify-center items-center gap-3 py-5 bg-red-600 text-white text-lg text-center">DISCOVER
                            MORE ABOUT US<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z">

                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
