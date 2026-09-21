import React from 'react'
import Slide from './Slide'
import "../Styles/home.css"
import SeasonalProducts from './SeasonalProducts'
import MostLovedRituals from './MostLovedRituals'
import JustIn from './JustIn'
import RecentAwards from './RecentAwards'
import LatestReads from './LatestReads'
import GoldCharcoalSoap from './GoldCharcoalSoap'



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
  A refined vitamin C ritual that helps revive
  dull-looking skin, enhance radiance, and reveal
  a smoother, naturally luminous complexion.
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
        src="/home/serum/serumshow.jfif"
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
<GoldCharcoalSoap />
<JustIn />

  <section className="full-banner">

      <img
        src="/home/serum/serumdot.jfif"
        alt="Beauty Collection"
      />

    </section>
    {/* <RecentAwards /> */}
    <LatestReads />
  
  </>
  )
}

export default Home
