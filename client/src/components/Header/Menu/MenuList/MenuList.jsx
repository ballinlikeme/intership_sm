import React from "react";
import { MenuElement } from "./MenuElement/MenuElement";
import { useGetMenuItemsQuery } from "lib/redux/api/menuApi";
import "./MenuList.css";

export const MenuList = ({ isActive }) => {
  const { data, isLoading, isError } = useGetMenuItemsQuery();

  if (isLoading || isError || !data.length) {
    return <div></div>;
  }

  if (data && data.length) {
    return (
      <ul
        className={isActive ? "menu__list active" : "menu__list"}
        id="menu-body"
      >
        {data.map((item) => (
          <MenuElement
            key={item.id}
            title={item.title}
            childrenItems={item.children || []}
          />
        ))}
      </ul>
    );
  }
};
