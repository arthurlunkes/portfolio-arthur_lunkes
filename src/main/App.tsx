import ThemeSwitcher from '../components/ThemeSwitch/ThemeSwitch';
import Main from '../components/template/Main';

function App() {
  return (
    // <div className='App'>
    //   <header className='App-header'>
    //     <p className='App-intro'>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <ThemeSwitcher />
    //   </header>
    // </div>
    <div className='App'>
      <header className='App-header'>
        <Main />
        <ThemeSwitcher />
      </header>
    </div>
  );
}

export default App;
