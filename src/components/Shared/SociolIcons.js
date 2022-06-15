import React from 'react'
import { social } from './data'
const SociolIcons = (props) => {
  return (
    <>
        {social.map(social=>{
            return <a href={ social.url } key={ social.id} className={props.color}>{ social.icon }</a>
        })}
    </>
  )
}

export default SociolIcons