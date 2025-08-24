import { useState, useEffect } from "react";

const Intro = () => {
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImages(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const LoadingPlaceholder = ({ className }) => (
    <div
      className={`${className} bg-bg-surface rounded-lg animate-pulse flex items-center justify-center relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border-secondary to-transparent -skew-x-12 animate-shimmer"></div>
      <div className="w-8 h-8 border-2 border-border-secondary border-t-primary-subtle rounded-full animate-spin"></div>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );

  return (
    <div className="space-y-12">
      <div className="space-y-6 border-red-500">
        <div className="p-8 rounded-3xl border-2 border-border-primary bg-primary-bg hover:border-border-accent-light transition-all duration-500 hover:shadow-2xl group relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
            style={{
              background: `radial-gradient(circle at 50% 50%, var(--color-primary-text) 0%, transparent 70%)`,
            }}
          />
          <div className="flex items-center justify-between relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-primary-text mb-3">
                Main Flow
              </h3>
              <div className="flex justify-center">
                {showImages ? (
                  <img
                    src="/onmeta-complete-flow.webp"
                    alt="OnMeta Complete Flow"
                    className="w-[50%] h-auto rounded-lg shadow-lg opacity-0 animate-fade-in"
                    style={{ animation: "fadeIn 0.8s ease-in-out forwards" }}
                  />
                ) : (
                  <LoadingPlaceholder className="w-full h-40" />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-3xl border-2 border-border-primary bg-primary-bg hover:border-border-accent-light transition-all duration-500 hover:shadow-2xl group relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
            style={{
              background: `radial-gradient(circle at 50% 50%, var(--color-primary-text) 0%, transparent 70%)`,
            }}
          />
          <div className="flex items-center justify-between relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-primary-text mb-4">
                Integrations Supported
              </h3>
              <div>
                <p className="text-primary-muted text-lg mb-2">
                  We support the following integration methods for our services
                  i.e. both On and Off Ramp.
                </p>
                <ul className="ml-6 mb-4">
                  <li>
                    <span className="text-primary-accent font-bold">1. Widget
                    Integration</span> 
                  </li>
                  <li>
                    <span className="text-primary-accent font-bold">2. API
                    Integration</span> 
                  </li>
                </ul>
                <p className="text-primary-muted text-lg">
                  In this document we will be discussing in detail the steps
                  needed for widget integration in test module and then how to
                  take the widget live. Before we dive into the integration
                  subject, we will quickly highlight the key functionalities of
                  our product in the following two sections.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-3xl border-2 border-border-primary bg-primary-bg hover:border-border-accent-light transition-all duration-500 hover:shadow-2xl group relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
            style={{
              background: `radial-gradient(circle at 50% 50%, var(--color-primary-text) 0%, transparent 70%)`,
            }}
          />
          <div className="flex items-center justify-between relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-primary-text mb-4">
                Fiat Currency Supported
              </h3>
              <div className="flex justify-around">
                {showImages ? (
                  <>
                    <img
                      src="/inrImg.webp"
                      alt="inrImg"
                      className="w-[30%] h-auto rounded-lg shadow-lg opacity-0"
                      style={{
                        animation: "fadeIn 0.8s ease-in-out 0.2s forwards",
                      }}
                    />
                    <img
                      src="/phpPeso.webp"
                      alt="phpPeso"
                      className="w-[30%] h-auto rounded-lg shadow-lg opacity-0"
                      style={{
                        animation: "fadeIn 0.8s ease-in-out 0.4s forwards",
                      }}
                    />

                    <img
                      src="/idr.jpg"
                      alt="phpPeso"
                      className="w-[30%] h-auto rounded-lg shadow-lg opacity-0"
                      style={{
                        animation: "fadeIn 0.8s ease-in-out 0.4s forwards",
                      }}
                    />
                  </>
                ) : (
                  <>
                    <LoadingPlaceholder className="w-[30%] h-20" />
                    <LoadingPlaceholder className="w-[30%] h-20" />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-3xl border-2 border-border-primary bg-primary-bg hover:border-border-accent-light transition-all duration-500 hover:shadow-2xl group relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
            style={{
              background: `radial-gradient(circle at 50% 50%, var(--color-primary-text) 0%, transparent 70%)`,
            }}
          />
          <div className="flex items-center justify-between relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-primary-text mb-4">
                Supported Blockchain Networks
              </h3>
              <div className="flex justify-center">
                <p className="text-primary-muted text-lg mb-6">
                  Builders' building any dApp on our supported blockchain
                  networks can integrate Onmeta to easily On/Off Ramp their
                  users. Our solution is curated for Crypto wallets, Gaming
                  dApps, NFT Marketplaces, DeFi platforms, Crypto Exchanges.
                </p>
              </div>

              <div className="grid grid-cols-6 gap-6 mt-4">
                {showImages ? (
                  <>
                    {[
                      { src: "/eth.webp", alt: "Ethereum" },
                      { src: "/arb.webp", alt: "Bitcoin" },
                      { src: "/aval.webp", alt: "Polygon" },
                      { src: "/bnc.webp", alt: "Binance Smart Chain" },
                      { src: "/dfk.webp", alt: "Solana" },
                      { src: "/fantom.webp", alt: "Cardano" },
                      { src: "/gnosis.webp", alt: "Avalanche" },
                      { src: "/hedera.webp", alt: "Arbitrum" },
                      { src: "/immu.webp", alt: "Optimism" },
                      { src: "/klaytn.webp", alt: "Chainlink" },
                      { src: "/opti.webp", alt: "Cosmos" },
                      { src: "/pol.webp", alt: "Polkadot" },
                      { src: "/base.svg", alt: "Fantom" },
                      { src: "/ronin.svg", alt: "NEAR Protocol" },
                      { src: "/sol.webp", alt: "Tron" },
                      { src: "/tron.webp", alt: "Litecoin" },
                      { src: "/ton.webp", alt: "Stellar" },
                      { src: "/zk.webp", alt: "Ripple" },
                    ].map((image, index) => (
                      <div key={index} className="flex justify-center">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-30 h-12 rounded-lg shadow-md hover:scale-110 transition-transform duration-200 opacity-0"
                          style={{
                            animation: `fadeIn 0.6s ease-in-out ${
                              index * 0.1
                            }s forwards`,
                          }}
                        />
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {Array.from({ length: 18 }).map((_, index) => (
                      <div key={index} className="flex justify-center">
                        <LoadingPlaceholder className="w-30 h-12" />
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-3xl border-2 border-border-primary bg-primary-bg hover:border-border-accent-light transition-all duration-500 hover:shadow-2xl group relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
            style={{
              background: `radial-gradient(circle at 50% 50%, var(--color-primary-text) 0%, transparent 70%)`,
            }}
          />
          <div className="flex items-center justify-between relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-primary-text mb-4">
                Customizations Possible for Widget Integration.
              </h3>
              <div className="text-primary-muted">
                <ul className="ml-6 mb-4">
                  <li>
                    <span className="text-primary-text font-bold">1.</span> You can
                    choose to have either On ramp or Off ramp or both
                  </li>
                  <li>
                    <span className="text-primary-text font-bold">2.</span> You can
                    choose to use Onmeta's KYC module or integrate with your own
                    KYC
                  </li>
                  <li>
                    <span className="text-primary-text font-bold">3.</span> You can
                    choose to customize the fiat currencies and tokens that list
                    in your widget
                  </li>
                  <li>
                    <span className="text-primary-text font-bold">4.</span> You can
                    choose whether the user has to go through an email
                    verification in our widget or not by choosing whether to
                    pass the email ID of the user or not
                  </li>
                  <li>
                    <span className="text-primary-text font-bold">5.</span> You can
                    choose the payment channels that you would like to use
                  </li>
                  <li>
                    <span className="text-primary-text font-bold">6.</span> You can
                    choose the color theme of the widget from light and dark
                    [WIP]
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Intro;