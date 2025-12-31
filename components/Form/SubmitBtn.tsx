"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { Heart, RotateCw } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";

type btnSize = "default" | "lg" | "sm";

type SubmitBtnprops = {
  className?: string;
  size?: btnSize;
  text: string;
};
const SubmitBtn = ({ className, size = "default", text }: SubmitBtnprops) => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      size={size}
      className={`${className} bg-[#0d674ff4] text-white`}
    >
      {pending ? (
        <FontAwesomeIcon icon={faRotateRight} className="animate-spin" />
      ) : (
        <p className="text-white"> {text}</p>
      )}
    </Button>
  );
};
export default SubmitBtn;



export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  // console.log('is',isFavorite)
  const { pending } = useFormStatus()
  return <Button 
  type="submit"
  size='lg'
  variant='outline'
  className="bg-white"
  >
    {
      pending 
      ? <RotateCw className="animate-spin"/>
      : isFavorite
      ? <Heart fill="red"/>
      : <Heart />
    }
    </Button>;
};


export const SignInCardButton = () => {
  return (
    <SignInButton mode="modal">
      <Button size="icon" variant="outline">
        <Heart />
      </Button>
    </SignInButton>
  );
};

