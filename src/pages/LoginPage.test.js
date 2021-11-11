import { render, screen } from '@testing-library/react'
import LoginPage from './LoginPage'

test('says "Please Log In"', () => {
  render(<LoginPage/>)
  const message = screen.getByText('Please Log In')
  expect(message).toBeInTheDocument()
})
