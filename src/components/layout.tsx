import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTime,
  useTransform,
} from "framer-motion";
import * as React from "react";

const variants = {
  animate: {
    y: ["-12px", "12px"],
    transition: {
      staggerChildren: 0.2,
      repeatType: "reverse",
      repeat: Infinity,
      duration: 1.3,
      ease: "easeInOut",
    },
  },
};

const Nav: React.FC = (props) => {
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });
  return (
    <div className="flex flex-row text-3xl items-center justify-between sticky top-8 p-4 bg-slate-700">
      <div className="flex flex-row gap-4 items-center">
        <img
          src="https://avatars.githubusercontent.com/u/81787757?v=4"
          width="96"
          height="96"
        />
        <hr />
        <motion.div
          className="flex flex-row text-5xl"
          animate="animate"
          variants={variants}
        >
          {"saihnii4".split("").map((letter) => {
            return <motion.span variants={variants}>{letter}</motion.span>;
          })}
        </motion.div>
      </div>
      <div className="flex flex-row">
        <a className="group transition duration-75 select-none cursor-pointer">
          <span className="group-hover:text-red-500 transition-all">about</span>
          <hr className="max-w-0 group-hover:max-w-full transition-all"></hr>
        </a>
        <a className="group transition duration-75 select-none cursor-pointer">
          <span className="group-hover:text-green-500 transition-all">
            blog
          </span>
          <hr className="max-w-0 group-hover:max-w-full transition-all"></hr>
        </a>
        <a className="group transition duration-75 select-none cursor-pointer">
          <span className="group-hover:text-gray-500 transition-all">
            github
          </span>
          <hr className="max-w-0 group-hover:max-w-full transition-all"></hr>
        </a>
        <a className="group transition duration-75 select-none cursor-pointer">
          <span className="group-hover:text-orange-500 transition-all">
            foxes
          </span>
          <hr className="max-w-0 group-hover:max-w-full transition-all"></hr>
        </a>
      </div>
    </div>
  );
};

export const Layout: React.FC<React.PropsWithChildren> = (props) => {
  const time = useTime();
  return (
    <div className="bg-neutral-800 h-full px-12 py-8">
      <Nav />
      {props.children}
    </div>
  );
};
