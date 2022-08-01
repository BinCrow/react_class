import React from 'react'

function Posterlist1({id, title, desc, link, image}) {
    return (
        <li>
            <img className="img" src={image} alt={title} />
            <strong>{title}</strong>
            <p>{desc}</p>
            <a href="/">{link}</a>
        </li>
    )
}
function Posterlist2({id, title, desc, link, image}) {
    return (
        <li>
            <img className="img" src={image} alt={title} />
            <strong>{title}</strong>
            <p>{desc}</p>
            <a href="/">{link}</a>
        </li>
    )
}

function Sections4({Poster1, Poster2}) {
  return (
    <section id="section4">
        <article className="sec4_inner container">
            <div className="sec4_title">
                <h2>다른작품 구경하기</h2>
                <p>emk가 선사하는 다양한 뮤지컬</p>
            </div>
            <ul className="sec4_top">
                {Poster1.map((txt) => (
                    <Posterlist1
                        key={txt.id} 
                        image={txt.image}
                        name={txt.name} 
                        link={txt.link}
                    />
                ))}
            </ul>
            <ul className="sec4_bottom">
                {Poster2.map((txt) => (
                    <Posterlist2
                        key={txt.id} 
                        image={txt.image}
                        name={txt.name} 
                        link={txt.link}
                    />
                ))}
            </ul>
        </article>
    </section>
  )
}

export default Sections4