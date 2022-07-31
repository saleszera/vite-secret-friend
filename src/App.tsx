import { BrowserRouter } from 'react-router-dom';

import { RecoilRoot } from 'recoil';

import { Header } from './components/Header';
import { GlobalStyle } from './globalStyles';
import { Routes } from './routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <RecoilRoot>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
