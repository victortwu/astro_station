import { render, screen } from '@testing-library/react'
import Profile from './Profile'

test('name: and email:', ()=> {
  render(<Profile/>)
  const name = screen.getByText('Name:')
  const email = screen.getByText('email:')
  expect(name).toBeInTheDocument()
  expect(email).toBeInTheDocument()
})
