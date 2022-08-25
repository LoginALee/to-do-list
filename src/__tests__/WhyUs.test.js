import { create } from 'react-test-renderer'
import WhyUs from '../pages/WhyUs'

let component

describe('<WhyUs/ >', () => {
  beforeAll(() => {
    component = create(<WhyUs />)
  })

  it('Renders correctly', () => {
    expect(component).toBeDefined()
  })
})
