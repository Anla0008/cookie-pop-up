import Likebutton from "@/components/Likebutton";
import CookieConsent from "@/components/Cookie";

export default function Home() {
  return (
    <div>
      <CookieConsent />
      <Likebutton label="Like" />
      <Likebutton label="Dislike" />
    </div>
  );
}
