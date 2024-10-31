import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuizStartPage } from './pages/QuizStartPage/QuizStartPage';
import { Quiz1 } from './pages/Q1/Quiz1';
import { Quiz2 } from './pages/Q2/Quiz2';
import { Quiz3 } from './pages/Q3/Quiz3';
import { Quiz5 } from './pages/Q5/Quiz5';
import { Quiz4 } from './pages/Q4/Quiz4';
import { ResultPage } from './pages/Results/ResultPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<QuizStartPage />} />
            <Route path="/question1" element={<Quiz1 />} />
            <Route path="/question2" element={<Quiz2 />} />
            <Route path="/question3" element={<Quiz3 />} />
            <Route path="/question4" element={<Quiz4 />} />
            <Route path="/question5" element={<Quiz5 />} />
            <Route path="/resultPage" element={<ResultPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>


  );
}

export default App;
