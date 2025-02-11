import Header from "./layouts/Header.tsx";
import Footer from "./layouts/Footer.tsx";

function App({children}) {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}

export default App
