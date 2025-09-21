type MenuItem = {
  href: string;
  label: string;
};

export const List: MenuItem[] = [
  { href: "/", label: "หน้าหลัก" },
  { href: `/viewpoint`, label: "มุมมองของเรา" },
  { href: `/product`, label: "สินค้าของคุณ" },
  { href: `/product`, label: "ตระกร้าสินค้า" },
  { href: "/policy", label: "นโยบายของเรา" },
  
  // { href: "/admin/createproduct", label: "เพิ่มสินค้า" },
];



export const AdminList: MenuItem[] = [

  { href: "/admin/createproduct", label: "เพิ่มสินค้า" },

];