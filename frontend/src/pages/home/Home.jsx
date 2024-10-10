import Blog from "../blog/Blog";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <div className="bg-white text-primary container mx-auto mt-6 p-6">
        <Hero />
        <Blog />
      </div>
    </>
  );
};

export default Home;
