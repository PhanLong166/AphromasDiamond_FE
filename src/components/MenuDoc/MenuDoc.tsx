import { Menu } from "antd";
import { Link } from "react-router-dom";

const menuItems = [
  {
    label: "Diamond Education",
    key: "diamond-education",
    children: [
      { label: "Learn about the 4Cs", key: "learn-4cs" },
      { label: "Diamond Certification", key: "diamond-certification" },
      { label: "Diamond Shape", key: "diamond-shape" },
    ],
  },
  { label: "Buying Guide", key: "buying-guide" },
  { label: "Metal Education", key: "metal-education" },
  { label: "Find Your Ring Size", key: "find-ring-size", path: "/find-size" },
  { label: "Earrings Education", key: "earrings-education" },
  { label: "Necklaces Education", key: "necklaces-education" },
  { label: "Bracelets Education", key: "bracelets-education" },
  { label: "Engagement Ring Education", key: "engagement-ring-education" },
  { label: "Wedding Ring Education", key: "wedding-ring-education" },
];

const MenuDoc = () => {
  return (
    <Menu
      mode="inline"
      className="menu"
    >
      {menuItems.map((item) => {
        if (item.children) {
          return (
            <Menu.SubMenu key={item.key} title={item.label}>
              {item.children.map((subItem) => (
                <Menu.Item key={subItem.key}>
                  <Link to={`/${subItem.key}`}>{subItem.label}</Link>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          );
        } else {
          return (
            <Menu.Item key={item.key}>
              <Link to={`/${item.key}`}>{item.label}</Link>
            </Menu.Item>
          );
        }
      })}
    </Menu>
  );
};

export default MenuDoc;
