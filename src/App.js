import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './App.css';
import HomePage from './veiw/pages/HomePage';
import ProductPage from './veiw/pages/product';
import ShopPage from './veiw/pages/shopPage';
 export default function App(){


return(<>
  <Router>
    <Routes>
      <Route path='/' element={<HomePage />} >  </Route>
      <Route path='/shop' element={<ShopPage />} >  </Route>
      <Route path='/shop/product:id' element={<ProductPage />} > </Route>
    </Routes>
  </Router>
</>);
}



// import axios from "axios";
// const Api = axios.create({ baseURL: 'https://api.storerestapi.com/' });
//  export default class App extends Component {
  // constructor() {
  //   super();
  //   Api.get('products').then(res => {
  //       console.log(res.data)
  //     });
  
  // };

//   render() {
//     return (
//      <></>
//     );
//   }
// }
