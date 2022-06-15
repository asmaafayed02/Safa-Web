import React from 'react'
import { social } from './data'
const SociolIcons = () => {
  return (
    <>
        {social.map(social=>{
            return <a href={ social.url } key={ social.id} className="white">{ social.icon }</a>
        })}
    </>
  )
}

export default SociolIcons