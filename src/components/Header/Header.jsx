import React from 'react'

const Header = () => {
  return (
    <header className=" z-50 top-0 mb-10">
             <div className=' grid sm:grid-cols-1 justify-center items-center' >
                <img 
                src='logo.png'
                height={23}
                width={250}
                className='mx-auto'
                
                />
             </div>
    </header>
  )
}

export default Header