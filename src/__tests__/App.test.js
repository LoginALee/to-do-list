import { create } from 'react-test-renderer'
import App from '../App'

let component
let header

describe('<App/ >', () => {
  beforeAll(() => {
    component = create(<App />)
    header = component.root.findAllByType('nav')
  })

  it('Renders correctly', () => {
    expect(component).toBeDefined()
  })

  it('Has a Header', () => {
    expect(header).toBeDefined()
  })
})
