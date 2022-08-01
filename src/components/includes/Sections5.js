import React from 'react'

function Youtubetext({id, title, desc, link}) {
  return (
    <>
      <h2>{title}</h2>
      <p>{desc}</p>
      <a href="/">{link}</a>
    </>
  )
}

function Sections5({youtube}) {
  return (
    <section id="section5">
        <article className="sec5_inner container">
            <div className="yt">
              {youtube.map((txt) => (
                <Youtubetext
                  key={txt.id}
                  title={txt.title}
                  desc={txt.desc} 
                  link={txt.link}
                />
              ))}
            </div>
        </article>
    </section>
  )
}

export default Sections5