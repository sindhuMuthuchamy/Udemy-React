import Navbar from './components/Navbar';
import Categories from './components/categories';
import Sale from './components/saleimg';
import Recommended from './components/recommended';
import Topics from './components/topics';
import Popular from './components/popular';
import Footer from './components/footer';


function App(){
    return(
        <>
            <Navbar></Navbar>
            <Categories></Categories>
            <Sale></Sale>
            <Recommended></Recommended>
            <Topics></Topics>
            <Popular></Popular>
            <Footer></Footer>
        </>
    )
}

export default App