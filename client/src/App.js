import {ThemeProvider} from 'styled-components'
import { GlobalStyled } from './components/GlobalStyled';
import { Route,Routes } from 'react-router';
import {theme} from './utils/themeData'
import Navbar  from './components/Navbar';
import Home from './pages/Home'
import Product from './pages/Product';
import NoMatch from './pages/NoMatch';
import Footer from './components/homepageComponent/Footer';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='product'>
          <Route path=':category'  element={<Product/>} />
          <Route path=':category/:product_id'  element={<ProductDetails/>} />
        </Route>
        <Route path='*' element={<NoMatch />} />
        <Route path='checkout' element={<Checkout />} />

      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
