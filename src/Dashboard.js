import React from 'react';
import { connect } from 'react-redux';
import { fetchCat } from './actions/cat';
import { fetchDog } from './actions/dog';
import Pet from './components/Pet';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchCat());
        this.props.dispatch(fetchDog());
    }
    
    onAdoptCat() {
        console.log('A cat was adopted.');
    };

    onAdoptDog() {
        console.log('A dog was adopted.')
    };

    render() {
        const cat = this.props.cat;
        const dog = this.props.dog;

        return (
            <div className='dashboard'>
                <Pet petToAdopt={cat} onAdoptPet={this.onAdoptCat} />
                <Pet petToAdopt={dog} onAdoptPet={this.onAdoptDog} />
            </div>
        )
    }
};

const mapStateToProps = state => ({
    cat: state.cat.data,
    dog: state.dog.data
});

export default connect(mapStateToProps)(Dashboard);

