import { useSelector } from "react-redux";
import Posts from "./Posts";
import { useState } from "react";

const PostList = () => {
  const { user, search, navdata } = useSelector((state) => state.app);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 7;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = user.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(user.length / recordsPerPage);
  const number = [...Array(nPage - 6).keys()].slice(1);

  return (
    <>
      <div className="container mt-5 don1">
        {records &&
          records
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

            .map((val) => <Posts key={val.id} item={val} />)}
      </div>
      <nav>
        <ul className="pagination justify-content-center my-5">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prePage}>
              Prev
            </a>
          </li>

          {number.map((n, i) => (
            <li
              className={`page-item ${currentPage === n ? "active" : ""}`}
              key={i}
            >
              <a
                href="#"
                className="page-link"
                onClick={() => {
                  changeCPage(n);
                }}
              >
                {n}
              </a>
            </li>
          ))}

          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );

  function prePage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }
  function nextPage() {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }
};

export default PostList;
