import HomeScreen from './HomeScreen.jsx';
import AuthScreen from './AuthScreen.jsx';
import { userAuthStore } from '../../Store/authUser.js';

const HomePage = () => {

  const {user} = userAuthStore();
  return (
    <>
      {user ? <HomeScreen /> : <AuthScreen />}
    </>
    
  )
}

export default HomePage