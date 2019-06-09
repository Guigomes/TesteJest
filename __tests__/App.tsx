import 'react-native';
import React from 'react';
import GSTInicioPage2 from '../GSTInicioPage2';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
jest.mock('setupDevtools');

it('renders correctly', () => {

  console.log("TESTAR");
  const tree = renderer.create(
    <GSTInicioPage2 />
  );
});
