import React from 'react';
import { configure, shallow, render} from 'enzyme';
import chai, { expect } from 'chai';
import App from '../components/App';
import chaiEnzyme from 'chai-enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App Component testing', function() {

  it('App renders main message', () => {
    const wrapper = shallow((<App/>));
    const editText = <p>Edit <code>src/components/App.js</code> and save to reload.</p>;
    expect(wrapper).to.contain(editText);

});

  chai.use(chaiEnzyme())

})
