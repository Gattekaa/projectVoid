import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import Home from './pages/Home'
import SignIn from './pages/SignIn';
//import ThemeProvider from '@material-ui/core/styles';
import theme from './theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<h1>Not Found 404!</h1>} />
        </Routes>
      </BrowserRouter>
      {/* {
        url === 'http://localhost:3000/'
        ? <Home />
        : <SignIn />
      } */}

    </ThemeProvider>

  );
}

export default App;
