import { ArrowRightOutlined, FacebookFilled, FacebookOutlined, FileMarkdownOutlined, InstagramOutlined, LeftOutlined, LinkedinOutlined, RightOutlined, TwitterOutlined, XOutlined, YoutubeOutlined } from '@ant-design/icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'antd'
import React from 'react'
import 'aos/dist/aos.css';

function Aboutme() {
    return (
        <>
            <div>
            <div className="bg-[url('/background_01.jpg')] bg-cover bg-center lg:min-h-[500px] min-h-[300px] w-[100%] lg:rounded-b-[100px] rounded-b-[50px]">

                <div className='flex justify-between items-center px-10 xl:px-80'>
                    <div className='flex justify-start items-center gap-12'>
                        <div className='h-20 w-20'>
                            <img src="./logo_white.png" alt="" className='h-[100%] w-[100%]' />
                        </div>
                        <div className=' justify-start items-center  gap-14 text-white hidden lg:flex'>
                            <a href="">Home</a>
                            <a href="">About</a>
                            <a href="">Service</a>
                            <a href="">Page</a>
                        </div>
                    </div>

                    <div className='justify-center items-center gap-10 hidden lg:flex'>
                        <div className='flex justify-center items-center gap-6 text-white'>
                            <FacebookFilled className='text-2xl' />
                            <InstagramOutlined className='text-2xl' />
                            <XOutlined className='text-2xl' />

                        </div>

                        <button className='text-white hover:bg-white hover:text-black border border-white py-2 px-2 rounded-full'> Primary Button
                            <ArrowRightOutlined className='bg-white hover:bg-black rounded-full text-black hover:text-white mx-3' />
                        </button>

                    </div>

                </div>

                <div className='text-5xl lg:text-8xl font-bold text-center text-white lg:mt-24 mt-14'>
                    <span>About Me</span>
                </div>
            </div>

            {/* section-2 ***************************************/}

            <div className="bg-[url('/background_01_02.jpg')] bg-cover bg-center min-h-[600px] pt-10 rounded-b-[100px]">
                <div className='grid grid-cols-1 md:grid-cols-2 px-10 xl:px-80'>
                    <div className=''>
                        <img src="/hero_team (1).png" alt="" className='h-[100%] w-[100%]'  />
                    </div>
                    <div className='max-w-[800px]'>
                        <p className='text-2xl lg:text-4xl xl:text-5xl font-normal flex-wrap pt-6 lg:pt-20'>
                            “We work closely with our clients to ensure that their goals and are met at every stage of the development process.”

                        </p>
                        <p className='pt-6 lg:pt-10'>
                            Ethan Williams, Founder & CEO

                        </p>
                        <img src="/signature_01.png" alt="" className='pt-6' />
                    </div>

                </div>
            </div>

            {/*section-3 ******************************************* */}
            <div className="bg-[url('/background_01.jpg')] bg-cover bg-center min-h-[900px] rounded-b-[100px]">
                <div className='px-10 lg:px-80'>

                    <h1 className='text-4xl font-medium text-center text-white pt-20'>TESTIMONIALS</h1>

                    <div className='flex justify-center items-center gap-10'>
                        <div className='flex justify-center items-center text-4xl text-white border h-12 w-12 rounded-full p-2 '>
                            <LeftOutlined />
                        </div>
                        <div className='text-center'>
                            <p className='text-5xl text-white flex-wrap pt-20 w-full'> “Yes that happened, but it doesn't define me. What does not kill me will only make me stronger.
                                I made a mistake,but it doesn't define me but it doesn'tbut it doesn't define me but it doesn't. ”
                            </p>
                            <div className='flex justify-center items-center gap-10 pt-10'>
                                <div className='flex justify-center items-center gap-6 px-4 '>
                                    <div>
                                        <img src="/testimonials_01.jpg" alt="" className='rounded-full' />
                                    </div>
                                    <div className='text-white'>
                                        <p className='flex justify-start'>Linda Baryant</p>
                                        <p>Product Manager,Biosynthesis</p>
                                    </div>
                                </div>
                                <div className='border-l-2 pl-10 py-4 border-gray-500'>
                                    <img src="/inner_logo_small_01.png" alt="" className='' />

                                </div>

                            </div>

                        </div>
                        <div className='flex justify-center items-center  text-4xl text-white border h-12 w-12 rounded-full p-2'>
                            <RightOutlined />
                        </div>
                    </div>

                    <div className=" py-24">
                        <hr className="border-gray-500" />
                    </div>


                    <p className='text-lg text-white text-center'>Trusted by some of the fastest growing companies:</p>


                    <div className='grid grid-cols-1 lg:grid-cols-5 justify-items-center gap-4 md:gap-8 pt-10'>
                        <img src="inner_logo_white_06.png" alt="" />
                        <img src="inner_logo_white_07.png" alt="" />
                        <img src="inner_logo_white_08.png" alt="" />
                        <img src="inner_logo_white_09.png" alt="" />
                        <img src="inner_logo_white_10.png" alt="" />
                    </div>





                </div>
            </div>

            {/* ******************************************************************* */}
            <div className='min-h-[1000px] bg-white rounded-b-[100px]'>
                <div className='px-10 lg:px-80 pt-28'>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <div>
                            <h1 className='text-2xl font-medium'>ABOUT ME</h1>
                            <h1 className='text-7xl font-bold max-w-10 py-6'>
                                Ethan
                                Williams
                            </h1>
                            <p className='text-2xl font-semibold'>
                                CEO and founder of KYLO IT SERVICES, a leading technology company that
                                provides cutting-edge solutions to businesses and organizations.

                            </p>
                            <p className='pt-12'>
                                Cras vulputate nibh et consequat lobortis. Proin maximus libero ac eros luctus venenatis.
                                Donec orci mi, cursus eu sagittis et, varius laoreet dui. Etiam quis pulvinar eros.
                                Nullam congue vulputate sem non viverra. Sed in accumsan magna. Donec euismod aliquet luctus.
                                Aenean pharetra arcu sollicitudin, ornare orci sed, imperdiet metus sit amet eleifend blandit est.


                            </p>
                            <p className='pt-8'>
                                Praesent sed quam leo. Sed a ante tellus. Pellentesque et odio in turpis rhoncus blandit vitae a turpis.
                                Cras eget ex mi. Morbi aliquet finibus vestibulum. Sed at egestas ante.
                                Maecenas suscipit sit amet nunc sit amet fringilla, interdum consequat sem tortor a nisl.


                            </p>
                            <div className='pt-10 lg:pt-20'>
                                <button className='border border-black py-4 px-6 rounded-full hover:bg-black hover:text-white font-bold'>FREE CONSULTATION
                                    <FileMarkdownOutlined className='px-2' />

                                </button>
                            </div>
                        </div>
                        <div className=' h-[400px] w-[400px] lg:h-[800px] lg:w-[600px]  pt-14 lg:pl-10 pl-14'>
                            <img src="/image_07.jpg" alt="" className=' text-center h-[100%] w-[100%] rounded-2xl' />
                        </div>
                    </div>
                </div>
            </div>


            {/*footer******************************************************************** */}

            <div className=' bg-gray-950 text-white'>
                <div className='px-12 lg:px-80  mt-10'>
                    <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>

                        <div className='flex flex-col lg:justify-start items-center'>
                            <div>
                                <div className='h-20 w-20'>
                                    <img src="/logo_white.png" alt="" className='h-[100%] w-[100%]' />
                                </div>
                                <div>
                                    <p className='max-w-[300px] py-4 text-center lg:text-start'>Empowering Businesses to Thrive in the
                                        Digital Age with Innovative Solutions.
                                    </p>
                                </div>
                                <div className='flex flex-col-reverse text-center lg:text-start'>
                                    <span>Mon-Fri: 9 AM ― 6 PM</span>
                                    <span>Saturday: 9 AM ― 4 PM</span>
                                    <span>Sunday: Closed</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center items-center'>
                            <div>
                                <h1 className='text-xl font-semibold text-center lg:text-start'>Services</h1>

                                <a href="" className='flex flex-col-reverse gap-2 pt-4 text-center lg:text-start'>
                                    <span>Managed IT Services
                                    </span>
                                    <span>Cloud Solutions</span>
                                    <span>Network Services
                                    </span>
                                    <span>Cyber Security</span>
                                    <span>Backup & Recovery</span>
                                </a>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div>
                                <h1 className=' text-xl font-semibold text-center lg:text-start'>Company</h1>

                                <a href="" className='flex flex-col-reverse gap-2 pt-4'>
                                    <span>About Us</span>
                                    <span>About Me</span>
                                    <span>Services
                                    </span>
                                    <span>Portfolio</span>
                                    <span>Contact Us
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className='flex justify-center lg:justify-end pt-6 '>
                            <div>

                                <h1 className='text-xl font-semibold text-center lg:text-start'>Get In Touch</h1>

                                <div className='flex gap-2 pt-10'>

                                    <a href=""><LinkedinOutlined className='text-3xl hover:text-blue-600' /></a>
                                    <a href=""><FacebookOutlined className='text-3xl hover:text-blue-500' /></a>
                                    <a href=""><InstagramOutlined className='text-3xl hover:text-red-400' /></a>
                                    <a href=""><TwitterOutlined className='text-3xl hover:text-blue-400' /></a>
                                    <a href=""><YoutubeOutlined className='text-3xl hover:text-red-600' /></a>

                                </div>
                            </div>
                        </div>

                    </div>


                    <div className='pt-20'>
                        <hr />
                        <div className='flex justify-between items-center pt-6 pb-20 flex-col lg:flex-row'>
                            <div>
                                <p>© 2023 BoldThemes. All rights reserved</p>
                            </div>
                            <div className='flex justify-center items-center lg:gap-4  gap-2 flex-col lg:flex-row pt-4 lg:pt-0'>
                                <a href="" className=''>
                                    <span className='underline hover:underline-offset-4 hover:text-yellow-300'>Privacy Policy</span>
                                </a>
                                <a href="">
                                    <span className='underline hover:underline-offset-4 hover:text-yellow-300'>Terms of Service</span>
                                </a>
                                <a href="">
                                    <span className='underline hover:underline-offset-4 hover:text-yellow-300'>Cookies Settings</span>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            </div>
        </>
    )
}

export default Aboutme