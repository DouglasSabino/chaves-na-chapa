import Header from "../components/Header";
import CategoryCard from "../components/CategoryCard";

function Home() {
    return(
      <div className="w-full h-screen overflow-y-scroll bg-[url('./assets/bg.jpg')] bg-opacity-0 bg-slate-300">
          <Header />
          <div className="mt-36 mb-10">
            <CategoryCard category="Combos"/>
            <CategoryCard category="Hamburgeres Artesanais"/>
            <CategoryCard category="Hamburgeres Tradicinais"/>
            <CategoryCard category="Lanches"/>
            <CategoryCard category="Sobremesas"/>
            <CategoryCard category="Bebidas"/>
          </div>
      </div>
    );
  }
  
  export default Home;
