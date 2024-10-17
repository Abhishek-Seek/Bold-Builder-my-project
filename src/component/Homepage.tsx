
"use client"
import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArtstation, faDailymotion, faFacebook, faInstagram, faIntercom, faLinkedin, faNfcDirectional, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Button, Dropdown, DropdownProps, MenuProps, Space, Typography } from 'antd';
import { faBars, faCircleArrowRight, faGlobe, faGreaterThan, faHeartCircleCheck, faLessThan, faPenNib, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import 'animate.css';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Home 1',
  },
  {
    key: '2',
    label: 'Home 2',
  },
  {
    key: '3',
    label: 'Home 3',
  },
];

const item: MenuProps['items'] = [
  {
    key: '1',
    label: 'My Account',
    disabled: true,
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    label: 'Profile',
    extra: '⌘P',
  },
  {
    key: '3',
    label: 'Billing',
    extra: '⌘B',
  },
  {
    key: '4',
    label: 'Settings',
    // icon: <SettingOutlined />,
    extra: '⌘S',
  },
];


const item3: MenuProps['items'] = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];











function Homepage() {

  

  const [visible, setvisible] = useState(false)
  const [open, setOpen] = useState(false);
 const router = useRouter()
 
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    if (e.key === '3') {
      setOpen(false);
    }
  };

  const handleOpenChange: DropdownProps['onOpenChange'] = (nextOpen, info) => {
    if (info.source === 'trigger' || nextOpen) {
      setOpen(nextOpen);
    }
  };

  const items2: MenuProps['items'] = [
    {
      key: '1',
      type: 'group',
      label: 'Group title',
      children: [
        {
          key: '1-1',
          label: 'About me',
          onClick:()=>{
            router.push("/aboutpage")
          }
        },
        {
          key: '1-2',
          label: '2nd menu item',
        },
      ],
    },
    {
      key: '2',
      label: 'sub menu',
      children: [
        {
          key: '2-1',
          label: '3rd menu item',
        },
        {
          key: '2-2',
          label: '4th menu item',
        },
      ],
    },
    {
      key: '3',
      label: 'disabled sub menu',
      disabled: true,
      children: [
        {
          key: '3-1',
          label: '5d menu item',
        },
        {
          key: '3-2',
          label: '6th menu item',
        },
      ],
    },
  ];







  return (


    <>

      <div className=' h-[100%] w-[100%]  bg-gradient-to-b from-yellow-500 rounded-b-[150px]'>
        <div className='px-2 xl:px-60 pt-6'>
          <div className='flex justify-between items-center bg-black px-6 py-2 rounded-full relative sm:w-full'>
            <div className='flex lg:flex text-center gap-6 '>
              <div className='text-white sm:pl-0 '>
                <img src="/logo_white_04.png" alt="" className='h-20 w-30' />

              </div>
              <div className='hidden justify-center items-center gap-10 text-white  sm:hidden lg:flex text-xl'>

                <Dropdown
                  menu={{
                    items,
                    selectable: true,
                    defaultSelectedKeys: ['3'],
                  }}
                >
                  <Typography.Link>
                    <Space className='text-xl text-white'>
                      Home
                      {/* <DownOutlined/>  */}
                      
                    </Space>
                  </Typography.Link>
                </Dropdown>


                <Dropdown menu={{ items: item }}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                     Profile
                      {/* <DownOutlined /> */}
                    </Space>
                  </a>
                </Dropdown>


                <Dropdown menu={{ items: items2 }}>
                  <a>
                    <Space>
                      About
                      {/* <DownOutlined /> */}
                    </Space>
                  </a>
                </Dropdown>


                <Dropdown menu={{ items: item3 }}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      Contact
                      {/* <DownOutlined /> */}
                    </Space>
                  </a>
                </Dropdown>

              </div>

            </div>

            <div className='hidden justify-center items-center gap-10 lg:flex sm:hidden'>
              <div className='flex gap-4 text-white'>
                <FontAwesomeIcon icon={faFacebook} size="lg" className='hover:text-yellow-400  hover:scale-110 duration-300' />
                <FontAwesomeIcon icon={faInstagram} size="lg" className='hover:text-yellow-400  hover:scale-110 duration-300'/>
                <FontAwesomeIcon icon={faTwitter} size="lg" className='hover:text-yellow-400  hover:scale-110 duration-300'/>
              </div>
              <button className='bg-yellow-600 hover:bg-yellow-300 text-black py-3 px-10 rounded-full border border-none '>Primary</button>

            </div>

            <div className='md:hidden'>
              {visible ? "" : <button className='md:hidden' onClick={() => setvisible(!visible)}>
                <FontAwesomeIcon icon={faBars} size="2xl" className='text-white ' />
              </button>}
              {visible ? <button className='md:hidden' onClick={() => setvisible(!visible)} >
                <FontAwesomeIcon icon={faXmark} size="2xl" className='text-white' />
              </button> : ""}


              {visible ?
                <div className='h-96 w-60 bg-white absolute  right-0 top-20 p-4 rounded-xl' >
                  <div>
                    <h1 className='text-6xl font-semibold '>Kylo</h1>
                  </div>
                  <div className='flex text-lg font-light gap-4 flex-col pt-6'>
                    <a href="" className='hover:font-bold'>Home</a>
                    <a href="">About</a>
                    <a href="">Service</a>
                    <a href="">Page</a>

                  </div>
                  <div className='flex gap-4 mt-8'>
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </div>
                  <div className='pt-8'>
                    <Button className='bg-yellow-600 text-black py-6 px-8 rounded-full border border-none '>Primary</Button>
                  </div>

                </div>

                : ""
              }
            </div>


          </div>

          <div className=' pb-10'>
            <p className='text-2xl font-semibold text-center mt-14'>I’M KYLO, FREELANCE ILLUSTRATOR</p>
            <div className='flex justify-center items-center animate__animated animate__bounce'>
              <h1 className='flex justify-items-center items-center max-w-5xl text-4xl 
               md:text-8xl font-semibold pt-6 text-center leading-tight animate__animated animate__bounce animate__repeat-2'>Welcome To My
                Creative World
              </h1>
            </div>
            <div className='flex justify-center items-center mt-10'>
              <img src="/hero_team.png" alt="" />
            </div>
            <p className='text-lg font-semibold text-center pt-6'>
              Trusted by some of the fastest growing companies:
            </p>

            <div className='grid grid-cols-1 lg:grid-cols-5 justify-items-center  gap-4 md:gap-8  pt-6'>
              <img src="inner_logo_01.png" alt="" />
              <img src="inner_logo_02.png" alt="" />
              <img src="inner_logo_03.png" alt="" />
              <img src="inner_logo_04.png" alt="" />
              <img src="inner_logo_05.png" alt="" />
            </div>

            <div className='pt-6 flex justify-center items-center'>
              <hr className='w-2/3 ' />
            </div>


          </div>
        </div>
      </div>

      {/* Cardsectoin */}

      <div className='bg-gradient-to-t from-yellow-500 rounded-b-[150px]'>

        <div className='px-4 xl:px-60  '>
          <h1 className='text-3xl font-light text-center pt-8 '>DISCOVER MY CREATIVE JOURNEY</h1>
          <p className=' text-4xl md:text-8xl text-center pt-4'> Portfolio Highlights</p>


          <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2 lg:gap-6 md:gap-4 justify-items-center mt-10'>
            <div className='py-4'>
              <div className='rounded-3xl overflow-hidden shadow-lg max-w-lg'>
                <img src="portfolio.jpg" alt="" className='w-full  hover:scale-110 duration-300' />
              </div>

            </div>
            <div className='py-4'>
              <div className='rounded-3xl overflow-hidden shadow-lg max-w-lg'>
                <img src="portfolio-11.jpg" alt="" className='w-full hover:scale-110 duration-300' />
              </div>

            </div>
            <div className='py-4'>
              <div className='rounded-3xl overflow-hidden shadow-lg max-w-lg '>
                <img src="portfolio_12x1200.jpg" alt="" className='w-full hover:scale-110 duration-300' />
              </div>

            </div>
            <div className='py-4'>
              <div className='rounded-3xl overflow-hidden shadow-lg max-w-lg'>
                <img src="portfolio_13.jpg" alt="" className='w-full hover:scale-110 duration-300' />
              </div>

            </div>
            <div className='py-4'>
              <div className='rounded-3xl overflow-hidden shadow-lg max-w-lg'>
                <img src="portfolio-14.jpg" alt="" className='w-full hover:scale-110 duration-300' />
              </div>

            </div>
            <div className='py-4'>
              <div className='rounded-3xl overflow-hidden shadow-lg max-w-lg'>
                <img src="portfolio_15x1200.jpg" alt="" className='w-full hover:scale-110 duration-300' />
              </div>

            </div>
            <div className='py-4'>
              <div className='rounded-3xl overflow-hidden shadow-lg max-w-lg'>
                <img src="portfolio-16.jpg" alt="" className='w-full hover:scale-110 duration-300' />
              </div>

            </div>
            <div className='py-4'>
              <div className='rounded-3xl overflow-hidden shadow-lg max-w-lg'>
                <img src="portfolio_17.jpg" alt="" className='w-full hover:scale-110 duration-300' />
              </div>

            </div>
            <div className='py-4'>
              <div className='rounded-3xl overflow-hidden shadow-lg max-w-lg'>
                <img src="portfolio_18x1200.jpg" alt="" className='w-full hover:scale-110 duration-300' />
              </div>

            </div>

          </div>

          <div className='pb-10'>
            <h1 className='text-2xl font-medium text-center mt-24'>TESTIMONIALS</h1>

            <div className='flex justify-center items-center pb-10 px-2'>
              <div className='border border-black rounded-full hover:bg-black hover:text-white '>
                <FontAwesomeIcon icon={faLessThan} size="sm" className=' h-10 w-10 flex justify-center items-center p-2' />
              </div>
              <div>
                <p className='max-w-[100%] text-2xl lg:text-6xl font-serif pt-12 text-center  sm:px-40 '>
                  “Yes that happened, but it doesn't define me. What does not kill me will only make me stronger.
                  I made a mistake,but it doesn't define me but it doesn't. ”
                </p>
                <span className='flex justify-center items-center pt-4'>Linda Baryant </span>
                <span className='flex justify-center items-center leading-normal'>Product Manager,Biosynthesis</span>

              </div>
              <div className='border border-black rounded-full hover:bg-black hover:text-white'>
                <FontAwesomeIcon icon={faGreaterThan} size="sm" className='h-10 w-10 flex justify-center items-center p-2' />
              </div>
            </div>


          </div>
        </div>

      </div>




      <div className='bg-gradient-to-t from-yellow-400 rounded-[150px] '>
        <div className='px-4 xl:px-60'>
          <h1 className='lg:text-4xl text-3xl font-normal text-center mt-32'>EXPLORE MY RANGE OF SERVICES</h1>
          <p className='lg:text-8xl text-6xl  font-normal text-center pt-4'>Explore My Services</p>

          <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:gap-2 justify-items-center mt-10 gap-4 lg:gap-2'>
            <div className=' relative h-[300px] xl:h-[400px] lg:h-[300px] lg:w-[300px] w-[300px] xl:w-[450px]  rounded-3xl overflow-hidden shadow-md  py-10 bg-gray-100
             hover:bg-yellow-500 hover:scale-100 hover:-translate-y-1 transition delay-150 duration-300 ease-in-out hover:text-white'>

              <FontAwesomeIcon icon={faIntercom} size="2xl" className='h-10 w-10 pl-6' />
              <span className='flex absolute bottom-10 text-2xl font-medium pl-6'>Rang of Service</span>
            </div>
            <div className=' relative h-[300px] xl:h-[400px] lg:h-[300px] lg:w-[300px] w-[300px] xl:w-[450px] rounded-3xl overflow-hidden shadow-md  py-10 bg-gray-100
             hover:bg-yellow-500 hover:scale-100 hover:-translate-y-1 transition delay-150 duration-300 ease-in-out hover:text-white'>
              <FontAwesomeIcon icon={faArtstation} size="2xl" className='h-10 w-10  pl-6' />
              <span className='flex absolute bottom-10 text-2xl font-medium pl-6'>3D Artwork</span>

            </div>
            <div className='relative h-[300px] xl:h-[400px] lg:h-[300px] lg:w-[300px] w-[300px] xl:w-[450px] rounded-3xl overflow-hidden shadow-md  py-10 bg-gray-100
             hover:bg-yellow-500 hover:scale-100 hover:-translate-y-1 transition delay-150 duration-300 ease-in-out hover:text-white'>
              <FontAwesomeIcon icon={faNfcDirectional} size="2xl" className='h-10 w-10  pl-6' />
              <span className='flex absolute bottom-10 text-2xl font-medium pl-6'>Creative Direction</span>

            </div>
            <div className='relative h-[300px] xl:h-[400px] lg:h-[300px] lg:w-[300px] w-[300px] xl:w-[450px] rounded-3xl overflow-hidden shadow-md  py-10 bg-gray-100
             hover:bg-yellow-500 hover:scale-100 hover:-translate-y-1 transition delay-150 duration-300 ease-in-out hover:text-white'>
              <FontAwesomeIcon icon={faHeartCircleCheck} size="2xl" className='h-10 w-10 pl-6' />
              <span className='flex absolute bottom-10 text-2xl font-medium pl-6'>Artwork Concepts</span>

            </div>
            <div className=' relative h-[300px] xl:h-[400px] lg:h-[300px] lg:w-[300px] w-[300px] xl:w-[450px] rounded-3xl overflow-hidden shadow-md  py-10 bg-gray-100
             hover:bg-yellow-500 hover:scale-100 hover:-translate-y-1 transition delay-150 duration-300 ease-in-out hover:text-white'>
              <FontAwesomeIcon icon={faDailymotion} size="2xl" className='h-10 w-10 pl-6' />
              <span className='flex absolute bottom-10 text-2xl font-medium pl-6'>Motion Graphics</span>

            </div>
            <div className='relative h-[300px] xl:h-[400px] lg:h-[300px] lg:w-[300px] w-[300px] xl:w-[450px] rounded-3xl overflow-hidden shadow-md  py-10 bg-gray-100
             hover:bg-yellow-500 hover:scale-100 hover:-translate-y-1 transition delay-150 duration-300 ease-in-out hover:text-white'>
              <FontAwesomeIcon icon={faPenNib} size="2xl" className='h-10 w-10  pl-6' />
              <span className='flex absolute bottom-10 text-2xl font-medium pl-6'>Charactor Design</span>

            </div>


          </div>


          <div className='grid grid-cols-1 justify-items-center mt-32'>
            <div className='overflow-hidden'>
              <img src="inner_video_03.jpg" className=' rounded-[30px] lg:rounded-[60px] shadow-sm' alt="" />

            </div>

          </div>


          <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-4 py-20'>
            <div className='w-full text-start '>
              <div className='flex justify-start items-center gap-4'>
                <div>
                  <FontAwesomeIcon icon={faGlobe} size="2xl" />
                </div>
                <span className='text-lg font-medium'>CLIENT SERVERD</span>
              </div>
              <div className='py-4'>
                <hr className='h-[3px] w-full bg-black opacity-40' />
              </div>

              <p className='text-8xl font-medium'>85</p>
              <p className=''>Professionals are on staff to ensure that your business is running smoothly.</p>
            </div>
            <div className='w-full text-start '>
              <div className='flex justify-start items-center gap-4'>
                <div>
                  <FontAwesomeIcon icon={faGlobe} size="2xl" />
                </div>
                <span className='text-lg font-medium'>CLIENT SERVERD</span>
              </div>
              <div className='py-4'>
                <hr className='h-[3px] w-full bg-black opacity-40' />
              </div>

              <p className='text-8xl font-medium animate__animated animate__bounce'>425</p>
              <p className=''>Professionals are on staff to ensure that your business is running smoothly.</p>
            </div>
            <div className='w-full text-start'>
              <div className='flex justify-start items-center gap-4'>
                <div>
                  <FontAwesomeIcon icon={faGlobe} size="2xl" />
                </div>
                <span className='text-lg font-medium'>CLIENT SERVERD</span>
              </div>
              <div className='py-4'>
                <hr className='h-[3px] w-full bg-black opacity-40' />
              </div>

              <p className='text-8xl font-medium animate__animated animate__bounce'>35.5k</p>
              <p className=''>Professionals are on staff to ensure that your business is running smoothly.</p>
            </div>
          </div>

        </div>
      </div>

      <div className='rounded-b-[150px] pb-10'>
        <div className='px-6 xl:px-60 mt-10'>
          <div className='text-center gap-4'>
            <h1 className='text-2xl '>WEEKLY BLOG</h1>
            <span className='lg:text-[100px] text-[40px]'>Sketchbook Stories</span>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-6'>
            <div className=''>
              <div className='rounded-[40px] overflow-hidden shadow-lg transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-105 duration-700'>
                <img src="post_11.jpg" alt="" />
              </div>
              <div className='grid grid-cols-1 justify-start pt-8'>
                <span className='text-lg font-semibold text-gray-800'>February 15, 2024</span>
                <div className='py-3'>
                  <hr className='h-[3px] w-full bg-black opacity-40' />
                </div>
                <p className=' max-w-96 text-4xl font-semibold text-gray-800'>Reflecting on Growth and Trial</p>
                <p className='pt-4 pb-3 text-gray-700'>
                  Holistically pontificate installed base portals after maintainable products.
                  Phosfluorescently engage worldwide methodologies with technology. Seamlessly
                </p>
                <a href="" className='flex gap-2 hover:text-yellow-500 w-fit'>
                  <span>Read more</span>
                  <span>
                    <FontAwesomeIcon icon={faCircleArrowRight} size="lg" />
                  </span>
                </a>
              </div>
            </div>
            <div className=''>
              <div className='rounded-[40px] overflow-hidden shadow-lg transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-105 duration-700'>
                <img src="post_12.jpg" alt="" />
              </div>
              <div className='grid grid-cols-1 justify-start pt-8'>
                <span className='text-lg font-semibold text-gray-800'>January 30, 2024</span>
                <div className='py-3'>
                  <hr className='h-[3px] w-full bg-black opacity-40' />
                </div>
                <p className=' max-w-96 text-4xl font-semibold text-gray-800'>Navigating the World of Digital Illustration</p>
                <p className='pt-4 pb-3 text-gray-700'>
                  Collaboratively administrate empowered markets via plug-and-play networks.
                  Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize
                </p>
                <a href="" className='flex gap-2 hover:text-yellow-500 w-fit'>
                  <span>Read more</span>
                  <span>
                    <FontAwesomeIcon icon={faCircleArrowRight} size="lg" />
                  </span>
                </a>
              </div>
            </div>
            <div className=''>
              <div className='rounded-[40px] overflow-hidden shadow-lg transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-105 duration-700'>
                <img src="post_02.jpg" alt="" />
              </div>
              <div className='grid grid-cols-1 justify-start pt-8'>
                <span className='text-lg font-semibold text-gray-800'>January 20, 2024</span>
                <div className='py-3'>
                  <hr className='h-[3px] w-full bg-black opacity-40' />
                </div>
                <p className=' max-w-96 text-4xl font-semibold text-gray-800'>The Perfect Gouache Sketchbook</p>
                <p className='pt-4 pb-3 text-gray-700'>
                  Palo santo thundercats fingerstache man braid lomo, hashtag poke forage DIY keytar tilde.
                  Letterpress poke kogi skateboard. Affogato adaptogen cold-pressed put a
                </p>
                <a href="" className='flex gap-2 hover:text-yellow-500 w-fit'>
                  <span>Read more</span>
                  <span>
                    <FontAwesomeIcon icon={faCircleArrowRight} size="lg" />
                  </span>
                </a>
              </div>
            </div>

          </div>

          <div className="bg-cover bg-center bg-[url('/inner_banner_01.jpg')] rounded-3xl">
            <div className='flex justify-between items-center flex-col sm:justify-center sm:items-center sm:gap-10 lg:flex-row gap-4 mt-28 px-10 pb-4'>
              <div>
                <h1 className=' w-full text-[30px] sm:text-[40px] xl: font-bold lg:max-w-96 pt-4'>
                  Bring Your Vision To Life
                </h1>
              </div>
              <div className=' h-[250px] w-[250px] flex justify-center items-center'>
                <img src="man_01.png" alt="" />
              </div>
              <div className='flex justify-start items-center'>

                <span className='flex items-center xl:max-w-96 lg:w-fit text:sm xl:text-lg lg:text-sm font-semibold w-full'>
                  Let’s collaborate and create something extraordinary together.
                </span>
              </div>
              <div className='bg-yellow-600 py-4 px-4 lg:py-4 lg:px-6 rounded-[50px] hover:bg-yellow-300 '>
                <a href="" className=' max-w-60 flex justify-center items-center gap-2'>
                  <span className='max-w-96'>LET'S CONNECT</span>
                  <span> <FontAwesomeIcon icon={faCircleArrowRight} size="lg" /></span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className=' bg-gray-950 text-white'>
        <div className='px-12 xl:px-60  mt-10'>
          <div className='flex justify-center items-center flex-col lg:flex-row gap-10 xl:gap-28 pt-24 mt-24 '>
            <div>
              <h1 className='text-4xl font-semibold text-center lg:text-start'>kylo</h1>
              <p className='max-w-[300px] py-4 text-center lg:text-start'>Empowering Businesses to Thrive in the
                Digital Age with Innovative Solutions.
              </p>
              <div className='flex flex-col-reverse text-center lg:text-start'>
                <span>Mon-Fri: 9 AM ― 6 PM</span>
                <span>Saturday: 9 AM ― 4 PM</span>
                <span>Sunday: Closed</span>
              </div>
            </div>
            <div>
              <h1 className='text-2xl font-semibold text-center lg:text-start'>office</h1>
              <p className='max-w-[200px] py-4 text-center lg:text-start'>1432 Elm Street, Suite 100,
                New York, NY 10001
              </p>
              <div className='text-center lg:text-start'>
                <a href=""> <span>office@boldthemes.com</span></a>
                <p className='py-4'>+1800 123 4567</p>
              </div>
            </div>
            <div>
              <h1 className='text-2xl font-semibold text-center lg:text-start'>Services</h1>
              <div className=''>
                <a href="" className='flex flex-col-reverse gap-2 pt-4 text-center lg:text-start'>
                  <span>Managed IT Services</span>
                  <span>Cloud Solutions</span>
                  <span>Network Services
                  </span>
                  <span>Cyber Security</span>
                  <span>Backup & Recovery</span>
                </a>
              </div>
            </div>
            <div className=''>
              <h1 className=' text-2xl font-semibold text-center lg:text-start'>Services</h1>
              <div className=''>
                <a href="" className='flex flex-col-reverse gap-2 pt-4'>
                  <span>About Us</span>
                  <span>About Me</span>
                  <span>Services
                  </span>
                  <span>Portfolio</span>
                  <span>Contact Us</span>
                </a>
              </div>
            </div>

            <div>
              <h1 className=' text-2xl font-semibold'>Get In Touch</h1>
              <div className='flex items-center gap-2 pt-6'>
                <a href=""><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
                <a href=""><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
                <a href=""><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href=""><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
                <a href=""><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
                <a href=""><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>


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





    </>



  )






}

export default Homepage