import Head  from "next/head";
import { Herosection } from "@/components/sections/HeroSection";
import Navbar from "@/components/Navbar";

 const Home = ()=>{
  return(
    <>    
    <Head>
      <title>Complete your first draft</title>
      <meta name="description" content="Cleopatra - Become script ready with Cleopatra.ai" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
  </Head>
  <Navbar/>
 <Herosection/>
 </>

  )
}
export default Home;