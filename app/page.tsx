import Image from "next/image";

import Calculator from "./components/Calculator";

const Home = () => (
  <main className="flex-center h-screen flex-col pt-[3.125rem]">
    <h1 className="sr-only">
      Welcome to the NextJS $
    </h1>
    <Image
      src="/images/logo.svg"
      alt="splitter logo"
      width={87}
      height={54}
      className="mb-[2.5rem] xs:mb-[5.4rem]"
    />
    <Calculator />
  </main>
);

export default Home;
