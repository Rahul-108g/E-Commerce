import { useDispatch } from "react-redux";
import { navdatam, searchm } from "../Feature/EcoSlice";

const Navbar3 = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="tox  d-flex flex-wrap justify-content-between align-items-center">
        <div className="tox1 ">
          {" "}
          <button
            type="submit"
            onClick={(e) => {
              dispatch(navdatam(e.target.value));
            }}
            className="btn"
          >
            Filter {"By->"}
          </button>
        </div>

        <div className="tox2 mox">
          {" "}
          <button
            style={{ border: "aliceblue", width: "150px" }}
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
        </div>

        <div className="tox3 mox">
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
        </div>

        <div className="tox4 mox">
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
        </div>

        <div className="tox5 mox">
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
        </div>

        <div className="tox6 mox">
          {" "}
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
        </div>

        <div className="tox7 mox">
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
        </div>

        <div className="tox8 mox">
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
        </div>

        <div className="tox9 mox">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar3;
