"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

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
