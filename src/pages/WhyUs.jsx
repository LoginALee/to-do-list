import React from 'react'
import './WhyUs.css'

const WhyUs = () => (
  <div className="main-container">
    <div className="image-container">
      <img src="/WhyUs.jpg" alt="whyUs background" />
    </div>
    <div className="text-container">
      <section className="ideas-section">
        <h2>Effortless, ideas translation</h2>
        <p>
          As easy as creating a new to-do and adding ideas on the go. You can
          add more and more items to your list whenever you want, with no
          restrictions!
        </p>
      </section>

      <section className="dreams-section">
        <h2>Anything is possible</h2>
        <p>
          In order for a dream to come true, you just need to make an action
          plan. Want to travel to Cancun in Mexico? Sure do!, you just need to
          plan how you are going to get there, how much money you need to save,
          etc. The thing is, do not just think about it, take action!
        </p>
      </section>

      <section className="app-section">
        <h2>No charges, free to use</h2>
        <p>
          Our goal is for more people to archive them goals, so our application
          is free to use and it will always will be, we maintain the proyect
          running thanks to donations.
        </p>
      </section>
    </div>
  </div>
)

export default WhyUs
