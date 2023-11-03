import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import dropdown_icon from '../Components/Assests/dropdown_icon.png';
import Item from '../Components/Item/Item';
import { ShopContext } from '../Context/ShopContext';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  // State for managing dropdown visibility and selected option
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState('');

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prevIsOpen) => !prevIsOpen);
  };

  // Function to handle selection of a sort option and sort the products accordingly
  const handleSortOptionSelect = (option) => {
    setSelectedSortOption(option);
    setIsDropdownOpen(false);

    // Sorting logic based on the selected option
    if (option === 'High to Low') {
      all_product.sort((a, b) => b.new_price - a.new_price);
    } else if (option === 'Low to High') {
      all_product.sort((a, b) => a.new_price - b.new_price);
    }
  };

  // Dropdown options
  const dropdownOptions = ['High to Low', 'Low to High'];

  return (
    <div className="shop-category">
      {/* Banner */}
      <img className="shopcategory-banner" src={props.banner} alt="" />

      {/* Index and Sort Section */}
      <div className="shopcategory-indexSort">
        <p>
          <span>
            Showing 1-12</span>out of 36 products
        </p>

        {/* Sort Button */}
        <div className="shopcategory-sort">
          <span className="sort-by-button" onClick={toggleDropdown}>
            {selectedSortOption || 'Select Option'} <img src={dropdown_icon} alt="" />
          </span>

          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="sort-dropdown">
              {dropdownOptions.map((option, index) => (
                <div key={index} onClick={() => handleSortOptionSelect(option)}>
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Product Grid */}
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
