import { apiEndpoints } from "../../data/apiEndpoints";
import EndpointCard from "./EndpointCard";

const OfframpWeb = ({
  expandedEndpoints,
  activeTab,
  toggleEndpoint,
  setActiveTabForEndpoint,
}) => {
  return (
    <>
      <div className="p-8 rounded-3xl border border-light-brdr dark:border-primary-brdr bg-light-surface dark:bg-primary-surface hover:border-light-accent dark:hover:border-primary-accent transition-all duration-500 hover:shadow-2xl group relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
          style={{
            background: `radial-gradient(circle at 50% 50%, var(--glow-accent) 0%, transparent 70%)`,
          }}
        />
        <div className="flex items-center justify-between relative z-10">
          <div>
            <h3 className="text-2xl font-bold text-light-text dark:text-primary-text mb-4">
              Configuring Webhook
            </h3>
            <div className="text-light-textSec dark:text-primary-textSec">
              <ul className="ml-6 mb-4">
                <li className="mb-4">
                  <sapn className="font-bold">1.</sapn>
                  This section explains the steps to configure callback URLs for
                  receiving events about the completed transaction
                </li>
                <li className="mb-4">
                  <sapn className=" font-bold">2.</sapn> Webhooks
                  are configured in  <sapn className="font-bold text-light-accent dark:text-primary-accent">merchant dashboard </sapn> 
                </li>
                <li className="mb-4">
                  <sapn className="font-bold">3.</sapn> Inside{" "}
                  <span className="font-bold text-light-accent dark:text-primary-accent">API Setup</span> section, webhook
                  can be added and modified under Callback URL's section
                </li>
                <li className="mb-4">
                  <sapn className="font-bold">4.</sapn>
                  <div className="flex justify-center">
                    <img
                      src="/web_offramp.webp"
                      alt="OnMeta Complete Flow"
                      className="w-[50%] h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </li>
                <li className="mb-4">
                  <sapn className="text-light-accent dark:text-primary-accent font-bold">
                    <span className="text-light-textSec dark:text-primary-textSec">5.</span> Generating HMAC
                  </sapn>{" "}
                  Signature is computed using Hash-based message authentication
                  code (HMAC) using a secret key. The secret key is the API
                  Secret present in your merchant dashboard.
                </li>
                <li className="mb-4">
                  <sapn className="font-bold">6.</sapn> The
                  example implementation in{" "}
                  <sapn className="text-light-accent dark:text-primary-accent font-bold">Nodejs</sapn> is
                  show below ⬇️
                </li>

                <li className="mb-4">
                  <sapn className="font-bold">7.</sapn>
                  <div className="flex justify-center">
                    <img
                      src="/code2.png"
                      alt="OnMeta Complete Flow"
                      className="w-[50%] h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </li>

                <li className="mb-4">
                  <sapn className="font-bold">8.</sapn>
                  <div className="p-4 rounded-3xl border border-light-brdr dark:border-primary-brdr bg-light-accent-subtle dark:bg-primary-accent-subtle transition-all duration-500 hover:shadow-2xl group relative overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
                       
                    />
                    <div className="flex items-center justify-between relative z-10">
                      <div>
                        <h3 className="text-1xl font-bold text-light-text dark:text-primary-text ">
                          eventType will be offramp for this order
                        </h3>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="mb-4">
                  <sapn className="font-bold">9.</sapn>
                  <div className="p-4 rounded-3xl border border-light-brdr dark:border-primary-brdr bg-light-accent-subtle dark:bg-primary-accent-subtle  transition-all duration-500 hover:shadow-2xl group relative overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl "
                       style={{
                        background: `radial-gradient(circle at 50% 50%, var(--color-primary-text) 0%, transparent 70%)`,
                      }}
                    />
                    <div className="flex items-center justify-between relative z-10">
                      <div>
                        <h3 className="text-1xl font-bold text-light-text dark:text-primary-text ">
                          Make sure you have firewall rule allowed for receiving
                          the webhook body if not your firewall might block our
                          webhook requests.{" "}
                        </h3>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="mb-4">
                  <sapn className="font-bold">10.</sapn>

                  {apiEndpoints.wehbookOffRamp.map((endpoint) => (
                    <EndpointCard
                      key={endpoint.id}
                      endpoint={endpoint}
                      isExpanded={expandedEndpoints[endpoint.id]}
                      activeTab={activeTab[endpoint.id]}
                      toggleEndpoint={toggleEndpoint}
                      setActiveTabForEndpoint={setActiveTabForEndpoint}
                    />
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

        <div className="p-8 rounded-3xl border border-light-brdr dark:border-primary-brdr bg-light-surface dark:bg-primary-surface hover:border-light-accent dark:hover:border-primary-accent transition-all duration-500 hover:shadow-2xl group relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
            style={{
              background: `radial-gradient(circle at 50% 50%, var(--glow-accent) 0%, transparent 70%)`,
            }}
          />
          <div className="flex items-center justify-between relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-light-text dark:text-primary-text mb-4">
                Sample response
              </h3>
              <div className=" text-light-textSec dark:text-primary-textSec ">
                <ul className="ml-6 mb-4">
                  <li className="mb-4">
                    <sapn className="font-bold">1.</sapn> Pending
                    <div className="flex justify-center">
                      <img
                        src="/pending.png"
                        alt="OnMeta Complete Flow"
                        className="w-[50%] h-auto rounded-lg shadow-lg"
                      />
                    </div>
                  </li>
                  <li className="mb-4">
                    <sapn className="font-bold">2.</sapn> OrderReceived
                    <div className="flex justify-center">
                      <img
                        src="/OrderReceived2.png"
                        alt="OnMeta Complete Flow"
                        className="w-[50%] h-auto rounded-lg shadow-lg"
                      />
                    </div>
                  </li>
                  <li className="mb-4">
                    <sapn className=" font-bold">3.</sapn> CryptoReceived
                    <div className="flex justify-center">
                      <img
                        src="/CryptoReceived.png"
                        alt="OnMeta Complete Flow"
                        className="w-[50%] h-auto rounded-lg shadow-lg"
                      />
                    </div>
                  </li>

                  <li className="mb-4">
                    <sapn className="font-bold">4.</sapn> PayoutSuccess

                    <div className="flex justify-center">
                      <img
                        src="/PayoutSuccess.png"
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

export default OfframpWeb;