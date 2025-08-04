const Intro = () => {
  return (
    <div className="space-y-12">
        <div className="space-y-6 border-red-500">
        <div className="p-8 rounded-3xl border-2 border-white/15 bg-black hover:border-green-400/30 transition-all duration-500 hover:shadow-2xl group relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${"#ffffff"} 0%, transparent 70%)`,
            }}
          />
          <div className="flex items-center justify-between relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-white/80 mb-3">
                Main Flow
              </h3>
              <div className="flex justify-center">
                <img
                  src="/onmeta-complete-flow.webp"
                  alt="OnMeta Complete Flow"
                  className="w-[50%] h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-3xl border-2 border-white/15 bg-black hover:border-green-400/30 transition-all duration-500 hover:shadow-2xl group relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${"#ffffff"} 0%, transparent 70%)`,
            }}
          />
          <div className="flex items-center justify-between relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-white/80 mb-4">
                Integrations Supported
              </h3>
              <div>
                <p className="text-white/70 text-lg mb-2">
                  We support the following integration methods for our services
                  i.e. both On and Off Ramp.
                </p>
                <ul className="ml-6 mb-4">
                  <li><sapn className="text-white/80 font-bold">1.</sapn>  Widget Integration</li>
                  <li><sapn className="text-white/80 font-bold">2.</sapn>  API Integration</li>
                </ul>
                <p className="text-white/70 text-lg">
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

        <div className="p-8 rounded-3xl border-2 border-white/15 bg-black hover:border-green-400/30 transition-all duration-500 hover:shadow-2xl group relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${"#ffffff"} 0%, transparent 70%)`,
            }}
          />
          <div className="flex items-center justify-between relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-white/80 mb-4">
                Fiat Currency Supported
              </h3>
              <div className="flex justify-around">
                <img
                  src="/inrImg.webp"
                  alt="inrImg"
                  className="w-[30%] h-auto rounded-lg shadow-lg"
                />
                <img
                  src="/phpPeso.webp"
                  alt="phpPeso"
                  className="w-[30%] h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-3xl border-2 border-white/15 bg-black hover:border-green-400/30 transition-all duration-500 hover:shadow-2xl group relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${"#ffffff"} 0%, transparent 70%)`,
            }}
          />
          <div className="flex items-center justify-between relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-white/80 mb-4">
                Supported Blockchain Networks
              </h3>
              <div className="flex justify-center">
                <p className="text-white/70 text-lg mb-6">
                  Builders' building any dApp on our supported blockchain
                  networks can integrate Onmeta to easily On/Off Ramp their
                  users. Our solution is curated for Crypto wallets, Gaming
                  dApps, NFT Marketplaces, DeFi platforms, Crypto Exchanges.
                </p>
              </div>

              <div className="grid grid-cols-6 gap-6 mt-4">
                <div className="flex justify-center">
                  <img
                    src="/eth.webp"
                    alt="Ethereum"
                    className="w-30 h-12 rounded-lg shadow-md hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src="/arb.webp"
                    alt="Bitcoin"
                    className="w-30 h-12 rounded-lg shadow-md hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src="/aval.webp"
                    alt="Polygon"
                    className="w-30 h-12 rounded-lg shadow-md hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src="/bnc.webp"
                    alt="Binance Smart Chain"
                    className="w-30 h-12 rounded-lg shadow-md hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src="/dfk.webp"
                    alt="Solana"
                    className="w-30 h-12 rounded-lg shadow-md hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src="/fantom.webp"
                    alt="Cardano"
                    className="w-30 h-12 rounded-lg shadow-md hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src="/gnosis.webp"
                    alt="Avalanche"
                    className="w-30 h-12 rounded-lg shadow-md hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src="/hedera.webp"
                    alt="Arbitrum"
                    className="w-30 h-12 rounded-lg shadow-md hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src="/immu.webp"
                    alt="Optimism"
                    className="w-30 h-12 rounded-lg shadow-md hover:scale-110 transition-transform duration-200"
                  />
                </div>

                {/* Second row - 9 images */}
                <div className="flex justify-center">
                  <img
                    src="/klaytn.webp"
                    alt="Chainlink"
                    className="w-30 h-12 rounded-lg shadow-md hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src="/opti.webp"
                    alt="Cosmos"
                    className="w-30 h-12 rounded-lg shadow-md hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src="/pol.webp"
                    alt="Polkadot"
                    className="w-30 h-12 rounded-lg shadow-md hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src="/base.svg"
                    alt="Fantom"
                    className="w-30 h-12 rounded-lg shadow-md hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src="/ronin.svg"
                    alt="NEAR Protocol"
                    className="w-30 h-12 rounded-lg shadow-md hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src="/sol.webp"
                    alt="Tron"
                    className="w-30 h-12 rounded-lg shadow-md hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src="/tron.webp"
                    alt="Litecoin"
                    className="w-30 h-12 rounded-lg shadow-md hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src="/ton.webp"
                    alt="Stellar"
                    className="w-30 h-12 rounded-lg shadow-md hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src="/zk.webp"
                    alt="Ripple"
                    className="w-30 h-12 rounded-lg shadow-md hover:scale-110 transition-transform duration-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-3xl border-2 border-white/15 bg-black hover:border-green-400/30 transition-all duration-500 hover:shadow-2xl group relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${"#ffffff"} 0%, transparent 70%)`,
            }}
          />
          <div className="flex items-center justify-between relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-white/80 mb-4">
                Customizations Possible for Widget Integration.
              </h3>
              <div className="text-white/70">
                <ul className="ml-6 mb-4">
                  <li>
                    <sapn className="text-white/80 font-bold">1.</sapn> You can
                    choose to have either On ramp or Off ramp or both
                  </li>
                  <li>
                    <sapn className="text-white/80 font-bold">2.</sapn> You can
                    choose to use Onmeta's KYC module or integrate with your own
                    KYC
                  </li>
                  <li>
                    <sapn className="text-white/80 font-bold">3.</sapn> You can
                    choose to customize the fiat currencies and tokens that list
                    in your widget
                  </li>
                  <li>
                    <sapn className="text-white/80 font-bold">4.</sapn> You can
                    choose whether the user has to go through an email
                    verification in our widget or not by choosing whether to
                    pass the email ID of the user or not
                  </li>
                  <li>
                    <sapn className="text-white/80 font-bold">5.</sapn> You can
                    choose the payment channels that you would like to use
                  </li>
                  <li>
                    <sapn className="text-white/80 font-bold">6.</sapn> You can
                    choose the color theme of the widget from light and dark
                    [WIP]
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
