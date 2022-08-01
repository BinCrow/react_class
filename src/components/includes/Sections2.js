import React from 'react'

function Awardtext1({id, title, desc}) {
    return (
        <>
            <div className="top_t">
                <span>{title}</span>
                <p>{desc}</p>
            </div>
        </>
    )
}

function Awardtext2({id, title, desc}) {
  return (
      <>
          <div className="bottom_t">
              <span>{title}</span>
              <p>{desc}</p>
          </div>
      </>
  )
}

function Sections2({Award1, Award2}) {
  return (
    <section id="section2">
            <article className="sec2_inner container">
                <div className="sec2_wrap">
                    <div className="sec2_title">
                        <span>award</span>
                        <h2>best<br/>musical</h2>
                        <p>한국 뮤지컬 최초<br/>그랜드슬램 달성</p>
                    </div>
                    <div className="news_top">
                        {Award1.map((txt) => (
                            <Awardtext1 
                            key={txt.id} 
                            title={txt.title} 
                            desc={txt.desc} />
                        ))}
                    </div>
                    <div className="news_bottom">
                        {Award2.map((txt) => (
                            <Awardtext2
                            key={txt.id} 
                            title={txt.title} 
                            desc={txt.desc} />
                        ))}
                    </div>
                </div>
            </article>
    </section>
  )
}

export default Sections2