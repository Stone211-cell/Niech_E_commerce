
import { currentUser } from "@clerk/nextjs/server";
import DropList from "./DropList";
import Link from "next/link";

const Headbar = async () => {
  const user = await currentUser();
  const isAdmin = user?.privateMetadata?.IsAdmin === true;


  return (
    <div className="w-full bg-blue-300 p-5 border border-black-1 ">
      <div className="  flex  justify-between  px-5">
        <div className="flex gap-4">
          LOGO

          {isAdmin && <div>Admin Zone
            <p>หน้าแอดมินสำหรับเว็บที่1</p>
            <Link href={`/webtwo/admin/create`}>หน้าแอดมินสำหรับเว็บที่2 (เพิ่มสินค้า่)</Link>
          </div>}
        </div>


        <div className="flex">
          <DropList />
        </div>
      </div>
    </div>
  );
};
export default Headbar;
