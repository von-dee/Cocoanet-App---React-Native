import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './pages/Home';
import Stream from './pages/Stream';
import Camera from './pages/Camera';
import Articles from './pages/Articles';
import Store from './pages/Store';
import Chatbot from './pages/Chatbot';
import Articlesdetail from './pages/Articlesdetail';

const AppNavigator = createStackNavigator({
        Home: { screen: Home },
        Stream: { screen: Stream },
        Camera: { screen: Camera },
        Articles: { screen: Articles },
        Articlesdetail: { screen: Articlesdetail },
        Store: { screen: Store },
        Chatbot: { screen: Chatbot },
    },
    {
        headerMode: 'none',
        navigationOptions: {
        headerVisible: false,
    }
   }
);


const AppNav = createAppContainer(AppNavigator);

export default AppNav;