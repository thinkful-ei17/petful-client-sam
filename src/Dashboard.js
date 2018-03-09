import React from 'react';
import { connect } from 'react-redux';
import { fetchCat, adoptCat } from './actions/cat';
import { fetchDog, adoptDog } from './actions/dog';
import Pet from './components/Pet';
import './Dashboard.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchCat());
        this.props.dispatch(fetchDog());
    }

    render() {
        const cat = this.props.cat;
        const dog = this.props.dog;

        return (
            <div className='dashboard'>
                <h1>
                    Petful Adoption Center
                </h1>
                <div className='pet-container'>
                    <Pet petToAdopt={cat} onAdoptPet={() => this.props.dispatch(adoptCat())} />
                    <Pet petToAdopt={dog} onAdoptPet={() => this.props.dispatch(adoptDog())} />
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    cat: state.cat.data,
    dog: state.dog.data
});

export default connect(mapStateToProps)(Dashboard);

