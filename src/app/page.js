import Image from "next/image";
import Likebutton from "@/components/Likebutton";

export default function Home() {
  return (
    <div>
      <Likebutton label="Like" />
      <Likebutton label="Dislike" />
    </div>
  );
}
