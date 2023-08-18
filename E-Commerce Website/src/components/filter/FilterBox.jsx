import React, { useEffect, useState } from "react";
import "./FilterBox.css";
import { BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { applyFilters, applySort } from "../../features/FilterSlice";
import { getUniqueData } from "../../utilities/Utility";

const FilterBox = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.data);
  const filters = useSelector((state) => state.filter);
  const handleApplyFilters = (filter) => {
    dispatch(applyFilters(filter));
  };
  const handleApplySort = (e) => {
    const sortBy = e.target.value;
    dispatch(applySort(sortBy));
  };

  const categoryData = getUniqueData(data, "category");
  const companyData = getUniqueData(data, "company");
  const colorsData = getUniqueData(data, "colors");

  return (
    <div>
      <div className="filter-container">
        <div className="filter">
          <h2>Filters:</h2>
          <div className="filter-body">
            <div className="select">
              <label>Filter By Company:</label>
              <select
                onChange={(e) =>
                  handleApplyFilters({ ...filters, company: e.target.value })
                }
              >
                <option value="all">All</option>
                {companyData.map((company) => (
                  <option key={company} value={company}>
                    {company}
                  </option>
                ))}
              </select>
            </div>
            <div className="select">
              <label>Filter By Category:</label>
              <select
                onChange={(e) =>
                  handleApplyFilters({ ...filters, category: e.target.value })
                }
              >
                <option value="all">All</option>
                {categoryData.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="select">
              <label>Sort by Name:</label>
              <select onChange={handleApplySort}>
                <option value="Default">Default</option>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
              </select>
            </div>
            <div className="select colors">
              <label>Sort by Color:</label>
              <div className="color-body">
                {colorsData.map((curData, index) => {
                  return (
                    <>
                      <button
                        style={{
                          backgroundColor: curData,
                          borderRadius: "50%",
                          width: "1.2rem",
                          height: "1.2rem",
                          border: "2px solid #666",
                        }}
                        key={index}
                      ></button>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="product-type">
              <h4>Product Type</h4>
              <div className="product-body">
                <span>
                  <BiPlus />
                  Winter
                </span>
                <span>
                  <BiPlus />
                  Forma
                </span>
                <span>
                  <BiPlus />
                  Summer
                </span>
                <span>
                  <BiPlus />
                  Under
                </span>
                <span>
                  <BiPlus />
                  Germents
                </span>
                <span>
                  <BiPlus />
                  Wester
                </span>
              </div>
            </div>
            <div className="price-range">
              <label>
                Price Range:
                <input
                  type="range"
                  name="price"
                  min={0}
                  max={10000000}
                  onChange={(e) =>
                    handleApplyFilters({ ...filters, maxPrice: e.target.value })
                  }
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
