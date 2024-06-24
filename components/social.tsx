'use client'

import { signIn } from "next-auth/react"
import { FaDiscord } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

export const Social = () => {
  const onClick = (provider: 'google' | 'discord') => {
    signIn(provider, {
        callbackurl: '/',
    })
  }
  return (
    <div className='w-full items-center flex flex-row mt-4 space-x-2'>
      <div 
        onClick={() => onClick('google')}
        className='w-full flex justify-center bg-white rounded-[0.25rem] hover:outline hover:outline-2 outline-neutral-200 outline-offset-2 hover:opacity-80 cursor-pointer transition'
      >
        <FcGoogle className='my-2' size={30}/>
      </div>
      <div 
        onClick={() => onClick('discord')}
        className='w-full flex justify-center bg-[#5865F2] rounded-[0.25rem] hover:outline hover:outline-2 outline-offset-2 outline-[#5865F2] hover:opacity-80 cursor-pointer transition'
      >
        <FaDiscord className='my-2' size={30}/>
      </div>
  </div>
  )
}