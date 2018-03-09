import React from 'react';

export default class Pet extends React.Component {
    render() {

        const pet = this.props.petToAdopt;

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
                    <button onClick={() => this.props.onAdoptPet()}>Adopt</button>
                </main>
            </section>
        )
    }
}