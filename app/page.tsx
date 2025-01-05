import Image from "next/image";

import Calculator from "./components/Calculator";
import StoreWrapper from "./components/StoreWrapper";

const Home = () => (
  <main className="flex-center h-screen flex-col pt-[3.125rem]">
    <h1 className="sr-only">Welcome to the NextJS $</h1>
    <Image
      src="/images/logo.svg"
      alt="splitter logo"
      width={87}
      height={54}
      className="mb-10 xs:mb-[5.4rem]"
    />
    <StoreWrapper>
      <Calculator />
    </StoreWrapper>
  </main>
);

export default Home;
