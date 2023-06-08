import "./App.css";
import Header from "../src/components/navbar/Header";
import "./index.css";
import NewProductsPage from "./pages/NewProductsPage";
import { ContactPage } from "./ContactPage";


function App() {
  return (
    <div>
      <Header name="Apple nous contacter"  />
      <NewProductsPage  />
      <ContactPage />
      <main>{}</main>
    </div>
  );
}




export default App;
