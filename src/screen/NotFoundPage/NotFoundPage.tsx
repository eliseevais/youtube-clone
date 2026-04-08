import NotFound from "./404.webp";
import Image from "next/image";

export const NotFoundPage = () => {
  return (
    <div>
      <Image width={500} src={NotFound} alt="404" />
    </div>
  );
};
