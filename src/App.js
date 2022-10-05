import Header from "./Components/Header";
import Home from "./Components/Home";
import Detail from "./Components/Detail";

export default function App(){
  return(
    <div className='container'>
      <Header />
      <main>
        <Home />
        <Detail />
      </main>
    </div>
  )
}