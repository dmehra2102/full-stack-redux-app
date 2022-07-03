import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

function Filter() {
      const dispatch = useDispatch();
      const [searchParams, setSearchParams] = useSearchParams();
      const initialsearchParams = searchParams.getAll("category");
      const initialsearchsort = searchParams.get("sortBy");
      const [category, setCategory] = useState(initialsearchParams || []);
      const [sortBy, setSortBy] = useState(initialsearchsort || "");
      const handlecategory = (e) => {
            const { value } = e.target;
            const newCategory = [...category];
            if (newCategory.includes(value)) {
                  newCategory.splice(category.indexOf(value), 1);
            } else {
                  newCategory.push(value);
            }

            setCategory(newCategory);
      };
      useEffect(() => {
            if(category){
                  setSearchParams({ category: category });
            }
            
      }, [category, dispatch, searchParams]);
      const handlesort = (e) => {
            const { value } = e.target;
            setSortBy(value);
      };
      useEffect(() => {
            if (sortBy) {
                  let param = {
                        category: searchParams.getAll("category"),
                        sortBy,
                  };
                  setSearchParams(param);
            }
      }, [dispatch, searchParams, setSearchParams, sortBy]);

      return (
            <div>
                  <div>
                        <h3>SORT BY CATEGORY</h3>
                        <div>
                              <label>Novel</label>
                              <input
                                    type="checkbox"
                                    name="category"
                                    id="Novel"
                                    value="Novel"
                                    onChange={handlecategory}
                                    defaultChecked={category.includes("Novel")}
                              />
                        </div>
                        <div>
                              <label>Thriller</label>
                              <input
                                    type="checkbox"
                                    name="category"
                                    id="Thriller"
                                    value={"Thriller"}
                                    onChange={handlecategory}
                                    defaultChecked={category.includes(
                                          "Thriller"
                                    )}
                              />
                        </div>
                        <div>
                              <label>Science_Fiction</label>
                              <input
                                    type="checkbox"
                                    name="category"
                                    id="Science_Fiction"
                                    value={"Science_Fiction"}
                                    onChange={handlecategory}
                                    defaultChecked={category.includes(
                                          "Science_Fiction"
                                    )}
                              />
                        </div>
                        <div>
                              <label>Motivational</label>
                              <input
                                    type="checkbox"
                                    name="category"
                                    id="Motivational"
                                    onChange={handlecategory}
                                    defaultChecked={category.includes(
                                          "Motivational"
                                    )}
                                    value={"Motivational"}
                              />
                        </div>
                  </div>
                  <div>
                        <h3>SORT BY RELEASE YEAR</h3>
                        <div>
                              <label>Ascending</label>
                              <input
                                    onChange={handlesort}
                                    type="radio"
                                    name="sort"
                                    id="sort_year"
                                    value={"asc"}
                              />{" "}
                              <br />
                              <label>Descending</label>
                              <input
                                    onChange={handlesort}
                                    type="radio"
                                    name="sort"
                                    id="sort_year"
                                    value={"desc"}
                              />
                        </div>
                  </div>
            </div>
      );
}

export default Filter;
