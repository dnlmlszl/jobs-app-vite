import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import img from '../assets/not-found2.svg'

const Error = () => {
  return (
    <Wrapper>
      <div>
        <img src={img} alt="not found" />
        <h3>Ohh! page not found</h3>
        <p>we can't seem to find the page you are looking for</p>
        <Link to='/' className='btn'>back home</Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
text-align: center;
display: flex;
align-items: center;
justify-content: center;
min-height: 100vw;
img {
  max-width: 600px;
  display: block;
  margin-bottom: 2rem;
}
h3 {
  margin-bottom: 0.5rem;
}
p {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: var(--grey-500);
}
a {
  color: var(--white);
  text-decoration: none;
}
`

export default Error