import React from 'react'
import Slide from './Slide'
import "../Styles/home.css"
import SeasonalProducts from './SeasonalProducts'
import MostLovedRituals from './MostLovedRituals'
import JustIn from './JustIn'
import RecentAwards from './RecentAwards'
import LatestReads from './LatestReads'



const Home = () => {
  return (
  <>
  <Slide/>


{/* =========================
    BHRINGRAJ HAIR RITUAL
========================= */}

<section className="bhringraj-section">

  {/* Decorative background element */}
  <div className="bhringraj-decor"></div>

  {/* LEFT CONTENT */}
  <div className="bhringraj-content">

    <p className="bhringraj-small">
     Ancient Skin Care 
Wisdom brought back to life a time tested ritual for deeply hydrated,  youthful looking skin...
    </p>

    <h2>
     VITAMIN
      <br />
      <span> C SERUM</span>
    </h2>

    <div className="bhringraj-line"></div>

    <p className="bhringraj-title">
      A time-tested recipe that works to reduce
      hairfall and improve hair density.
    </p>

    <p className="bhringraj-description">
      Discover the ancient Ayurvedic secret to
      healthier, stronger and beautifully nourished hair.
    </p>

    <button className="bhringraj-button">
      <span>EXPLORE NOW</span>
      <b>→</b>
    </button>

  </div>

  {/* RIGHT IMAGE */}
  <div className="bhringraj-image">

    <div className="bhringraj-image-frame">

      <img
        src="/media.jfif"
        alt="Bhringraj Hair Ritual"
      />

    </div>

    {/* Image badge */}
    <div className="bhringraj-badge">
      <span>100%</span>
      <small>AYURVEDIC<br />RITUAL</small>
    </div>

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
    <LatestReads />
  
  </>
  )
}

export default Home
