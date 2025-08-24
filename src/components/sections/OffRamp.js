import { useState } from "react";
import EndpointCard from "../ui/EndpointCard";
import { apiEndpoints } from "../../data/apiEndpoints";

const OffRamp = ({
  expandedEndpoints,
  activeTab,
  toggleEndpoint,
  setActiveTabForEndpoint,
  copyToClipboard,
}) => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const baseUrls = {
    production: "https://api.platform.onmeta.in",
    staging: "https://stg.api.onmeta.in",
  };

  const copyUrl = (url) => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="space-y-12">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <p className="text-2xl text-primary-muted">
            Convert crypto currency tokens to fiat currency{" "}
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => setIsToggleOpen(!isToggleOpen)}
            className="hover:bg-bg-hover text-primary-subtle transition-all duration-300 px-6 py-3 rounded-lg border border-border-secondary flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            <span className="text-sm font-medium">Base URLs</span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                isToggleOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
            className={`absolute right-0 top-full mt-2 bg-bg-hover text-primary-subtle border border-border-secondary rounded-lg shadow-xl overflow-hidden transition-all duration-300 ease-out z-10 ${
              isToggleOpen
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
            }`}
          >
            <div className="p-4 min-w-[320px]">
              <div className="space-y-3">
                <div className="group">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-primary-accent uppercase tracking-wide">
                      Production
                    </span>
                    <button
                      onClick={() => copyUrl(baseUrls.production)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-primary-faint hover:text-primary-text"
                      title="Copy URL"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="bg-primary-bg rounded px-3 py-2 font-mono text-sm text-primary-subtle break-all">
                    {baseUrls.production}
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-yellow-primary uppercase tracking-wide">
                      Staging
                    </span>
                    <button
                      onClick={() => copyUrl(baseUrls.staging)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-primary-faint hover:text-primary-text"
                      title="Copy URL"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="bg-primary-bg rounded px-3 py-2 font-mono text-sm text-primary-subtle break-all">
                    {baseUrls.staging}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {apiEndpoints.offramp.map((endpoint) => (
        <EndpointCard
          key={endpoint.id}
          endpoint={endpoint}
          isExpanded={expandedEndpoints[endpoint.id]}
          activeTab={activeTab[endpoint.id]}
          toggleEndpoint={toggleEndpoint}
          setActiveTabForEndpoint={setActiveTabForEndpoint}
          copyToClipboard={copyToClipboard}
        />
      ))}
    </div>
  );
};

export default OffRamp;