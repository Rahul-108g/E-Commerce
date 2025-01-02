import { useDispatch } from "react-redux";
import { cartm } from "../Feature/EcoSlice";
import { Bounce, toast } from "react-toastify";

const Posts = ({ item }) => {
  const dispatch = useDispatch();

  const newData = () => {
    dispatch(cartm(item.id));

    toast.success("your data is added", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  return (
    <>
      <div className="card text-center" style={{ width: "300px" }}>
        <img
          src={`${item.imgSrc}`}
          className="card-img-top"
          style={{ width: "100%" }}
          alt=""
        />
        <div className="card-body">
          <h6 className="card-title" style={{ fontWeight: "bolder" }}>
            {item.title}
          </h6>
          <p className="card-text">{item.description}</p>
          <a href="" className="btn btn-primary  me-3 my-2">
            {item.price} ₹
          </a>
          <a onClick={newData} className="btn btn-warning">
            Add To Cart
          </a>
        </div>
      </div>
    </>
  );
};
export default Posts;
