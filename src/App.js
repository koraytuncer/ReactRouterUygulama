import "./App.css";
import Logo from "./images/logo.png";
import AnaSayfa from "./components/AnaSayfa";
import Hakkimizda from "./components/Hakkimizda";
import Urunler from "./components/Urunler";
import Iletisim from "./components/Iletisim";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/anasayfa">
            <img src={Logo} className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/anasayfa" className="nav-link active">
                  Ana Sayfa
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/hakkimizda" className="nav-link">
                  Hakkımızda
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/urunler" className="nav-link">
                  Ürünler
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/iletisim" className="nav-link">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-3">
        <div className="row">
          <Routes>
            <Route path="/anasayfa" element={<AnaSayfa />} />
            <Route path="hakkimizda" element={<Hakkimizda />} />
            <Route path="urunler" element={<Urunler />} />
            <Route path="iletisim" element={<Iletisim />} />
          </Routes>
          <div className="col-md-12">
            <div className="alert alert-warning" role="alert">
              <Routes>
                <Route path="/:id" element={<Child />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Child() {
  let { id } = useParams();
  return (
    <div>
      <h3>ID:{id}</h3>
    </div>
  );
}

export default App;
