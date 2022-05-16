import './App.css';
import Header from './components/Header';
import Notes from './components/Notes';
import TextArea from './components/TextArea';

function App() {
  return (
    <div className="App">
      <Header />
      <TextArea />
      <Notes />
      <div className='footer'>Created by <a href='https://github.com/OsmanEkremKorkmaz' target='_blank'>Osman Ekrem Korkmaz</a></div>
    </div>
  );
}

export default App;
