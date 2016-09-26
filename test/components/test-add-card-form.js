import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon';
import  sinonChai from 'sinon-chai';

import { AddCardForm } from '../../js/components/add-card-form';

chai.use(chaiEnzyme());
chai.use(sinonChai);

describe('<AddCardForm />', () => {
    it('Renders a text input', () => {
        const wrapper = mount(<AddCardForm />);
        const inputs = wrapper.find('input[type="text"]');
        expect(inputs).to.have.length(1);
        expect(inputs).to.have.ref('textInput');
    });
    it('Dispatches an action when submitted with full text');
    it('Doesn\'t dispatch when submitted with empty text');
});

