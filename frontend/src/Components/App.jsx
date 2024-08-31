import { useSelector } from "react-redux";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Information from "./Information/Information";
import Id from "./Id/Id";


function App() {
  const {showId} = useSelector(state=>state)
  return (
    <div className="App">
      <Header />
      {
        showId?
        <Id />
        :
        <Information />
      }
      <Footer />
    </div>
  );
}

export default App;
