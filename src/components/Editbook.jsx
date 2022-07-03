import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function Editbook() {
    const navigate = useNavigate();
      const { id } = useParams();
      const [book, setBook] = useState({});
      const [newbook, setNewbook] = useState({
            cover_photo: "",
            book_name: "",
            category: "",
            release_year: "",
      });
      useEffect(() => {
            axios.get(`http://localhost:8080/Books/${id}`)
                  .then((res) => setBook(res.data))
                  .catch((error) => console.error(error));
      }, []);
      const handlechange = (e) => {
            const { id, value } = e.target;

            setNewbook({
                  ...newbook,
                  [id]: value,
            });
      };
      const handlemodification = () => {
            const payload = newbook;
            const { book_name, cover_photo, release_year, category } = payload;
            if (
                  book_name == "" ||
                  cover_photo == "" ||
                  release_year == "" ||
                  category == ""
            ) {
                  alert("Fill all input box");
            } else {
                  axios.patch(`http://localhost:8080/Books/${id}`, payload)
                        .then((res) => console.log(res.data))
                        .then(()=> navigate("/"))
                        .catch((error) => console.error(error));
            }
      };
      return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                  <div
                        style={{
                              maxWidth: "300px",
                              lineHeight: "15px",
                              padding: "10px",
                        }}
                        className="bookitem-card"
                        key={book.id}
                  >
                        <img src={book.cover_photo} alt={book.id} />
                        <p>{book.book_name}</p>
                        <p>{book.category}</p>
                        <p>{book.release_year}</p>
                  </div>
                  <div style={{ margin: "30px" }}>
                        <div>
                              <input
                                    onChange={handlechange}
                                    type="text"
                                    id="cover_photo"
                                    placeholder="Book image url"
                              />
                        </div>
                        <div>
                              <input
                                    onChange={handlechange}
                                    type="text"
                                    id="book_name"
                                    placeholder="book name"
                              />
                        </div>
                        <div>
                              <input
                                    onChange={handlechange}
                                    type="text"
                                    id="release_year"
                                    placeholder="book release year"
                              />
                        </div>
                        <div>
                              <select onChange={handlechange} id="category">
                                    <option value="Novel">Novel</option>
                                    <option value="Thriller">Thriller</option>
                                    <option value="Motivational">
                                          Motivational
                                    </option>
                                    <option value="Science_Fiction">
                                          Science_Fiction
                                    </option>
                              </select>
                        </div>
                        <button onClick={handlemodification}>Add</button>
                  </div>
            </div>
      );
}

export default Editbook;
