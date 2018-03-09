import React from 'react';
import './Pet.css';

export default function Pet(props) {
    const pet = props.petToAdopt;

    if (!pet) {
        return (<div></div>)
    }

    return (
        <section className='pet-information'>
            <header>
                <img src={pet.imageURL} alt={pet.imageDescription} />
                <h2>
                    {pet.name}
                </h2>
            </header>
            <main>
                <dl>
                    <dt>Sex:</dt>
                    <dd>{pet.sex}</dd>
                    <dt>Age:</dt>
                    <dd>{pet.age}</dd>
                    <dt>Breed:</dt>
                    <dd>{pet.breed}</dd>
                    <dt>Story:</dt>
                    <dd>{pet.story}</dd>
                </dl>
                <button onClick={() => props.onAdoptPet()}>Adopt</button>
            </main>
        </section>
    )
}