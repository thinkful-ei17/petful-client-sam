import React from 'react';
import Pet from './components/Pet';

export default class Dashboard extends React.Component {
    onAdoptCat() {
        console.log('A cat was adopted.');
    };

    onAdoptDog() {
        console.log('A dog was adopted.')
    };

    render() {

        const dog = {
            imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
            imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
            name: 'Zeus',
            sex: 'Male',
            age: 3,
            breed: 'Golden Retriever',
            story: 'Owner Passed away'
        };

        const cat = {
            imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
            imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
            name: 'Fluffy',
            sex: 'Female',
            age: 2,
            breed: 'Bengal',
            story: 'Thrown on the street'
        };

        return (
            <div className='dashboard'>
                <Pet petToAdopt={cat} onAdoptPet={this.onAdoptCat} />
                <Pet petToAdopt={dog} onAdoptPet={this.onAdoptDog} />
            </div>
        )
    }

}