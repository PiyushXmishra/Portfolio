import React from 'react'
import { Connect } from './icons/icons'

const Footer = () => {
  return (
    <div>
        <div className="my-10 mb-20">
        <p className="text-3xl text-custom-teal text-center font-bold">
          &lt; i turn caffeine into code/&gt;
        </p>
      </div>
      <hr className=" stroke-custom-teal" style={{ color: "blue" }} />
      <div className="my-5 flex justify-center">
        <p className="text-2xl text-custom-teal font-semibold flex items-center">
          Let&apos;s Connect
          <span className="ml-2 items-center mt-2">
            <Connect />
          </span>
        </p>
      </div>
    </div>
  )
}

export default Footer