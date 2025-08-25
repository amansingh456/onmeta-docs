import { Code, Zap } from "lucide-react";

const Introduction = ({setActiveSection}) => {
  return (
    <div className="text-center z-10 w-full flex flex-col items-center justify-between h-[calc(100vh-10rem)] bg-light-bg dark:bg-primary-bg">
      <div className="flex-1 flex items-center justify-center">
        <div>

          <h1
            className={`text-6xl font-black transition-all duration-1000 z-10 text-light-text dark:text-primary-text -mt-20`}
          >
            ONMETA
          </h1>

          <div className="relative mt-2">
            <div className="w-62 h-1 bg-gradient-to-r from-light-accent dark:from-primary-accent to-slate-600 dark:to-white mx-auto rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center flex-1 flex items-center justify-center -mt-40">
        <div>
          <p className="text-2xl text-light-textSec dark:text-primary-textSec font-medium leading-relaxed">
            The most{" "}
            <span className="text-light-accent dark:text-primary-accent font-bold animate-pulse">
              powerful
            </span>{" "}
            fiat-to-crypto / crypto-to-fiat infrastructure for
            <span className="text-light-text dark:text-primary-text font-bold"> DeFi</span>,
            <span className="text-light-accent dark:text-primary-accent font-bold">
              {" "}
              Web3 Gaming
            </span>
            , and
            <span className="text-light-text dark:text-primary-text font-bold">
              {" "}
              NFT marketplaces
            </span>
            . Seamless on/off-ramp solutions with
            <span className="text-light-accent dark:text-primary-accent font-bold animate-pulse">
              {" "}
              enterprise-grade security
            </span>
            .
          </p>

          <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-light-accent dark:from-primary-accent to-transparent animate-pulse"></div>
          <div className="absolute -right-8 top-0 w-1 h-full bg-gradient-to-b from-transparent to-light-accent dark:to-primary-accent animate-pulse"></div>
        </div>
      </div>

       <div className="flex justify-center space-x-6 items-center">
            <button
              className="px-8 py-4 bg-transparent text-light-text dark:text-primary-text rounded-2xl font-bold text-lg border border-light-brdr dark:border-primary-brdr hover:border-light-accent dark:hover:border-primary-accent transition-all duration-300 hover:shadow-2xl hover:shadow-gray-300/20 dark:hover:shadow-white/10 transform hover:scale-105 hover:bg-gray-50 dark:hover:bg-white/5"
              onClick={() => setActiveSection("intro")}
            >
              <span className="flex items-center space-x-2">
                <Code size={20} />
                <span>Intro</span>
              </span>
            </button>

            <button
              className="group px-8 py-4 bg-light-accent dark:bg-primary-accent text-light-bg dark:text-primary-bg rounded-2xl font-bold text-lg hover:bg-light-accent dark:hover:bg-primary-accent transition-all duration-300 hover:shadow-2xl transform hover:scale-105 relative overflow-hidden"
              onClick={() => setActiveSection("pre")}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-black/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative z-10 flex items-center space-x-2">
                <Zap size={20} />
                <span>Get Started</span>
              </span>
            </button>
          </div>
    </div>
  );
};

export default Introduction;