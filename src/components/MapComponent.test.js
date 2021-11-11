import { render, screen } from '@testing-library/react'
import MapComponent from './MapComponent'

test('MapComponent rendering "International Space Station"', ()=> {
  render(<MapComponent/>)
  const iss = screen.getByText('International Space Station')
  expect(iss).toBeInTheDocument()
})
