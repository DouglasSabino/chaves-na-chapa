import mockImage from "../assets/1675084693190-mock-photo.jpg"; 

function CategoryCard(props) {

  const comboClick = () => {
    console.log("clique Combo");
  }

  const artesanalClick = () => {
    console.log("clique Artesanal");
  }

  const tradicionalClick = () => {
    console.log("clique Tradiconal");
  }

  const lanchesClick = () => {
    console.log("clique Lanches");
  }

  const sobremesasClick = () => {
    console.log("clique Sobremesas");
  }

  const bebidasClick = () => {
    console.log("clique Bebidas");
  }

  const handleClick = () => {
    if (props.category === "Combos") comboClick();
    if (props.category === "Hamburgeres Artesanais") artesanalClick();
    if (props.category === "Hamburgeres Tradicinais") tradicionalClick();
    if (props.category === "Lanches") lanchesClick();
    if (props.category === "Sobremesas") sobremesasClick();
    if (props.category === "Bebidads") bebidasClick();

    
  }

  return(
    <div className="border border-black bg-[#EFA73C] rounded-lg 
    shadow-sm shadow-black text-center font-dacing mt-12 ml-7 mr-7"
    onClick={handleClick}
    >
        <img src={mockImage} alt="imagem referencia categoria"/>
        <h1 className="text-2xl pt-5 mb-5">{props.category}</h1>
    </div>
  );
}

export default CategoryCard;
