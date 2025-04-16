import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/header"
import Main from "./screens/main";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}
