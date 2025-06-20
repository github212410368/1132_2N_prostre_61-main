import Image from "next/image";
import loader from "@/assets/loader.gif";
export default function Loading_61() {
  return (
    <div className="flex justify-center items-center h-lvh w-lvw">
      <Image alt="loading..." src={loader} width={150} height={150} />
    </div>
  );
}
