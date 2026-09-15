import React from 'react'
import Slide from './Slide'
import "../Styles/home.css"
import SeasonalProducts from './SeasonalProducts'
import MostLovedRituals from './MostLovedRituals'
import JustIn from './JustIn'
import RecentAwards from './RecentAwards'

const Home = () => {
  return (
  <>
  <Slide/>


{/* =========================
    BHRINGRAJ HAIR RITUAL
========================= */}

<section className="bhringraj-section">

  {/* LEFT CONTENT */}

  <div className="bhringraj-content">

    <p className="bhringraj-small">
      AYURVEDIC HAIR CARE
    </p>

    <h2>
      Bhringraj
      <br />
      <span>Hair Ritual</span>
    </h2>

    <p className="bhringraj-title">
      A time-tested recipe that works to reduce
      hairfall and improve hair density.
    </p>

    <p className="bhringraj-description">
      Discover the ancient Ayurvedic secret to
      healthier, stronger hair.
    </p>

    <button className="bhringraj-button">
      EXPLORE NOW →
    </button>

  </div>


  {/* RIGHT IMAGE */}

  <div className="bhringraj-image">

    <img
      src="/media.jfif"
      alt="Bhringraj Hair Ritual"
    />

  </div>

</section>

<SeasonalProducts />
<MostLovedRituals/>
<JustIn />

  <section className="full-banner">

      <img
        src="/media.jfif"
        alt="Beauty Collection"
      />

    </section>
    <RecentAwards />
    <h1></h1>
  
  </>
  )
}

export default Home
