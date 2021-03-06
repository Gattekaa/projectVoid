import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import Home from './pages/Home'
import SignIn from './pages/SignIn';
import theme from './theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GuestRoute from './routes/GuestRoute';
import './mock';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <GuestRoute path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<h1>Not Found 404!</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
