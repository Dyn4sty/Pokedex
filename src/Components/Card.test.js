import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';

it('renders the Card Component', () => {
    const mockUrl = "https://pokeapi.co/api/v2/pokemon/?limit=807&offset=0"
    expect(shallow(<Card url={mockUrl} />)).toMatchSnapshot()
})