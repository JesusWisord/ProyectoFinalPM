import React from 'react';

const Header = ({isHome}) => {
  if (isHome) {
    return (
      <header className='full'>
        <a href="/">
          <figure>
            <img src="/platzi-master-logo.png" alt=""/>
          </figure>
        </a>
        <h1>@JesusWisord</h1>
      </header>
    )
  }
  return (
    <header className="simple">
        <a href="/">
          <figure>
            <img src="/platzi-master-logo.png" alt=""/>
          </figure>
        </a>
        <h1>@JesusWisord</h1>
    </header>
  )
}

export default Header
