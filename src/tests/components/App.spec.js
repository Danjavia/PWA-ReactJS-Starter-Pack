import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../../components/App/App';

/** @test {AppComponent} */
describe('AppComponent', () => {

    /** @test {AppComponent#render-snapshot} */
    it('renders a snapshot', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    /** @test {AppComponent#render-without-crashing} */
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });
});
