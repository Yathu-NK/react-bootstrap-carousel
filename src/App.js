import Carousel from "./Components/Carousel/Carousel";


import City from "./Images/city.jpg";
import Salvador from "./Images/salvador.jpg";
import Ubc from "./Images/ubc.jpg";

function App() {

  const images = [
    {
        img: City
    },
    {
      img: Salvador,
    },
    {
      img: Ubc,
    },
  ];

  return (
    <div className="App">
      <Carousel
        title="Carousel title"
        subtitle="Carousel subtitle" 
        images={images} 
        autoplay={3000}
        >
            
        <button style={{height:"30px",width:"200px"}} >Start</button>
      </Carousel>
    </div>
  );
}

export default App;
