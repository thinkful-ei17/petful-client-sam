import React from 'react';

export default class Pet extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {

        const pet = this.props.petToAdopt;

        return (
            <section className='pet-information'>
                <header>
                    <img src={pet.imageURL} alt={pet.imageDescription} />
                    {pet.name}
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
                    <button>Adopt</button>
                </main>
            </section>
        )
    }
}