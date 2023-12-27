import * as React from "react";
import { Layout } from "../components/layout";
import { useScroll } from "framer-motion";

const Index: React.FC = () => {
  const { scrollYProgress } = useScroll();
  React.useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);
  return (
    <Layout>
      <div className="p-10 text-6xl text-center">
        {"hai! :3 i write bad code :<"}
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing testing testing testing testing testing testing testing testing
        testing
      </div>
    </Layout>
  );
};

export default Index;
