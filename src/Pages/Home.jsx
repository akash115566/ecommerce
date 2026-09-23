import React from 'react'
import Slide from './Slide'
import "../Styles/home.css"
import SeasonalProducts from './SeasonalProducts'
import MostLovedRituals from './MostLovedRituals'
import JustIn from './JustIn'
import RecentAwards from './RecentAwards'
import LatestReads from './LatestReads'
import GoldCharcoalSoap from './GoldCharcoalSoap'
import BhringrajSection from './BhringrajSection'
import Leadpopup from './Leadpopup'
import Gifting from './Gifting'



const Home = () => {
  return (
  <>
  <Leadpopup />
  <Slide/>
  <Gifting />


{/* =========================
    BHRINGRAJ HAIR RITUAL
========================= */}

{/* <section className="bhringraj-section">

 
  <div className="bhringraj-decor"></div>


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


  <div className="bhringraj-image">

    <div className="bhringraj-image-frame">

      <img
        src="/home/serum/serumshow.jfif"
        alt="Bhringraj Hair Ritual"
      />

    </div>

    <div className="bhringraj-badge">
      <span>100%</span>
      <small>AYURVEDIC<br />RITUAL</small>
    </div>

  </div>

</section> */}
<BhringrajSection />


<SeasonalProducts />
<MostLovedRituals/>
<GoldCharcoalSoap />
<JustIn />

     <section className="full-banner">

      {/* MAIN BANNER IMAGE */}
      <img
        src="/home/serum/serumdot.jfif"
        alt="Tellus Beauty Collection"
        className="full-banner-image"
      />

      {/* DARK SOFT OVERLAY */}
      <div className="full-banner-overlay"></div>


      {/* RUNNING TOY / CHARACTER */}
      <div className="running-character">
        <span>🏃</span>
      </div>


      {/* CENTER CONTENT */}
      <div className="full-banner-content">

        <h2>
          WHAT LED US
          <br />
          TO OUR BEAUTY RITUALS
        </h2>

        <button className="banner-play">
          ▶
        </button>

      </div>


      {/* BOTTOM ANIMATED PRODUCT */}
      <div className="bottom-product-animation">

        <img
          src="/home/serum/serumblack.jfif"
          alt="Tellus Premium Product"
        />

      </div>


      {/* BOTTOM DECORATIVE LINE */}
      <div className="banner-bottom-line"></div>

    </section>
    {/* <RecentAwards /> */}
    <LatestReads />
  
  </>
  )
}

export default Home
