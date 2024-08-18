"use client";
import { useState } from "react";
import styles from "./manageProduct.module.css";
import styles2 from "./products.module.css";
const { default: Products } = require("./products");
const { default: Sidebar } = require("./sidebar");

const ManageProduct = ({ products }) => {
  console.log(products, "sddddddddddddddddddddddddddddd");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [heartStates, setHeartStates] = useState({});

  console.log(products, "productsproductsproducts");

  const filters = [
    {
      title: "Clothing",
      options: [
        { label: "Men's", value: "men's clothing" },
        { label: "Women's", value: "women's clothing" },
        { label: "All", value: "all-clothing" },
      ],
    },
    {
      title: "Items",
      options: [
        { label: "Electronics", value: "electronics" },
        { label: "Jewelry", value: "jewelery" },
      ],
    },
  ];

  const handleFilterChange = (selectedFilters) => {
    let filtered = [...products];
    console.log(selectedFilters, filtered, "filteredfilteredfilteredfiltered");
    const clothingFilters = selectedFilters["Clothing"] || [];
    const itemFilters = selectedFilters["Items"] || [];

    // Clothing
    if (clothingFilters.length > 0) {
      if (clothingFilters.includes("all-clothing")) {
        filtered = filtered.filter((product) =>
          product.category.includes("clothing")
        );
      } else {
        filtered = filtered.filter((product) =>
          clothingFilters.some((filter) => product.category === filter)
        );
      }
    }

    // Items
    if (itemFilters.length > 0) {
      filtered = filtered.filter((product) =>
        itemFilters.some((filter) => product.category === filter)
      );
    }

    // if no filters
    if (clothingFilters.length === 0 && itemFilters.length === 0) {
      filtered = products;
    }

    setFilteredProducts(filtered);
  };

  const toggleHeart = (productId) => {
    setHeartStates((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <>
      <div>
        <div className={styles.menu}>
          {/* <h4 className={styles.items}>20 ITEMS</h4> */}
          <button onClick={toggleFilter} className={styles.clickFilter}>
            {isFilterOpen ? "HIDE FILTER" : "SHOW FILTER"}
          </button>
          <div className={styles.dropdownContainer}>
            <button onClick={toggleDropdown} className={styles.dropdownButton}>
              RECOMMEND
            </button>
            {isOpen && (
              <div className={styles.dropdownContent}>
                <a href="#" className={styles.dropdownItem}>
                  NEWEST
                </a>
                <a href="#" className={styles.dropdownItem}>
                  POPULAR
                </a>
                <a href="#" className={styles.dropdownItem}>
                  PRICE
                </a>
              </div>
            )}
          </div>
        </div>
        <div
          className={styles.manageContainer}
          style={{
            gridTemplateColumns: isFilterOpen ? "30% 70%" : "100%",
          }}
        >
          <div
            className={styles.filterDiv}
            style={{ display: isFilterOpen ? "block" : "none" }}
          >
            <Sidebar onFilterChange={handleFilterChange} filters={filters} />
          </div>
          <div className={styles.productDiv}>
            <div className={styles2.container}>
              {filteredProducts.map((product, index) => {
                return (
                  <Products
                    index={index}
                    key={product.id}
                    product={product}
                    heartState={heartStates[product.id] || false}
                    onHeartToggle={() => toggleHeart(product.id)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageProduct;
