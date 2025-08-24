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
        className={`relative overflow-hidden rounded-2xl bg-primary-bg border-2 transition-all duration-500 hover:shadow-2xl transform hover:scale-[1.01] ${
          endpoint.method === "GET"
            ? "border-border-secondary hover:border-border-accent-light"
            : endpoint.method === "POST"
            ? "border-border-secondary hover:border-yellow-subtle"
            : endpoint.method === "PUT"
            ? "border-border-secondary hover:border-blue-400/30"
            : endpoint.method === "DELETE"
            ? "border-border-secondary hover:border-red-400/30"
            : "border-border-secondary hover:border-border-accent-light"
        }`}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${
              endpoint.method === "GET"
                ? "var(--color-primary-accent)"
                : endpoint.method === "POST"
                ? "#facc15"
                : endpoint.method === "PUT"
                ? "#60a5fa"
                : endpoint.method === "DELETE"
                ? "#f87171"
                : "var(--color-primary-accent)"
            } 0%, transparent 70%)`,
          }}
        />

        <div
          className="p-8 cursor-pointer flex items-center justify-between hover:bg-bg-hover transition-all duration-300 relative z-10"
          onClick={() => toggleEndpoint(endpoint.id)}
        >
          <div className="flex items-center space-x-6">
            <span
              className={`px-4 py-2 rounded-xl text-sm font-bold border-2 transition-all duration-300 ${
                endpoint.method === "GET"
                  ? "bg-primary-bg text-primary-accent border-border-accent-light group-hover:border-primary-accent group-hover:shadow-lg"
                  : endpoint.method === "POST"
                  ? "bg-primary-bg text-yellow-primary border-yellow-subtle group-hover:border-yellow-primary group-hover:shadow-lg"
                  : endpoint.method === "PUT"
                  ? "bg-primary-bg text-blue-400 border-blue-400/30 group-hover:border-blue-400 group-hover:shadow-lg"
                  : endpoint.method === "DELETE"
                  ? "bg-primary-bg text-red-400 border-red-400/30 group-hover:border-red-400 group-hover:shadow-lg"
                  : "bg-primary-bg text-primary-text border-border-primary group-hover:border-primary-accent group-hover:shadow-lg"
              }`}
            >
              {endpoint.method}
            </span>
            <div>
              <h3 className="text-2xl font-bold text-primary-text mb-1 transition-colors">
                {endpoint.title}
              </h3>
              <code
                className={`text-lg font-mono transition-colors ${
                  endpoint.method === "GET"
                    ? "text-primary-subtle group-hover:text-primary-accent/80"
                    : endpoint.method === "POST"
                    ? "text-primary-subtle group-hover:text-yellow-muted/80"
                    : endpoint.method === "PUT"
                    ? "text-primary-subtle group-hover:text-blue-400/80"
                    : endpoint.method === "DELETE"
                    ? "text-primary-subtle group-hover:text-red-400/80"
                    : "text-primary-subtle group-hover:text-primary-accent/80"
                }`}
              >
                {endpoint.path}
              </code>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-primary-subtle group-hover:text-primary-text transition-colors">
              {isExpanded ? (
                <ChevronDown size={24} />
              ) : (
                <ChevronRight size={24} />
              )}
            </div>
          </div>
        </div>

        {isExpanded && (
          <div className="border-t-2 border-border-secondary">
            <div className="p-8 relative">
              <p className="text-primary-muted mb-8 text-lg">
                {endpoint.description}
              </p>

              <div className="flex space-x-2 mb-8 bg-bg-secondary p-2 rounded-xl border border-border-secondary w-fit">
                {["Headers", "Request Body", "Response", "cURL"].map((tab) => (
                  <button
                    key={tab}
                    className={`px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${
                      activeTabForEndpoint === tab
                        ? `shadow-lg transform scale-105 ${
                            endpoint.method === "GET"
                              ? "bg-primary-accent text-primary-bg"
                              : endpoint.method === "POST"
                              ? "bg-yellow-primary text-primary-bg"
                              : endpoint.method === "PUT"
                              ? "bg-blue-400 text-primary-bg"
                              : endpoint.method === "DELETE"
                              ? "bg-red-400 text-primary-bg"
                              : "bg-primary-accent text-primary-bg"
                          }`
                        : "text-primary-subtle hover:text-primary-text hover:bg-bg-hover"
                    }`}
                    onClick={() => setActiveTabForEndpoint(endpoint.id, tab)}
                  >
                    {tab.charAt(0) + tab.slice(1)}
                  </button>
                ))}
              </div>

              {activeTabForEndpoint === "Headers" && (
                <div
                  className={`bg-bg-glass rounded-2xl p-6 relative border-2 transition-colors ${
                    endpoint.method === "GET"
                      ? "border-border-secondary hover:border-border-accent-faint"
                      : endpoint.method === "POST"
                      ? "border-border-secondary hover:border-yellow-faint"
                      : endpoint.method === "PUT"
                      ? "border-border-secondary hover:border-blue-400/20"
                      : endpoint.method === "DELETE"
                      ? "border-border-secondary hover:border-red-400/20"
                      : "border-border-secondary hover:border-border-accent-faint"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <pre
                      className={`text-sm overflow-x-auto font-mono text-primary-muted`}
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
                          ? "hover:bg-bg-hover text-primary-subtle hover:text-primary-accent border-border-secondary hover:border-border-accent-light"
                          : endpoint.method === "POST"
                          ? "hover:bg-bg-hover text-primary-subtle hover:text-yellow-primary border-border-secondary hover:border-yellow-subtle"
                          : endpoint.method === "PUT"
                          ? "hover:bg-bg-hover text-primary-subtle hover:text-blue-400 border-border-secondary hover:border-blue-400/30"
                          : endpoint.method === "DELETE"
                          ? "hover:bg-bg-hover text-primary-subtle hover:text-red-400 border-border-secondary hover:border-red-400/30"
                          : "hover:bg-bg-hover text-primary-subtle hover:text-primary-accent border-border-secondary hover:border-border-accent-light"
                      }`}
                    >
                      <Copy size={18} />
                    </button>
                  </div>
                </div>
              )}

              {activeTabForEndpoint === "Response" && (
                <div
                  className={`bg-bg-glass rounded-2xl p-6 relative border-2 transition-colors ${
                    endpoint.method === "GET"
                      ? "border-border-secondary hover:border-border-accent-faint"
                      : endpoint.method === "POST"
                      ? "border-border-secondary hover:border-yellow-faint"
                      : endpoint.method === "PUT"
                      ? "border-border-secondary hover:border-blue-400/20"
                      : endpoint.method === "DELETE"
                      ? "border-border-secondary hover:border-red-400/20"
                      : "border-border-secondary hover:border-border-accent-faint"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <pre
                      className={`text-sm overflow-x-auto font-mono text-primary-muted`}
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
                          ? "hover:bg-bg-hover text-primary-subtle hover:text-primary-accent border-border-secondary hover:border-border-accent-light"
                          : endpoint.method === "POST"
                          ? "hover:bg-bg-hover text-primary-subtle hover:text-yellow-primary border-border-secondary hover:border-yellow-subtle"
                          : endpoint.method === "PUT"
                          ? "hover:bg-bg-hover text-primary-subtle hover:text-blue-400 border-border-secondary hover:border-blue-400/30"
                          : endpoint.method === "DELETE"
                          ? "hover:bg-bg-hover text-primary-subtle hover:text-red-400 border-border-secondary hover:border-red-400/30"
                          : "hover:bg-bg-hover text-primary-subtle hover:text-primary-accent border-border-secondary hover:border-border-accent-light"
                      }`}
                    >
                      <Copy size={18} />
                    </button>
                  </div>
                </div>
              )}

              {activeTabForEndpoint === "Request Body" && (
                <div
                  className={`bg-bg-glass rounded-2xl p-6 relative border-2 transition-colors ${
                    endpoint.method === "GET"
                      ? "border-border-secondary hover:border-border-accent-faint"
                      : endpoint.method === "POST"
                      ? "border-border-secondary hover:border-yellow-faint"
                      : endpoint.method === "PUT"
                      ? "border-border-secondary hover:border-blue-400/20"
                      : endpoint.method === "DELETE"
                      ? "border-border-secondary hover:border-red-400/20"
                      : "border-border-secondary hover:border-border-accent-faint"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 overflow-x-auto">
                      {endpoint.requestBody || endpoint.queryParams ? (
                        <pre
                          className={`text-sm font-mono whitespace-pre-wrap text-primary-muted`}
                        >
                          {formatRequestWithTypes(
                            endpoint.requestBody || endpoint.queryParams,
                            endpoint.requestBodyTypes ||
                              endpoint.queryParamsTypes
                          )
                            .split("\n")
                            .map((line, index) => {
                              if (line.includes("//")) {
                                const [jsonPart, typePart] = line.split("//");
                                return (
                                  <div key={index}>
                                    <span>{jsonPart}</span>
                                    <span
                                      className={`${
                                        endpoint.method === "GET"
                                          ? "text-green-700"
                                          : endpoint.method === "POST"
                                          ? "text-yellow-comment"
                                          : endpoint.method === "PUT"
                                          ? "text-blue-700"
                                          : endpoint.method === "DELETE"
                                          ? "text-red-700"
                                          : "text-green-700"
                                      } text-xs`}
                                    >
                                      // {typePart.trim()}
                                    </span>
                                  </div>
                                );
                              }
                              return <div key={index}>{line}</div>;
                            })}
                        </pre>
                      ) : (
                        <pre className={`text-sm font-mono text-primary-muted`}>
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
                          ? "hover:bg-bg-hover text-primary-subtle hover:text-primary-accent border-border-secondary hover:border-border-accent-light"
                          : endpoint.method === "POST"
                          ? "hover:bg-bg-hover text-primary-subtle hover:text-yellow-primary border-border-secondary hover:border-yellow-subtle"
                          : endpoint.method === "PUT"
                          ? "hover:bg-bg-hover text-primary-subtle hover:text-blue-400 border-border-secondary hover:border-blue-400/30"
                          : endpoint.method === "DELETE"
                          ? "hover:bg-bg-hover text-primary-subtle hover:text-red-400 border-border-secondary hover:border-red-400/30"
                          : "hover:bg-bg-hover text-primary-subtle hover:text-primary-accent border-border-secondary hover:border-border-accent-light"
                      }`}
                    >
                      <Copy size={18} />
                    </button>
                  </div>
                </div>
              )}

              {activeTabForEndpoint === "cURL" && (
                <div className="bg-bg-glass rounded-2xl p-6 border-2 border-border-secondary">
                  <pre
                    className={`text-sm overflow-x-auto font-mono text-primary-muted`}
                  >
                    <code>
                      {endpoint.id === "kyc-upload"
                        ? `curl --location '{{BASE_URL}}/v1/users/upload/kyc' \\
--header 'Authorization: Bearer YOUR_TOKEN' \\
--header 'x-api-key: YOUR_API_KEY' \\
--form 'panNumber="encryptedString"' \\
--form 'email="user@example.com"' \\
--form 'firstName="encryptedString"' \\
--form 'lastName="encryptedString"' \\
--form 'aadharNumber="encryptedString"' \\
--form 'selfie=@"/path/to/file"' \\
--form 'aadharFront=@"/path/to/file"' \\
--form 'aadharBack=@"/path/to/file"' \\
--form 'panFront=@"/path/to/file"' \\
--form 'panBack=@"/path/to/file"' \\
--form 'incomeRange="< 10 L "' \\
--form 'profession="Teacher"'`
                        : `curl -X ${endpoint.method} "{{BASE_URL}}${
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
                          }`}
                    </code>
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