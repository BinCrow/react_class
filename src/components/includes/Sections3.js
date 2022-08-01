import React from 'react'

function Actorname({id, name, link, image}) {
    return (
        <div className="actor">
            <img className="img" src={image} alt={name} />
            <div className="text">
                <strong>{name}</strong>
                <a href="/">{link}</a>
            </div>
        </div>
    )
}

function Sections3({Actor}) {
  return (
    <section id="section3">
        <article className="sec3_inner container">
            <h2>웃는 남자 출연배우</h2>
            <div className="actor_wrap">
                {Actor.map((txt) => (
                    <Actorname
                        key={txt.id} 
                        image={txt.image}
                        name={txt.name} 
                        link={txt.link}
                    />
                ))}
            </div>
            <div className="more"><a href="/">배우 더 보기</a></div>
        </article>
    </section>
  )
}

export default Sections3