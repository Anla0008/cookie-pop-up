import Image from "next/image";
import Likebutton from "@/components/Likebutton";
import CookieConsent from "@/components/cookie";

export default function Home() {
  return (
    <div>
      <CookieConsent />
      <Likebutton label="Like" />
      <Likebutton label="Dislike" />
    </div>
  );
}
