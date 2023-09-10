import Navbar from '@/components/common/navbar'
import Image from 'next/image'
import background from "./background.jpg"
import feature from "./feature.jpg"
import ButtonCommon from '@/components/common/Button'
import { Button } from '@mui/material'
import Marquee from 'react-fast-marquee'
import { Scale } from 'lucide-react'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className=' relative'>
        <Image
          alt="Mountains"
          src={background}
          placeholder="blur"
          quality={100}
          // fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
        <div className=' h-80 absolute top-32 left-32 text-[50px] w-[300px] font-extrabold'>
          <div className='text-zinc-200'>
            OUR FIGHT IS FOR YOUR JUSTICE
          </div>
          <div className=' flex gap-x-5 mt-5'>
            <ButtonCommon
              title={"Explore"}
              type="contained"
            />
            <ButtonCommon
              title={"our AI Helper"}
              type="outlined"
            />
          </div>
        </div>
      </div>

      <div className='bg-slate-100 flex p-20'>
        <Image
          alt="Mountains"
          src={feature}
          placeholder="blur"
          quality={100}
          // fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
          className='w-[600px] h-[600px] pl-20'
        />

        <div className=' bg-slate-700 p-20'>
          <p className='text-zinc-400 text-lg font-bold'>OUR FEATURES</p>
          <h1 className='text-zinc-200 font-extrabold text-5xl pb-10'>Why Choose Us</h1>

          <div className='flex mb-5'>
            <div className='h-10 w-10 rounded-full bg-[#A78A5A] flex items-center justify-center'>
              01
            </div>
            <div className=' ml-5'>
              <h3 className=' font-bold text-lg'>Best Law Practices</h3>
              <p className=' text-zinc-300'>Ipsum duo tempor elitr rebum stet magna amet kasd. Ipsum magna ipsum ipsum stet ipsum</p>
            </div>
          </div>

          <div className='flex mb-5'>
            <div className='h-10 w-10 rounded-full bg-[#A78A5A] flex items-center justify-center'>
              02
            </div>
            <div className=' ml-5'>
              <h3 className=' font-bold text-lg'>Best Price</h3>
              <p className=' text-zinc-300'>Ipsum duo tempor elitr rebum stet magna amet kasd. Ipsum magna ipsum ipsum stet ipsum</p>
            </div>
          </div>

          <div className='flex mb-5'>
            <div className='h-10 w-10 rounded-full bg-[#A78A5A] flex items-center justify-center'>
              03
            </div>
            <div className=' ml-5'>
              <h3 className=' font-bold text-lg'>Trust & Creadibilty</h3>
              <p className=' text-zinc-300'>Ipsum duo tempor elitr rebum stet magna amet kasd. Ipsum magna ipsum ipsum stet ipsum</p>
            </div>
          </div>

        </div>
      </div>

      <div className='w-full flex justify-center bg-zinc-200 p-10'>
        <div className='w-11/12 flex bg-zinc-600'>
          <div className='p-10 w-[70%]'>
            <div className='font-extrabold text-5xl mb-5'>Let's Earn Also💸</div>
            <div className='text-lg font-semibold text-zinc-300'>Are you legal Service Providers such as Advocates, Arbitrators, Mediators, Notaries, Document Writers, etc</div>
            <div className='text-2xl mt-4 font-semibold text-zinc-100'>Join us & access our vast customers</div>
          </div>
          <div className='flex items-center justify-center ml-auto mr-auto'>
            <Button variant="contained" className=' bg-zinc-200 text-zinc-600 hover:bg-zinc-700 hover:text-zinc-200'>Provid Service & get clients</Button>
          </div>
        </div>
      </div>

      <div className=' bg-zinc-100 p-10 text-zinc-800 flex flex-col gap-y-5 text-center'>
        <div className=' font-extrabold text-2xl text-zinc-500'>Our Services</div>
        <Marquee speed={10} className='flex space-x-1' style={{}}>
          {/* <div className='flex mb-5'>
            <div className='h-10 w-10 rounded-full bg-[#A78A5A] flex items-center justify-center'>
              01
            </div>
            <div className=' ml-5'>
              <h3 className=' font-bold text-lg'>Best Law Practices</h3>
              <p className=' text-zinc-300'>Ipsum duo tempor elitr rebum stet magna amet kasd. Ipsum magna ipsum ipsum stet ipsum</p>
            </div>
          </div>

          <div className='flex mb-5'>
            <div className='h-10 w-10 rounded-full bg-[#A78A5A] flex items-center justify-center'>
              02
            </div>
            <div className=' ml-5'>
              <h3 className=' font-bold text-lg'>Best Price</h3>
              <p className=' text-zinc-300'>Ipsum duo tempor elitr rebum stet magna amet kasd. Ipsum magna ipsum ipsum stet ipsum</p>
            </div>
          </div>

          <div className='flex mb-5'>
            <div className='h-10 w-10 rounded-full bg-[#A78A5A] flex items-center justify-center'>
              03
            </div>
            <div className=' ml-5'>
              <h3 className=' font-bold text-lg'>Trust & Creadibilty</h3>
              <p className=' text-zinc-300'>Ipsum duo tempor elitr rebum stet magna amet kasd. Ipsum magna ipsum ipsum stet ipsum</p>
            </div>
          </div> */}

          <div className=' flex space-x-3 justify-between'>
            <div className='flex flex-col w-[300px] items-center justify-center bg-zinc-200 rounded-md p-10'>
              <div className='rounded-full bg-zinc-800 w-28 h-28 flex items-center justify-center'>
                <Scale className=' text-zinc-200 h-10 w-10' />
              </div>
              <div className='flex flex-col space-y-4 mt-5'>
                <p className=' font-bold text-2xl'>Business Law</p>
                <p>Invidunt lorem justo clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kas</p>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center w-[300px] bg-zinc-200 rounded-md p-10'>
              <div className='rounded-full bg-zinc-800 w-28 h-28 flex items-center justify-center'>
                <Scale className=' text-zinc-200 h-10 w-10' />
              </div>
              <div className='flex flex-col space-y-4 mt-5'>
                <p className=' font-bold text-2xl'>Business2 Law</p>
                <p>Invidunt lorem justo clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kas</p>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center w-[300px] bg-zinc-200 rounded-md p-10'>
              <div className='rounded-full bg-zinc-800 w-28 h-28 flex items-center justify-center'>
                <Scale className=' text-zinc-200 h-10 w-10' />
              </div>
              <div className='flex flex-col space-y-4 mt-5'>
                <p className=' font-bold text-2xl'>Business3 Law</p>
                <p>Invidunt lorem justo clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kas</p>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center w-[300px] bg-zinc-200 rounded-md p-10'>
              <div className='rounded-full bg-zinc-800 w-28 h-28 flex items-center justify-center'>
                <Scale className=' text-zinc-200 h-10 w-10' />
              </div>
              <div className='flex flex-col space-y-4 mt-5'>
                <p className=' font-bold text-2xl'>Business4 Law</p>
                <p>Invidunt lorem justo clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kas</p>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center w-[300px] bg-zinc-200 rounded-md p-10'>
              <div className='rounded-full bg-zinc-800 w-28 h-28 flex items-center justify-center'>
                <Scale className=' text-zinc-200 h-10 w-10' />
              </div>
              <div className='flex flex-col space-y-4 mt-5'>
                <p className=' font-bold text-2xl'>Business4 Law</p>
                <p>Invidunt lorem justo clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kas</p>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center w-[300px] bg-zinc-200 rounded-md p-10'>
              <div className='rounded-full bg-zinc-800 w-28 h-28 flex items-center justify-center'>
                <Scale className=' text-zinc-200 h-10 w-10' />
              </div>
              <div className='flex flex-col space-y-4 mt-5'>
                <p className=' font-bold text-2xl'>Business4 Law</p>
                <p>Invidunt lorem justo clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kas</p>
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  )
}
