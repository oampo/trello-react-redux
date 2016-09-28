import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon';
import  sinonChai from 'sinon-chai';

import { AddForm } from '../../js/components/add-form';

chai.use(chaiEnzyme());
chai.use(sinonChai);

describe('<AddForm />', () => {
    it('Renders a text input', () => {
        const wrapper = shallow(<AddForm />);
        const inputs = wrapper.find('input[type="text"]');
        expect(inputs).to.have.length(1);
    });
});

