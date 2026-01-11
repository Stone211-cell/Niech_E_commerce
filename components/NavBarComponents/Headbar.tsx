
import { currentUser } from "@clerk/nextjs/server";
import DropList from "./DropList";
import Link from "next/link";
import { Button } from "../ui/button";
import { AdminList } from "@/utils/menulist";

const Headbar = async () => {
  const user = await currentUser();
  const isAdmin = user?.privateMetadata?.IsAdmin === true;


  return (
    <div className="w-full bg-blue-300 p-5 border border-black-1 ">
      <div className="  flex  justify-between  px-5">
        <div className="flex gap-4">
          LOGO

          {isAdmin && <div>
              {AdminList.map((item, index) => (
              <Button key={index} asChild variant="default">
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
 
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
