import { Datsun, Ford, Suzuki, Honda } from "./component/model.js";

let data_obj = [
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/3ef1a06dd41a0079ff3e36294677c42b7f24983d.png?1584526260",
    brand: "Honda",
    model: "XUV500",
    price: "1666",
    id: "HON1",
    seats: "7",
    transmission: "Manual",
    fuel: "Diesel",
    rating: "5.0",
  },
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/59fca001231ef0e5665ea4e6e6b2eb2dd3d920dd.png?1584525284",
    brand: "Honda",
    model: "TUV300",
    price: "1333",
    id: "HON2",
    seats: "7",
    transmission: "Manual",
    fuel: "Diesel",
    rating: "3.1",
  },
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/063143885574b4ba5a1ae9a8b99f27cdeafeb170.JPG?1640076680",
    brand: "Honda",
    model: "Marazzo",
    price: "1333",
    id: "HON3",
    seats: "8",
    transmission: "Manual",
    fuel: "Diesel",
    rating: "5.0",
  },
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/063143885574b4ba5a1ae9a8b99f27cdeafeb170.JPG?1640076680",
    brand: "Honda",
    model: "KUV 100",
    price: "1166",
    id: "HON4",
    seats: "7",
    transmission: "Manual",
    fuel: "Petrol",
    rating: "4.9",
  },
  // Honda

  // Honda
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/55cf48c3aca88c14b839a360411dfe0dcc761c5a.jpg?1618911344",
    brand: "Honda",
    model: "Tigor",
    price: "1166",
    id: "HON1",
    seats: "5",
    transmission: "Manual",
    fuel: "Petrol",
    rating: "5.0",
  },
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/d44ae1d555cfe2dd4b499c3e75f2fcda0504a6de.JPG?1654862797",
    brand: "Honda",
    model: "Nexon",
    price: "1333",
    id: "HON2",
    seats: "7",
    transmission: "Manual",
    fuel: "Petrol",
    rating: "4.8",
  },
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/19eca74a7982804ba713dd9485861a7543422115.JPG?1638531037",
    brand: "Honda",
    model: "Tiago",
    price: "1166",
    id: "HON3",
    seats: "5",
    transmission: "Manual",
    fuel: "Petrol",
    rating: "5.0",
  },
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/95f6a817637e5bbc26dfbcb5a1a00808cfdcdeb6.png?1584525151",
    brand: "Honda",
    model: "Hexa",
    price: "1666",
    id: "HON4",
    seats: "7",
    transmission: "Manual",
    fuel: "Diesel",
    rating: "3.2",
  },
  // Honda

  // Suzuki
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/d748d92c90c3b84a32f4115da1e5bd3f3f352937.jpg?1615958311",
    brand: "Suzuki",
    model: "Baleno",
    price: "1166",
    id: "SUZ1",
    seats: "5",
    transmission: "Manual",
    fuel: "Petrol",
    rating: "3.0",
  },
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/4f978e418417cef5f069be1c013ee75b34c294ce.png?1613648724",
    brand: "Suzuki",
    model: "Swift",
    price: "1166",
    id: "SUZ2",
    seats: "5",
    transmission: "Manual",
    fuel: "Petrol",
    rating: "5.0",
  },
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/524fda673d85d7affc94f9c54ddb2ed1219d3a4d.JPG?1638612892",
    brand: "Suzuki",
    model: "Dzire(Petrol)",
    price: "1333",
    id: "SUZ3",
    seats: "5",
    transmission: "Manual",
    fuel: "Petrol",
    rating: "5.0",
  },
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/67ff26f4a0d5658901058b411ef69896b763d646.jpg?1640674355",
    brand: "Suzuki",
    model: "Celerio",
    price: "1166",
    id: "SUZ4",
    seats: "5",
    transmission: "Manual",
    fuel: "Petrol",
    rating: "5.0",
  },
  // Suzuki

  // Datsun
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/741d5e6e6b4a35cc2623eaf23e251357903995a1.jpg?1628513745",
    brand: "Datsun",
    model: "Redi-GO",
    price: "1166",
    seats: "5",
    transmission: "Manual",
    fuel: "Petrol",
    rating: "4.5",
    id: "DATS1",
  },
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/4e89a97a585c0f0145a7fbb9fbc8d83bf89c13a4.JPG?1628520075",
    brand: "Ford",
    model: "Aspire",
    price: "1166",
    seats: "5",
    transmission: "Manual",
    fuel: "Petrol",
    rating: "4.5",
    id: "FORD1",
  },
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/e47541c407f8ee906e9fa81c43c732ada5614617.png?1584526352",
    brand: "Ford",
    model: "Ecosport",
    price: "1333",
    seats: "5",
    transmission: "Manual",
    fuel: "Diesel",
    rating: "2.9",
    id: "FORD2",
  },
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/3bf7649c2df0514040ce86c781467daf2082f3b7.JPG?1625921612",
    brand: "Ford",
    model: "Figo",
    price: "1166",
    seats: "5",
    transmission: "Manual",
    fuel: "Petrol",
    rating: "4.5",
    id: "FORD3",
  },
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/9a1223f6808fd914fec05710f2a96f1c83fbb307.png?1584524611",
    brand: "Ford",
    model: "Freestyle",
    price: "1166",
    seats: "5",
    transmission: "Manual",
    fuel: "Diesel",
    rating: "4.5",
    id: "FORD4",
  },
];

//   model_car = localStorage.getItem("model_car");
let slider = document.getElementById("slider_price");
let value = document.getElementById("price_WRT_time");

let brand_type = document.getElementById("brand_model");
let div_model = document.getElementById("model");

brand_type.onchange = () => {   //uuperwala select
  if (brand_type.value == "Datsun") {
    div_model.innerHTML = Datsun();  //inport fetch data

    document.getElementById("Datsun").onchange = () => {  //niche wala select
      data_obj.forEach(ele => {
        if(ele.model == document.getElementById("Datsun").value){
          value.textContent = slider.value;
          slider.oninput = function () {
            value.textContent = this.value * ele.price;
          };
        }
      });
    };
  } else if (brand_type.value == "Honda") {
    div_model.innerHTML = Honda();
    document.getElementById("Honda").onchange = () => {
      data_obj.forEach(ele => {
        if(ele.model == document.getElementById("Honda").value){
          value.textContent = slider.value;
          slider.oninput = function () {
            value.textContent = this.value * ele.price;
          };
        }
      });
    };
  } else if (brand_type.value == "Suzuki") {
    div_model.innerHTML = Suzuki();
    document.getElementById("Suzuki").onchange = () => {
      data_obj.forEach(ele => {
        if(ele.model == document.getElementById("Suzuki").value){
          value.textContent = slider.value;
          slider.oninput = function () {
            value.textContent = this.value * ele.price;
          };
        }
      });
    };
  } else if (brand_type.value == "Ford") {
    div_model.innerHTML = Ford();
    document.getElementById("Ford").onchange = () => {
      data_obj.forEach(ele => {
        if(ele.model == document.getElementById("Ford").value){
          value.textContent = slider.value;
          slider.oninput = function () {
            value.textContent = this.value * ele.price;
          };
        }
      });
    };
  }
};
