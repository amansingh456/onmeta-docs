import { Code, Zap } from "lucide-react";

const Introduction = ({setActiveSection}) => {
  return (
    <div className="text-center z-10 w-full flex flex-col items-center justify-between h-[80vh]">
      <div className="flex-1 flex items-center justify-center">
        <div>

          <h1
            className={`text-8xl font-black transition-all duration-1000  z-10 text-primary-text `}
          >
            ONMETA
          </h1>

          <div className="relative mt-2">
            <div className="w-62 h-1 bg-gradient-to-r from-primary-accent to-primary-text mx-auto rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center flex-1 flex items-center justify-center -mt-20">
        <div>
          <p className="text-2xl text-primary-muted font-medium leading-relaxed">
            The most{" "}
            <span className="text-primary-accent font-bold animate-pulse">
              powerful
            </span>{" "}
            fiat-to-crypto / crypto-to-fiat infrastructure for
            <span className="text-primary-text font-bold"> DeFi</span>,
            <span className="text-primary-accent font-bold">
              {" "}
              Web3 Gaming
            </span>
            , and
            <span className="text-primary-text font-bold">
              {" "}
              NFT marketplaces
            </span>
            . Seamless on/off-ramp solutions with
            <span className="text-primary-accent font-bold animate-pulse">
              {" "}
              enterprise-grade security
            </span>
            .
          </p>

          <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-primary-accent to-transparent animate-pulse"></div>
          <div className="absolute -right-8 top-0 w-1 h-full bg-gradient-to-b from-transparent to-primary-accent animate-pulse"></div>
        </div>
      </div>

       <div className="flex justify-center space-x-6 items-center">
            <button
              className="px-8 py-4 bg-transparent text-primary-text rounded-2xl font-bold text-lg border-2 border-border-secondary hover:border-border-accent-light transition-all duration-300 hover:shadow-2xl hover:shadow-shadow-primary transform hover:scale-105 hover:bg-bg-surface"
              onClick={() => setActiveSection("intro")}
            >
              <span className="flex items-center space-x-2">
                <Code size={20} />
                <span>Intro</span>
              </span>
            </button>

            <button
              className="group px-8 py-4 bg-primary-accent text-primary-bg rounded-2xl font-bold text-lg hover:bg-primary-accent/90 transition-all duration-300 hover:shadow-2xl hover:shadow-shadow-accent transform hover:scale-105 relative overflow-hidden"
              onClick={() => setActiveSection("pre")}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-text/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
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


  