import React from 'react'
import {shallow} from 'enzyme'
import expect from 'expect'

const Text = (props) => <span>{props.children}</span>

describe('Test', () => {
    it('from', () => {
        const underTest = shallow(<Text>Hello</Text>)
        expect(true).toBe(false)
    })
})
