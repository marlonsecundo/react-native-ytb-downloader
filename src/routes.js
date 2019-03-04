import { createAppContainer, createStackNavigator } from 'react-navigation';

import { Main } from './pages';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
    },
    {
      headerMode: 'none',
    },
  ),
);

export default Routes;
