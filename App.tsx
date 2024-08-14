import * as React from 'react';
import Navigation from './src/router/Navigation';
import SplashScreen from 'react-native-splash-screen';

function App() {
  React.useEffect(() => {
    SplashScreen.hide(); // Hide the splash screen after the app has loaded
  }, []);
  return <Navigation />;
}
export default App;
