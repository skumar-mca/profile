import './App.css';
import Home from './components/home';
import useDeviceType from './hooks/use-device-type';

function App() {
  const deviceType = useDeviceType();

  return (
    <div className={`App device-type-${deviceType}`}>
      <Home />
    </div>
  );
}

export default App;
