import { useDispatch } from "react-redux";
import { navdatam, searchm } from "../Feature/EcoSlice";

const Navbar2 = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="contanier-fluid ">
        <ul className="list-group list-group-flush  list-group-horizontal list-group-horizontal-sm">
          <a className="list-group-item   list-group-item-info list-group-item-action text-center ">
            <button
              style={{ border: "aliceblue" }}
              type="submit"
              onClick={(e) => {
                dispatch(navdatam(e.target.value));
              }}
              className="btn"
            >
              Filter {"By->"}
            </button>
          </a>

          <a className="list-group-item list-group-item-info list-group-item-action text-center">
            <button
              style={{
                border: "aliceblue",
                width: "150px",
              }}
              type="submit"
              value="No_Filter"
              onClick={(e) => {
                dispatch(navdatam(e.target.value));
              }}
              className="btn"
            >
              {" "}
              No Filter
            </button>
          </a>

          <a className="list-group-item list-group-item-info list-group-item-action text-center">
            <button
              style={{ border: "aliceblue", width: "150px" }}
              type="submit"
              value="mobiles"
              onClick={(e) => {
                dispatch(navdatam(e.target.value));
              }}
              className="btn"
            >
              {" "}
              Mobile
            </button>
          </a>

          <a className="list-group-item list-group-item-info list-group-item-action text-center">
            <button
              style={{ border: "aliceblue", width: "150px" }}
              type="submit"
              value="laptops"
              onClick={(e) => {
                dispatch(navdatam(e.target.value));
              }}
              className="btn"
            >
              {" "}
              Laptops
            </button>
          </a>
          <a className="list-group-item list-group-item-info list-group-item-action text-center">
            <button
              style={{ border: "aliceblue", width: "150px" }}
              type="submit"
              value="tablets"
              onClick={(e) => {
                dispatch(navdatam(e.target.value));
              }}
              className="btn "
            >
              {" "}
              Tablets
            </button>
          </a>

          <a className="list-group-item list-group-item-info list-group-item-action text-center">
            <button
              style={{ border: "aliceblue", width: "150px" }}
              type="submit"
              value="29999"
              onClick={(e) => {
                dispatch(navdatam(e.target.value));
              }}
              className="btn"
            >
              {">=29999 "}
            </button>
          </a>

          <a className="list-group-item list-group-item-info list-group-item-action text-center">
            <button
              style={{ border: "aliceblue", width: "150px" }}
              type="submit"
              value="49999"
              onClick={(e) => {
                dispatch(navdatam(e.target.value));
              }}
              className="btn "
            >
              {">=49999"}
            </button>
          </a>

          <a className="list-group-item list-group-item-info list-group-item-action text-center">
            <button
              style={{ border: "aliceblue", width: "150px" }}
              type="submit"
              value="69999"
              onClick={(e) => {
                dispatch(navdatam(e.target.value));
              }}
              className="btn"
            >
              {">=69999"}
            </button>
          </a>

          <a className="list-group-item list-group-item-info list-group-item-action text-center">
            <button
              style={{ border: "aliceblue", width: "100px" }}
              type="submit"
              value="89999"
              onClick={(e) => {
                dispatch(navdatam(e.target.value));
              }}
              className="btn"
            >
              {">=89999"}
            </button>
          </a>
        </ul>
      </div>
    </>
  );
};

export default Navbar2;
