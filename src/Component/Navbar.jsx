import { BsCartCheck } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { searchm } from "../Feature/EcoSlice";

import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  return (
    <div className="container-flluid con1 sticky-top">
      <div className="container d-flex justify-content-between align-items-center flex-wrap con2">
        <div className="ecommerce">
          <h1 className="text-light txt1">E-Commerce</h1>
        </div>
        <div className="serch w-50">
          <input
            onChange={(e) => dispatch(searchm(e.target.value))}
            type="text"
            placeholder="Search Products"
            className="form-control "
          />
        </div>
        <Link to="/cart">
          <button type="button" className="btn btn-primary position-relative">
            <BsCartCheck className="cart" />

            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
