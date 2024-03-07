import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
  const { Button } = pkg;
   
  export default function DropdownMenu() {
    return (
      <Menu>
        <MenuHandler>
          <Button>Open Menu</Button>
        </MenuHandler>
        <MenuList>
          <MenuItem>Menu Item 1</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
          <MenuItem>Menu Item 3</MenuItem>
        </MenuList>
      </Menu>
    );
  }
  