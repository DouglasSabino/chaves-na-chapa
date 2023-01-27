import UpdateHamburger from './Pages/UpdateHamburger';
import ContextProvider from './context/contextProvider';

function App() {
  return (
    <div>
      <ContextProvider>
        <UpdateHamburger />
      </ContextProvider>
    </div>
  );
}

export default App;
