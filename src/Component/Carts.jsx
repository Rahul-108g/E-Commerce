import { useDispatch, useSelector } from "react-redux";
import { deleteitm } from "../Feature/EcoSlice";

const Carts = ({ items }) => {
  const dispatch = useDispatch();
  console.log(items);

  return (
    <>
      <div
        className="border rounded-4 d-flex justify-content-evenly flex-wrap align-items-center mx-5 my-3 text-break"
        style={{ width: "700px" }}
      >
        <div className="left">
          <img src={`${items.imgSrc}`} style={{ width: "200px" }} alt="" />
        </div>

        <div className="right text-center">
          <h6>{items.title}</h6>
          <p>{items.description}</p>

          <a className="btn btn-primary  me-3">{items.price} ₹</a>
          <a href={`${items.amazonLink}`} className="btn btn-warning">
            Buy Now
          </a>
          <a
            onClick={() => dispatch(deleteitm(items.id))}
            className="btn btn-outline-danger ms-3 res1"
          >
            Delete
          </a>
        </div>
      </div>
    </>
  );
};
export default Carts;
