import React from 'react'

  function StoryText({id, simple, desc, link}) {
    return (
    <>
      <li>
          <p>{desc}</p>
          <span>{simple}</span>
          <a href="/">{link}</a>
      </li>
    </>
    )
  }

function Sections6({Story}) {
  return (
    <section id="section6">
        <article className="sec6_inner container">
            <div className="sec6_title">
                <h2>관람 후기</h2>
                <p>관람 객들이 전하는 후기</p>
            </div>
            <div className="sec6_box">
                <ul>
                    {Story.map((txt) => (
                        <StoryText
                            key={txt.id}
                            desc={txt.desc}
                            simple={txt.simple} 
                            link={txt.link}
                        />
                    ))}
                </ul>
                <a href="/" className="po">more</a>
            </div>
        </article>
    </section>
  )
}

export default Sections6