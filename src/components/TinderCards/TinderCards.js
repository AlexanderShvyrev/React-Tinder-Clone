import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

const TinderCards = () => {

    const [people, setPeople] = useState([])

    const fetchCards = () => {
        axios.get('http://localhost:8001/cards')
            .then(res => {
                console.log(res)
                setPeople(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchCards()
    }, [])

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
                        key={person._id}
                        preventSwipe={["up", "down"]}
                        onSwipe={dir => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.imgUrl})` }}
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
