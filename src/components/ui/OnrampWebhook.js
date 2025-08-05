import { apiEndpoints } from "../../data/apiEndpoints";
import EndpointCard from "./EndpointCard";

const OnrampWeb = ({
  expandedEndpoints,
  activeTab,
  toggleEndpoint,
  setActiveTabForEndpoint,
}) => {
  return (
    <>
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
              Configuring Webhook{" "}
            </h3>
            <div className="text-white/70">
              <ul className="ml-6 mb-4">
                <li className="mb-4">
                  <sapn className="text-white/80 font-bold">1.</sapn>
                  This section explains the steps to configure callback URLs for
                  receiving events about the completed transaction.
                </li>
                <li className="mb-4">
                  <sapn className="text-white/80 font-bold">2.</sapn> Webhooks
                  are configured in{" "}
                  <sapn className="font-bold text-green-400">merchant dashboard </sapn>
                </li>
                <li className="mb-4">
                  <sapn className="text-white/80 font-bold">3.</sapn> Inside{" "}
                  <span className="font-bold text-green-500">API Setup</span>{" "}
                  section, webhook can be added and modified under Callback
                  URL's section
                </li>
                <li className="mb-4">
                  <sapn className="text-white/80 font-bold">4.</sapn>
                  <div className="flex justify-center">
                    <img
                      src="/web-onRamp.webp"
                      alt="OnMeta Complete Flow"
                      className="w-[50%] h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </li>
                <li className="mb-4">
                  <sapn className="text-green-500 font-bold">
                    <span className="text-white/80">5.</span> Generating HMAC
                  </sapn>{" "}
                  Signature is computed using Hash-based message authentication
                  code (HMAC) using a secret key. The secret key is the API
                  Secret present in your merchant dashboard.
                </li>
                <li className="mb-4">
                  <sapn className="text-white/80 font-bold">6.</sapn> The
                  example implementation in{" "}
                  <sapn className="text-green-500 font-bold">Nodejs</sapn> is
                  show below ⬇️
                </li>

                <li className="mb-4">
                  <sapn className="text-white/80 font-bold">7.</sapn>
                  <div className="flex justify-center">
                    <img
                      src="/code2.png"
                      alt="OnMeta Complete Flow"
                      className="w-[50%] h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </li>

                <li className="mb-4">
                  <sapn className="text-white/80 font-bold">8.</sapn>
                  <div className="p-4 rounded-3xl border-2 border-white/15 bg-green-950 hover:border-green-400/30 transition-all duration-500 hover:shadow-2xl group relative overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${"#ffffff"} 0%, transparent 70%)`,
                      }}
                    />
                    <div className="flex items-center justify-between relative z-10">
                      <div>
                        <h3 className="text-1xl font-bold text-white/80">
                          eventType will be onramp for this order
                        </h3>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="mb-4">
                  <sapn className="text-white/80 font-bold">9.</sapn>
                  <div className="p-4 rounded-3xl border-2 border-white/15 bg-green-950 hover:border-green-400/30 transition-all duration-500 hover:shadow-2xl group relative overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${"#ffffff"} 0%, transparent 70%)`,
                      }}
                    />
                    <div className="flex items-center justify-between relative z-10">
                      <div>
                        <h3 className="text-1xl font-bold text-white/80">
                          Make sure you have firewall rule allowed for receiving
                          the webhook body if not your firewall might block our
                          webhook requests.{" "}
                        </h3>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="mb-4">
                  <sapn className="text-white/80 font-bold">10.</sapn>

                  {apiEndpoints.wehbookOnRamp.map((endpoint) => (
                    <EndpointCard
                      key={endpoint.id}
                      endpoint={endpoint}
                      isExpanded={expandedEndpoints[endpoint.id]}
                      activeTab={activeTab[endpoint.id]}
                      toggleEndpoint={toggleEndpoint}
                      setActiveTabForEndpoint={setActiveTabForEndpoint}
                      // copyToClipboard={copyToClipboard}
                    />
                  ))}
                </li>
              </ul>
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
              Sample response
            </h3>
            <div className="text-white/70">
              <ul className="ml-6 mb-4">
                <li className="mb-4">
                  <sapn className="text-white/80 font-bold">1.</sapn>{" "}
                  FiatPending
                  <div className="flex justify-center">
                    <img
                      src="/fiatPending.png"
                      alt="OnMeta Complete Flow"
                      className="w-[50%] h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </li>
                <li className="mb-4">
                  <sapn className="text-white/80 font-bold">2.</sapn>{" "}
                  FiatReceived
                  <div className="flex justify-center">
                    <img
                      src="/fiatRecieved.png"
                      alt="OnMeta Complete Flow"
                      className="w-[50%] h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </li>
                <li className="mb-4">
                  <sapn className="text-white/80 font-bold">3.</sapn>{" "}
                  OrderReceived
                  <div className="flex justify-center">
                    <img
                      src="/orderRecevied.png"
                      alt="OnMeta Complete Flow"
                      className="w-[50%] h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </li>

                <li className="mb-4">
                  <sapn className="text-white/80 font-bold">4.</sapn>{" "}
                  Transferred
                  <div className="flex justify-center">
                    <img
                      src="/transfferred.png"
                      alt="OnMeta Complete Flow"
                      className="w-[50%] h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </li>
                <li className="mb-4">
                  <sapn className="text-white/80 font-bold">4.</sapn> Completed
                  <div className="flex justify-center">
                    <img
                      src="/completed.png"
                      alt="OnMeta Complete Flow"
                      className="w-[50%] h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnrampWeb;
