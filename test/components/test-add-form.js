import React from 'react';
import chai, { expect } from 'chai';
import { mount } from 'enzyme';
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon';
import  sinonChai from 'sinon-chai';

import { AddForm } from '../../js/components/add-form';

chai.use(chaiEnzyme());
chai.use(sinonChai);

describe('<AddForm />', () => {
    it('Renders a text input', () => {
        const wrapper = mount(<AddForm />);
        const inputs = wrapper.find('input[type="text"]');
        expect(inputs).to.have.length(1);
    });
    it('Dispatches an action when submitted with full text', () => {
        const spy = sinon.spy();
        const wrapper = mount(<AddForm onAdd={spy} />);
        const inputs = wrapper.find('input[type="text"]');
        const input = inputs.first();
        const value = 'Test value';
        input.node.value = value;
        input.simulate('change', input);

        const form = wrapper.find('form').first();
        form.simulate('submit');
        expect(spy).to.have.been.calledOnce;
        expect(spy.args[0][0]).to.equal(value);
    });
    it('Doesn\'t dispatch when submitted with empty text', () => {
        const spy = sinon.spy();
        const wrapper = mount(<AddForm onAdd={spy} />);

        const form = wrapper.find('form').first();
        form.simulate('submit');
        expect(spy).not.to.have.been.called;
    });
});

