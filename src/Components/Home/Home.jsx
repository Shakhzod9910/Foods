import { useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import evos from "./Fitter.jpg";

function Home() {
  let fastFood = [
    {
      brand_img: "https://termosumka.uz/wp-content/uploads/evos1-1024x360.png",
      brand_name: "Evos",
      brand_id: "11",
    },
    {
      brand_img: "https://www.afisha.uz/ui/catalog/2019/08/0719474.png",
      brand_name: "Max Way",
      brand_id: "12",
    },
    {
      brand_img: "https://www.afisha.uz/ui/catalog/2020/01/0411007.png",
      brand_name: "Oqtepa",
      brand_id: "13",
    },
    {
      brand_img: "https://dostavkainfo.uz/wp-content/uploads/2020/04/loook.jpg",
      brand_name: "Loook",
      brand_id: "14",
    },
    {
      brand_img:
        "https://seeklogo.com/images/K/kfc-logo-E3942BB987-seeklogo.com.png",
      brand_name: "Kfc",
      brand_id: "15",
    },
  ];

  let fast_food_dishes = [
    {
      meal_name: "Lavash",
      meal_img:
        "https://pasta.uz/upload/products/%D0%9B%D0%B0%D0%B2%D0%B0%D1%88.jpg",
      meal_cost: "21000",
      meal_id: "1",
    },
    {
      meal_name: "Lavash Chease",
      meal_img:
        "https://pasta.uz/upload/products/%D0%9B%D0%B0%D0%B2%D0%B0%D1%88%20(%D0%BA%D1%83%D1%80%D0%B8%D0%BD%D0%BD%D1%8B%D0%B9).jpg",
      meal_cost: "24000",
      meal_id: "2",
    },
    {
      meal_name: "Gamburger",
      meal_img:
        "https://pasta.uz/upload/products/%D0%A7%D0%B8%D0%B7%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80.jpg",
      meal_cost: "22000",
      meal_id: "3",
    },
    {
      meal_name: "Lavash Fitter",
      meal_img: "https://pasta.uz/upload/products/Fitter.jpg",
      meal_cost: "24000",
      meal_id: "4",
    },
  ];

  const actBtn = useRef(null);
  const orderAct = useRef(null);
  const resultModal = useRef(null);
  const getId = useRef(null);
  const register = useRef(null)
  const [order, setOrder] = useState([]);

  function modalActive(evt) {
    actBtn.current.classList.add("modalactive");
    let id = evt.currentTarget.getAttribute("data");
    console.log(id);
  }
  function removeModal(evt) {
    actBtn.current.classList.remove("modalactive");
    orderAct.current.classList.remove("orderactive");
  }
  function actRegister(evt) {
    register.current.classList.add("actregister");
  }
  function remRegister(evt) {
    register.current.classList.remove("actregister");
  }

  let orders2 = []
  

  function orderActive(evt) {
    orderAct.current.classList.add("orderactive");
    let orders = evt.currentTarget.getAttribute("data")
    fast_food_dishes.forEach((item)=>{
      if(item.meal_id == orders){
        orders2.push(item)
      }
    })
    console.log(orders2);
    
  }
  function resultAct(evt) {
    resultModal.current.classList.add("result_modal");
  }
  function remResult(evt) {
    resultModal.current.classList.remove("result_modal");
  }

  return (
    <>
      <section className="home">
        <div className="navbar">
          <span>Food delevery</span>
        </div>
        <div className="container">
          <div className="homeContent">
            <div className="navbox">
              <ul className="TipList">
                <Link to="/" className="tipListitems">
                  <li className="tipListitems nav_active">Fast foods</li>
                </Link>
                <Link to="/medium" className="tipListitems">
                  <li className="tipListitems ">National foods</li>
                </Link>
              </ul>
            </div>
            <div className="rooms">
              <ul className="_room">
                {fastFood &&
                  fastFood.map((row) => (
                    <li
                      className="treeple"
                      ref={getId}
                      key={row.brand_id}
                      data={row.brand_id}
                      onClick={modalActive}
                    >
                      <div className="items item_1">
                        <img src={row.brand_img} alt="" />
                      </div>
                      <span className="link_1">{row.brand_name}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="modal_foods " ref={actBtn}>
          <div className="container">
            <div className="header">
              <h1>
                <span>Evos </span> menu
              </h1>
              <i className="fas fa-home" onClick={removeModal}></i>
            </div>
            <ul>
              {fast_food_dishes &&
                fast_food_dishes.map((row) => (
                  <li className="items" key={row.meal_id} >
                    <img src={row.meal_img} alt="foto" />
                    <div className="prices">
                      <h2>{row.meal_name}</h2>
                      <span>
                        {row.meal_cost} so'm
                        <i className="fas fa-plus" onClick={orderActive} data={row.meal_id}></i>
                      </span>
                    </div>
                  </li>
                ))}
            </ul>
            <div className="orders" ref={orderAct} onClick={resultAct}>
              <i className="fas fa-cart-arrow-down"></i>
            </div>
            <div className="orderModal" ref={resultModal}>
              <div className="allOrders">
                <h1 className="selected">
                  SELECTED <i className="fas fa-times" onClick={remResult}></i>
                </h1>
                <ul>
                  {
                    orders2 && orders2.map((row)=>(
                      <li className="selected_item">
                    <h1>{row.meal_name}</h1>
                    <span>{row.meal_cost}</span>
                    <i className="fas fa-minus"></i>
                    <p>1</p>
                    <i className="fas fa-plus"></i>
                  </li>
                    ))
                  }
                </ul>
                <div className="result">
                  <span>
                    Total: <p>50000</p>
                  </span>
                  <button onClick={actRegister}>Confirm</button>
                </div>
                <div className="register" ref={register}>
                <h1>Enter informations<i className="fas fa-times" onClick={remRegister}></i></h1>
                <form>
                  <input type="text" placeholder="Name"/>
                  <input type="text" placeholder="Adress"/>
                  <input type="number" placeholder="Phone number"/>
                  <button>Submit</button>
                </form>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
