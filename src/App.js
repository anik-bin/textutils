import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
/* import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"; */

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode"
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils - Light Mode"
    }

  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}></Alert>
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} /> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
