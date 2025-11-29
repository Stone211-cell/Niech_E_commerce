import FormContainer from "@/components/Form/FormContainer";
import FormInput from "@/components/Form/FormInput";
import SubmitBtn from "@/components/Form/SubmitBtn";
import { ProfileCreate } from "../action/createprofileAction";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const ProfileCreatePage = async () => {
  const user = await currentUser();
  if (user?.privateMetadata.hasProfile) redirect("/");

  return (
      <article className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className=" p-5 items-center bg-white shadow-md rounded-md w-full max-w-xl">
      <FormContainer action={ProfileCreate}>
        <h1 className="text-2xl font-bold text-center">สมัครสมาชิก</h1>

        {/* Name */}
        <div>
          <FormInput name="name" title="ชื่อ – นามสกุล" type="text" />
        </div>

        {/* Email */}
        <div>
          <FormInput
            name="emailcontect"
            title="อีเมล"
            type="email"
            placeholder="@gmail.com"
          />
        </div>

        {/* เบอร์โทรติดต่อ */}
        <div>
          <FormInput name="phone" title="เบอร์โทรติดต่อ" type="text" />
        </div>

        {/* Submit button */}
        <SubmitBtn text="สมัครสมาชิก" size="lg" />
      </FormContainer>
    </div>
    </article>
  );
};
export default ProfileCreatePage;
