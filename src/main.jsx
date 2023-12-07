import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, Spinner } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { BrowserRouter } from 'react-router-dom';


const LoadingScreen = () => {
  return (
    <div className='spinnerContainer'>
      <div className='spinner'>
        <Spinner size='xl' color='black' />
      </div>
    </div>

  );
};

const MainApp = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {

    const delay = setTimeout(() => {
      setLoading(false); // Set loading to false after a delay (e.g., 2000ms)
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  return isLoading ? <LoadingScreen /> : <App />;
};



const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      backgroundImage: "url('background.jpeg') !important",
      backgroundSize: "cover",

    }
  })
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config, styles })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <MainApp />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
