import FormContainer from "@/components/Form/FormContainer";
import FormInput from "@/components/Form/FormInput";
import SubmitBtn from "@/components/Form/SubmitBtn";
import { profileCreate } from "../action/createprofileAction";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Background3D from "@/components/Animation/Background3D";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const ProfileCreatePage = async () => {
  const user = await currentUser();
  if (user?.privateMetadata.hasProfile) redirect("/");

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Background3D />

      <div className="relative z-10 w-full max-w-md px-4 animate-in fade-in zoom-in duration-500">
        <Card className="bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Welcome
            </CardTitle>
            <CardDescription className="text-gray-300">
              สร้างโปรไฟล์ของคุณเพื่อเริ่มต้นใช้งาน
            </CardDescription>
          </CardHeader>

          <CardContent>
            <FormContainer action={profileCreate}>
              <div className="space-y-4">
                {/* Name */}
                <div className="space-y-1">
                  <FormInput
                    name="name"
                    title="ชื่อ – นามสกุล"
                    type="text"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:bg-white/10 focus:border-indigo-500 transition-all rounded-lg"
                    labelClassName="text-gray-200 font-medium"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <FormInput
                    name="emailcontect"
                    title="อีเมลติดต่อ"
                    type="email"
                    placeholder="example@email.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:bg-white/10 focus:border-indigo-500 transition-all rounded-lg"
                    labelClassName="text-gray-200 font-medium"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <FormInput
                    name="phone"
                    title="เบอร์โทรศัพท์"
                    type="tel"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:bg-white/10 focus:border-indigo-500 transition-all rounded-lg"
                    labelClassName="text-gray-200 font-medium"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <SubmitBtn text="ลงทะเบียน" size="lg" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-6 rounded-xl shadow-lg shadow-indigo-500/20 transform transition-all active:scale-95" />
                </div>
              </div>
            </FormContainer>
          </CardContent>
        </Card>

        {/* Footer text */}
        <p className="mt-6 text-center text-xs text-gray-500">
          By creating an account, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};
export default ProfileCreatePage;
