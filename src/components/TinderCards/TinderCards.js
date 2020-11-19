import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

const TinderCards = () => {

    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg'
        },
        {
            name: 'Jeff Bezos',
            url: 'https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg'
        },
        {
            name: 'Ellen Degeneres',
            url: 'https://pyxis.nymag.com/v1/imgs/dc6/431/1f2359b510bceecc2722bccc0b19c7a0c2-ellen.rsquare.w1200.jpg'
        },
    ])

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete)
        // setLastDirection(direction)
    }

    const outOfFrame = name => {
        console.log((name + " left the screen"))
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards-cardContainer">
                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={dir => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
