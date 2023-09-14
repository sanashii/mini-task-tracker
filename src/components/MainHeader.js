import React from 'react'

const MainHeader = () => {

  const mainHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  };

  return (
    <header className ={mainHeaderStyle}>
        <h1>Sanashii's First React Project</h1>
    </header>
  )

}

export default MainHeader