import { useSelector } from "react-redux";
import Carts from "./Carts";

const Cart = () => {
  const { cart } = useSelector((state) => state.app);
  console.log(cart);
  const { search, navdata } = useSelector((state) => state.app);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center align-item-center flex-wrap">
        {cart &&
          cart
            .filter((val) => {
              if (search.length === 0) {
                return val;
              } else {
                return val.title.toLowerCase().includes(search.toLowerCase());
              }
            })
            .filter((val) => {
              if (navdata.length == 0) {
                return val;
              } else if (navdata === "No_Filter") {
                return val;
              } else if (navdata === "mobiles") {
                return val.category == navdata;
              } else if (navdata === "laptops") {
                return val.category == navdata;
              } else if (navdata === "tablets") {
                return val.category == navdata;
              } else if (navdata >= "29999") {
                return val.price == navdata;
              } else if (navdata >= "49999") {
                return val.price == navdata;
              } else if (navdata >= "69999") {
                return val.price == navdata;
              } else if (navdata >= "89999") {
                return val.price == navdata;
              }
            })
            .map((val) => <Carts key={val.id} items={val} />)}
      </div>
    </div>
  );
};
export default Cart;
