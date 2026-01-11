type MenuItem = {
  href: string;
  label: string;
};

export const List: MenuItem[] = [
  { href: "/", label: "หน้าหลัก" },
  { href: `/viewpoint`, label: "มุมมองของเรา" },
  { href: `/webone/`, label: "สินค้าเว็บ1" },
  { href: `/webtwo/`, label: "สินค้าเว็บ2" },
  { href: `/cart`, label: "ตระกร้าสินค้า" },
  { href: "/policy", label: "นโยบายของเรา" },
  
  // { href: "/admin/createproduct", label: "เพิ่มสินค้า" },
];



export const AdminList: MenuItem[] = [

  {  href: `/webone/admin`, label: "สำหรับแอดมินเว็๋บที่1" },
  {  href: `/webtwo/admin`, label: "สำหรับแอดมินเว็๋บที่2" },

];