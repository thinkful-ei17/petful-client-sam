import React from 'react';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        
        const dog = this.props.dogToAdopt;
        const cat = this.props.catToAdopt;

        return (
            <div className='dashboard'>
                <section className='cat adoption-information'>
                    <header>
                        <img src={cat.imageURL} alt={cat.imageDescription} />
                        {cat.name}
                    </header>
                    <main>
                        <dl>
                            <dt>Sex:</dt>
                            <dd>{cat.sex}</dd>
                            <dt>Age:</dt>
                            <dd>{cat.age}</dd>
                            <dt>Breed:</dt>
                            <dd>{cat.breed}</dd>
                            <dt>Story:</dt>
                            <dd>{cat.story}</dd>
                        </dl>
                        <button>Adopt</button>
                    </main>
                </section>
                <section className='dog adoption-information'>
                    <header>
                        <img src={dog.imageURL} alt={dog.imageDescription} />
                        {dog.name}
                    </header>
                    <main>
                        <dl>
                            <dt>Sex:</dt>
                            <dd>{dog.sex}</dd>
                            <dt>Age:</dt>
                            <dd>{dog.age}</dd>
                            <dt>Breed:</dt>
                            <dd>{dog.breed}</dd>
                            <dt>Story:</dt>
                            <dd>{dog.story}</dd>
                        </dl>
                        <button>Adopt</button>
                    </main>
                </section>
            </div>
        )
    }

}