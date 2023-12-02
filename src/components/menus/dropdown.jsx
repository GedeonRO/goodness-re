import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import { GridViewOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

const Dropdown = ({ categories, subcategories, items, products, title, type }) => {
  //

  // props 
  // const { categories, subcategories, items, products } = props;

  //
  const [display, setDisplay] = useState(false);
  const [globalDisplay, setGlobalDisplay] = useState(false);
  const [categorySelected, setCategoryselected] = useState(null);
  const [subcategorySelected, setSubcategoryselected] = useState([]);
  const [foundProduct, setFoundProduct] = useState([]);


  //
  const handleMouseOver = (category) => {
    setDisplay(true);
    let subcats = subcategories.filter((sub) => sub.category_data.id == category.id);
    let finalTab = [];
    if (subcats) {
      subcats.forEach((subcat) => {
        let items = getItemsWithId(subcat.id);
        if (items) {
          finalTab.push(
            {
              subcat: subcat.name,
              items: items
            }
          )
        }
      });
      setSubcategoryselected(finalTab);
    }
    setCategoryselected(category);
  }

  // const handleMouseOver = (category) => {
  //   setDisplay(true);
  //   let subcats = subcategories.filter((sub) => sub.category_data.id == category.id);
  //   let finalTab = [];
  //   if (subcats) {
  //     subcats.forEach((subcat) => {
  //       let items = getItemsWithId(subcat.id);
  //       if (items) {
  //         finalTab.push(
  //           {
  //             subcat: subcat.name,
  //             items: items
  //           }
  //           // {
  //           //   category: category,
  //           //   subcat: subcat,
  //           //   items: items,
  //           //   products: foundproduct,
  //           // }
  //         )
  //         // items.forEach((item) => {
  //         //   let foundproduct = getProductWithId(item.id);
  //         //   if (foundproduct) {
  //         //     // console.log(foundproduct)
  //         //     setFoundProduct(foundProduct);
  //         //     finalTab.push(
  //         //       {
  //         //         subcat: subcat.name,
  //         //         items: items
  //         //       }
  //         //       // {
  //         //       //   category: category,
  //         //       //   subcat: subcat,
  //         //       //   items: items,
  //         //       //   products: foundproduct,
  //         //       // }
  //         //     )
  //         //   }
  //         // })
  //       }
  //     });
  //     console.log(finalTab);
  //     setSubcategoryselected(finalTab);
  //   }
  //   setCategoryselected(category);
  // }

  // Get Items with subcategory id
  const getItemsWithId = (subcatid) => {
    let result = [];
    items.forEach((item) => {
      if (item.subcategory == subcatid) {
        result.push(item);
      }
    });

    return result;
  }

  const getProductWithId = (itemId) => {
    let result = [];
    products.forEach((product) => {
      if (product.item == itemId) {
        result.push(product);
      }
    });

    return result;
  }

  //
  const handleMouseOut = () => {
    setDisplay(!globalDisplay);
  }

  const handleGlobalDisplayChangeMouseOver = () => {
    setGlobalDisplay(!globalDisplay);
  }

  const handleGlobalDisplayChangeMouseOut = () => {
    setGlobalDisplay(false);
  }

  return (
    <div onClick={handleGlobalDisplayChangeMouseOver} className={styles.dropdown}>
      {/* <div onClick={handleGlobalDisplayChangeMouseOver} onMouseOver={handleGlobalDisplayChangeMouseOver} className={styles.dropdown}> */}
      <button className={styles.dropbtn}>
        <GridViewOutlined fontSize="small" />
        <span style={{ marginLeft: 7 }}> {title} </span>
      </button>
      {
        type == "category" && <div className={styles.dropdowncontent}>
          <div style={{ display: 'flex' }}>
            {
              globalDisplay && <div className={styles.tostylisedalink}>
                {
                  categories && categories.map(category => {
                    let name = category.name[0].toUpperCase() + category.name.toLowerCase().slice(1);
                    return (
                      <a onClick={handleMouseOut} onMouseOver={() => handleMouseOver(category)} > {name} </a>
                    );
                  })
                }
              </div>
            }
            {globalDisplay && (
              <div className={styles.sub}>
                {
                  subcategorySelected && subcategorySelected.map((item) => {
                    let name = item.subcat[0].toUpperCase() + item.subcat.toLowerCase().slice(1);
                    return (
                      <div className={styles.items}>
                        {/* <Link onClick={handleMouseOut} subcat="" to="/search" replace state={{ searchtype: "Sous catégories", value: name, key: "subcat" }} style={{ marginBottom: 8 }}>{name}</Link> */}
                        <a onClick={handleMouseOut} style={{ marginBottom: 8, textDecoration: "underline", fontSize: 15 }}>{name}</a>
                        <div style={{ marginBottom: 6 }}>
                          {
                            item.items && item.items.length > 0 && item.items.map((it) => {
                              return <Link onClick={handleMouseOut} to="/search" replace state={{ searchtype: "Items", value: it.name, key: it.id }} >{it.name}</Link>
                            })
                          }
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            )}
          </div>
        </div>
      }
    </div>
  );
};

export default Dropdown;
