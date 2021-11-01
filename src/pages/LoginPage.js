const LoginPage = ({children}) => {

  const backgroundStyle = {
    position: 'absolute',
    top: '0',
    right: '0',
    left: '0',
    bottom: '0',
    background: 'radial-gradient(circle at 85%, var(--moonGray), var(--moonLavender), var(--dkMagenta), var(--dkPurple), black)'
  }

  const containerStyle = {
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    left: '2rem',
    bottom: '2rem',
    height: '60vh',
    backgroundColor: 'rgba(255, 255, 255, .1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 .3rem black',
    borderRadius: '.5rem',
  }

  return(
    <div style={backgroundStyle}>
      <div style={containerStyle}>
        <h1>astro<span style={{color: 'var(--burntOrange)'}}>Space</span></h1>
        <h3 style={{margin: '1rem'}}>Please Log In</h3>
        {children}
      </div>
    </div>
  )
}

export default LoginPage
