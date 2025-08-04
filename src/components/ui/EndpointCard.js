import { ChevronDown, ChevronRight, Copy } from "lucide-react";

const EndpointCard = ({
  endpoint,
  isExpanded,
  activeTab,
  toggleEndpoint,
  setActiveTabForEndpoint,
  copyToClipboard,
}) => {
  const activeTabForEndpoint = activeTab || "Headers";

  // Generate formatted JSON with type annotations
  const formatRequestWithTypes = (data, types) => {
    if (!data || !types) return JSON.stringify(data || {}, null, 2);

    const formatted = JSON.stringify(data, null, 2);
    const lines = formatted.split("\n");

    return lines
      .map((line) => {
        // Check if line contains a key-value pair
        const match = line.match(/^(\s*)"([^"]+)":\s*(.+),?$/);
        if (match) {
          const [, indent, key, value] = match;
          const type = types[key];
          if (type) {
            const cleanValue = value.replace(/,$/, ""); // Remove trailing comma
            const hasComma = value.endsWith(",");
            return `${indent}"${key}": ${cleanValue}${
              hasComma ? "," : ""
            } // ${type}`;
          }
        }
        return line;
      })
      .join("\n");
  };

  // Generate dynamic headers string for curl command
  const generateHeadersString = (headers) => {
    if (!headers) return "";
    return Object.entries(headers)
      .map(([key, value]) => `  -H "${key}: ${value}"`)
      .join(" \\\n");
  };

  return (
    <div className="mb-8 group">
      <div
        className={`relative overflow-hidden rounded-2xl bg-black border-2 transition-all duration-500 hover:shadow-2xl transform hover:scale-[1.01] ${
          endpoint.method === "GET"
            ? "border-white/10 hover:border-green-400/30"
            : endpoint.method === "POST"
            ? "border-white/10 hover:border-yellow-400/30"
            : endpoint.method === "PUT"
            ? "border-white/10 hover:border-blue-400/30"
            : endpoint.method === "DELETE"
            ? "border-white/10 hover:border-red-400/30"
            : "border-white/10 hover:border-green-400/30"
        }`}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${
              endpoint.method === "GET"
                ? "#00ff88"
                : endpoint.method === "POST"
                ? "#facc15"
                : endpoint.method === "PUT"
                ? "#60a5fa"
                : endpoint.method === "DELETE"
                ? "#f87171"
                : "#00ff88"
            } 0%, transparent 70%)`,
          }}
        />

        <div
          className="p-8 cursor-pointer flex items-center justify-between hover:bg-white/5 transition-all duration-300 relative z-10"
          onClick={() => toggleEndpoint(endpoint.id)}
        >
          <div className="flex items-center space-x-6">
            <span
              className={`px-4 py-2 rounded-xl text-sm font-bold border-2 transition-all duration-300 ${
                endpoint.method === "GET"
                  ? "bg-black text-green-400 border-green-400/30 group-hover:border-green-400 group-hover:shadow-lg"
                  : endpoint.method === "POST"
                  ? "bg-black text-yellow-400 border-yellow-400/30 group-hover:border-yellow-400 group-hover:shadow-lg"
                  : endpoint.method === "PUT"
                  ? "bg-black text-blue-400 border-blue-400/30 group-hover:border-blue-400 group-hover:shadow-lg"
                  : endpoint.method === "DELETE"
                  ? "bg-black text-red-400 border-red-400/30 group-hover:border-red-400 group-hover:shadow-lg"
                  : "bg-black text-white border-white/30 group-hover:border-green-400 group-hover:shadow-lg"
              }`}
            >
              {endpoint.method}
            </span>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1 transition-colors">
                {endpoint.title}
              </h3>
              <code
                className={`text-lg font-mono transition-colors ${
                  endpoint.method === "GET"
                    ? "text-white/60 group-hover:text-green-400/80"
                    : endpoint.method === "POST"
                    ? "text-white/60 group-hover:text-yellow-400/80"
                    : endpoint.method === "PUT"
                    ? "text-white/60 group-hover:text-blue-400/80"
                    : endpoint.method === "DELETE"
                    ? "text-white/60 group-hover:text-red-400/80"
                    : "text-white/60 group-hover:text-green-400/80"
                }`}
              >
                {endpoint.path}
              </code>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-white/60 group-hover:text-white transition-colors">
              {isExpanded ? (
                <ChevronDown size={24} />
              ) : (
                <ChevronRight size={24} />
              )}
            </div>
          </div>
        </div>

        {isExpanded && (
          <div className="border-t-2 border-white/10">
            <div className="p-8 relative">
              <p className="text-white/80 mb-8 text-lg">
                {endpoint.description}
              </p>

              <div className="flex space-x-2 mb-8 bg-black/50 p-2 rounded-xl border border-white/10 w-fit">
                {["Headers", "Request Body", "Response", "cURL"].map((tab) => (
                  <button
                    key={tab}
                    className={`px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${
                      activeTabForEndpoint === tab
                        ? `shadow-lg transform scale-105 ${
                            endpoint.method === "GET"
                              ? "bg-green-400 text-black"
                              : endpoint.method === "POST"
                              ? "bg-yellow-400 text-black"
                              : endpoint.method === "PUT"
                              ? "bg-blue-400 text-black"
                              : endpoint.method === "DELETE"
                              ? "bg-red-400 text-black"
                              : "bg-green-400 text-black"
                          }`
                        : "text-white/60 hover:text-white hover:bg-white/10"
                    }`}
                    onClick={() => setActiveTabForEndpoint(endpoint.id, tab)}
                  >
                    {tab.charAt(0) + tab.slice(1)}
                  </button>
                ))}
              </div>

              {activeTabForEndpoint === "Headers" && (
                <div
                  className={`bg-black/80 rounded-2xl p-6 relative border-2 transition-colors ${
                    endpoint.method === "GET"
                      ? "border-white/10 hover:border-green-400/20"
                      : endpoint.method === "POST"
                      ? "border-white/10 hover:border-yellow-400/20"
                      : endpoint.method === "PUT"
                      ? "border-white/10 hover:border-blue-400/20"
                      : endpoint.method === "DELETE"
                      ? "border-white/10 hover:border-red-400/20"
                      : "border-white/10 hover:border-green-400/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <pre
                      className={`text-sm overflow-x-auto font-mono ${
                        endpoint.method === "GET"
                          ? "text-green-400"
                          : endpoint.method === "POST"
                          ? "text-yellow-400"
                          : endpoint.method === "PUT"
                          ? "text-blue-400"
                          : endpoint.method === "DELETE"
                          ? "text-red-400"
                          : "text-green-400"
                      }`}
                    >
                      <code>
                        {JSON.stringify(endpoint.headers || {}, null, 2)}
                      </code>
                    </pre>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          JSON.stringify(endpoint.headers || {}, null, 2)
                        )
                      }
                      className={`p-3 rounded-xl transition-all duration-300 border ${
                        endpoint.method === "GET"
                          ? "hover:bg-white/10 text-white/60 hover:text-green-400 border-white/10 hover:border-green-400/30"
                          : endpoint.method === "POST"
                          ? "hover:bg-white/10 text-white/60 hover:text-yellow-400 border-white/10 hover:border-yellow-400/30"
                          : endpoint.method === "PUT"
                          ? "hover:bg-white/10 text-white/60 hover:text-blue-400 border-white/10 hover:border-blue-400/30"
                          : endpoint.method === "DELETE"
                          ? "hover:bg-white/10 text-white/60 hover:text-red-400 border-white/10 hover:border-red-400/30"
                          : "hover:bg-white/10 text-white/60 hover:text-green-400 border-white/10 hover:border-green-400/30"
                      }`}
                    >
                      <Copy size={18} />
                    </button>
                  </div>
                </div>
              )}

              {activeTabForEndpoint === "Response" && (
                <div
                  className={`bg-black/80 rounded-2xl p-6 relative border-2 transition-colors ${
                    endpoint.method === "GET"
                      ? "border-white/10 hover:border-green-400/20"
                      : endpoint.method === "POST"
                      ? "border-white/10 hover:border-yellow-400/20"
                      : endpoint.method === "PUT"
                      ? "border-white/10 hover:border-blue-400/20"
                      : endpoint.method === "DELETE"
                      ? "border-white/10 hover:border-red-400/20"
                      : "border-white/10 hover:border-green-400/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <pre
                      className={`text-sm overflow-x-auto font-mono ${
                        endpoint.method === "GET"
                          ? "text-green-400"
                          : endpoint.method === "POST"
                          ? "text-yellow-400"
                          : endpoint.method === "PUT"
                          ? "text-blue-400"
                          : endpoint.method === "DELETE"
                          ? "text-red-400"
                          : "text-green-400"
                      }`}
                    >
                      <code>{JSON.stringify(endpoint.response, null, 2)}</code>
                    </pre>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          JSON.stringify(endpoint.response, null, 2)
                        )
                      }
                      className={`p-3 rounded-xl transition-all duration-300 border ${
                        endpoint.method === "GET"
                          ? "hover:bg-white/10 text-white/60 hover:text-green-400 border-white/10 hover:border-green-400/30"
                          : endpoint.method === "POST"
                          ? "hover:bg-white/10 text-white/60 hover:text-yellow-400 border-white/10 hover:border-yellow-400/30"
                          : endpoint.method === "PUT"
                          ? "hover:bg-white/10 text-white/60 hover:text-blue-400 border-white/10 hover:border-blue-400/30"
                          : endpoint.method === "DELETE"
                          ? "hover:bg-white/10 text-white/60 hover:text-red-400 border-white/10 hover:border-red-400/30"
                          : "hover:bg-white/10 text-white/60 hover:text-green-400 border-white/10 hover:border-green-400/30"
                      }`}
                    >
                      <Copy size={18} />
                    </button>
                  </div>
                </div>
              )}

              {activeTabForEndpoint === "Request Body" && (
                <div
                  className={`bg-black/80 rounded-2xl p-6 relative border-2 transition-colors ${
                    endpoint.method === "GET"
                      ? "border-white/10 hover:border-green-400/20"
                      : endpoint.method === "POST"
                      ? "border-white/10 hover:border-yellow-400/20"
                      : endpoint.method === "PUT"
                      ? "border-white/10 hover:border-blue-400/20"
                      : endpoint.method === "DELETE"
                      ? "border-white/10 hover:border-red-400/20"
                      : "border-white/10 hover:border-green-400/20"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 overflow-x-auto">
                      {endpoint.requestBody || endpoint.queryParams ? (
                        <pre
                          className={`text-sm font-mono whitespace-pre-wrap ${
                            endpoint.method === "GET"
                              ? "text-green-400"
                              : endpoint.method === "POST"
                              ? "text-yellow-400"
                              : endpoint.method === "PUT"
                              ? "text-blue-400"
                              : endpoint.method === "DELETE"
                              ? "text-red-400"
                              : "text-green-400"
                          }`}
                        >
                          {formatRequestWithTypes(
                            endpoint.requestBody || endpoint.queryParams,
                            endpoint.requestBodyTypes ||
                              endpoint.queryParamsTypes
                          )
                            .split("\n")
                            .map((line, index) => {
                              // Check if line contains type annotation
                              if (line.includes("//")) {
                                const [jsonPart, typePart] = line.split("//");
                                return (
                                  <div key={index}>
                                    <span>{jsonPart}</span>
                                    <span className="text-gray-400 text-xs">
                                      // {typePart.trim()}
                                    </span>
                                  </div>
                                );
                              }
                              return <div key={index}>{line}</div>;
                            })}
                        </pre>
                      ) : (
                        <pre
                          className={`text-sm font-mono ${
                            endpoint.method === "GET"
                              ? "text-green-400"
                              : endpoint.method === "POST"
                              ? "text-yellow-400"
                              : endpoint.method === "PUT"
                              ? "text-blue-400"
                              : endpoint.method === "DELETE"
                              ? "text-red-400"
                              : "text-green-400"
                          }`}
                        >
                          <code>No request body required</code>
                        </pre>
                      )}
                    </div>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          JSON.stringify(
                            endpoint.requestBody || endpoint.queryParams || {},
                            null,
                            2
                          )
                        )
                      }
                      className={`ml-4 p-3 rounded-xl transition-all duration-300 border flex-shrink-0 ${
                        endpoint.method === "GET"
                          ? "hover:bg-white/10 text-white/60 hover:text-green-400 border-white/10 hover:border-green-400/30"
                          : endpoint.method === "POST"
                          ? "hover:bg-white/10 text-white/60 hover:text-yellow-400 border-white/10 hover:border-yellow-400/30"
                          : endpoint.method === "PUT"
                          ? "hover:bg-white/10 text-white/60 hover:text-blue-400 border-white/10 hover:border-blue-400/30"
                          : endpoint.method === "DELETE"
                          ? "hover:bg-white/10 text-white/60 hover:text-red-400 border-white/10 hover:border-red-400/30"
                          : "hover:bg-white/10 text-white/60 hover:text-green-400 border-white/10 hover:border-green-400/30"
                      }`}
                    >
                      <Copy size={18} />
                    </button>
                  </div>
                </div>
              )}
              
              {activeTabForEndpoint === "cURL" && (
                <div className="bg-black/80 rounded-2xl p-6 border-2 border-white/10">
                  <pre
                    className={`text-sm overflow-x-auto font-mono ${
                      endpoint.method === "GET"
                        ? "text-green-400"
                        : endpoint.method === "POST"
                        ? "text-yellow-400"
                        : endpoint.method === "PUT"
                        ? "text-blue-400"
                        : endpoint.method === "DELETE"
                        ? "text-red-400"
                        : "text-green-400"
                    }`}
                  >
                    <code>{`curl -X ${endpoint.method} "https://api.onmeta.in${
                      endpoint.path
                    }" \\
${generateHeadersString(endpoint.headers)}${
                      endpoint.requestBody
                        ? ` \\\n  -d '${JSON.stringify(
                            endpoint.requestBody,
                            null,
                            2
                          )}'`
                        : ""
                    }`}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EndpointCard;
