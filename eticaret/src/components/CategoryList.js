import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const CategoryList = ({selectedCategory,categories, onSelectedCategory}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  if(!categories) return null;

  return(
    <div className="d-flex justify-content-center mt-3">
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle style={{border:"1px solid gainsboro",color:"black",width:"200px",backgroundColor:"#ebe8e8"}} caret>
          {selectedCategory?selectedCategory.name:"Tüm Ürünleri Göster"}
        </DropdownToggle>
        <DropdownMenu>
          {categories.map((category)=>(
            <DropdownItem onClick={()=>onSelectedCategory(category)} key={category.id}>{category.name}</DropdownItem>
          ))}
        <DropdownItem onClick={()=>onSelectedCategory(null)}>Tüm Ürünleri Göster</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
export default CategoryList;