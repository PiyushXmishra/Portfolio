"use client"
import React from 'react'
import {Github} from "@/components/icons/icons"
import {Me} from "@/components/icons/icons"
import {Twitter} from "@/components/icons/icons"
import {Linkedin} from "@/components/icons/icons"
import {Mail} from "@/components/icons/icons"
import Link from 'next/link'

const LinksStrip = () => {
  return (
    <div className='flex gap-x-24 justify-center'>
<a href="https://github.com/PiyushXmishra" target="_blank"><Github/></a>
<a href="https://in.linkedin.com/in/piyush-mishra-5b6aa129a" target="_blank"><Linkedin/></a>
<Link href="https://mail.google.com/mail/?view=cm&fs=1&to=piyushbhp83@gmail.com
" target="_blank"><Mail/></Link>
<a href="https://x.com/Piyuxh1501" target="_blank"><Twitter/></a>
<a href=""><Me/></a>
    </div>
  )
}

export default LinksStrip