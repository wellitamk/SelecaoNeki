import Page1 from 'App';
import Page2 from './pages/Register';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Login: Page1,
    Register: Page2,
  })
);

export default Routes;