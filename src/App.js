import React from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Latest'
import Programs from './Components/Event'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Error from './Components/Error';
import Home from './Components/Home';
import Quotes from './Components/Quotes';
import QuotesContextProvider from './Context/QuotesContext';
import MusicContextProvider from './Context/MusicContext'
import FormContextProvider from './Context/FormContext';

function App() {
  return (
    <div className="App">
      <FormContextProvider>
        <MusicContextProvider>
          <QuotesContextProvider>
            <Router>
              <Routes>
                <Route path='/' element={<Header />}>
                  <Route index element={<Home />}/>
                  <Route path='music' element={<Body />}/>
                  <Route path='events' element={<Programs />}/>
                  <Route path='quotes' element={<Quotes />}/>
                  <Route path='*' element={<Error />}/>
                </Route>
              </Routes>
            </Router>
          </QuotesContextProvider>
        </MusicContextProvider>
      </FormContextProvider>
    </div>
  );
}

export default App;
