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

  // Method color configurations
  const getMethodStyles = (method) => {
    switch (method) {
      case "GET":
        return {
          badge: "text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950 hover:border-emerald-400 dark:hover:border-emerald-600",
          hover: "hover:border-emerald-300 dark:hover:border-emerald-600",
          glow: "#10b981",
          pathColor: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
          activeTab: "bg-emerald-600 dark:bg-emerald-500 text-white",
          border: "border-emerald-200 dark:border-emerald-800 hover:border-emerald-300 dark:hover:border-emerald-600",
          copyHover: "hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-300 dark:hover:border-emerald-600",
          commentColor: "text-emerald-700 dark:text-emerald-300"
        };
      case "POST":
        return {
          badge: "text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950 hover:border-yellow-400 dark:hover:border-yellow-600",
          hover: "hover:border-yellow-300 dark:hover:border-yellow-600",
          glow: "#eab308",
          pathColor: "group-hover:text-yellow-600 dark:group-hover:text-yellow-400",
          activeTab: "bg-yellow-600 dark:bg-yellow-500 text-white",
          border: "border-yellow-200 dark:border-yellow-800 hover:border-yellow-300 dark:hover:border-yellow-600",
          copyHover: "hover:text-yellow-600 dark:hover:text-yellow-400 hover:border-yellow-300 dark:hover:border-yellow-600",
          commentColor: "text-yellow-700 dark:text-yellow-300"
        };
      case "PUT":
        return {
          badge: "text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950 hover:border-blue-400 dark:hover:border-blue-600",
          hover: "hover:border-blue-300 dark:hover:border-blue-600",
          glow: "#3b82f6",
          pathColor: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
          activeTab: "bg-blue-600 dark:bg-blue-500 text-white",
          border: "border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-600",
          copyHover: "hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600",
          commentColor: "text-blue-700 dark:text-blue-300"
        };
      case "DELETE":
        return {
          badge: "text-red-600 dark:text-red-400 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950 hover:border-red-400 dark:hover:border-red-600",
          hover: "hover:border-red-300 dark:hover:border-red-600",
          glow: "#ef4444",
          pathColor: "group-hover:text-red-600 dark:group-hover:text-red-400",
          activeTab: "bg-red-600 dark:bg-red-500 text-white",
          border: "border-red-200 dark:border-red-800 hover:border-red-300 dark:hover:border-red-600",
          copyHover: "hover:text-red-600 dark:hover:text-red-400 hover:border-red-300 dark:hover:border-red-600",
          commentColor: "text-red-700 dark:text-red-300"
        };
      default:
        return {
          badge: "text-light-accent dark:text-primary-accent border-light-brdr dark:border-primary-brdr bg-light-surface dark:bg-primary-surface hover:border-light-accent dark:hover:border-primary-accent",
          hover: "hover:border-light-accent dark:hover:border-primary-accent",
          glow: "#32568d",
          pathColor: "group-hover:text-light-accent dark:group-hover:text-primary-accent",
          activeTab: "bg-light-accent dark:bg-primary-accent text-white",
          border: "border-light-brdr dark:border-primary-brdr hover:border-light-accent dark:hover:border-primary-accent",
          copyHover: "hover:text-light-accent dark:hover:text-primary-accent hover:border-light-accent dark:hover:border-primary-accent",
          commentColor: "text-light-accent dark:text-primary-accent"
        };
    }
  };

  const methodStyles = getMethodStyles(endpoint.method);

  // Generate formatted JSON with type annotations
  const formatRequestWithTypes = (data, types) => {
    if (!data || !types) return JSON.stringify(data || {}, null, 2);

    const formatted = JSON.stringify(data, null, 2);
    const lines = formatted.split("\n");

    return lines
      .map((line) => {
        const match = line.match(/^(\s*)"([^"]+)":\s*(.+),?$/);
        if (match) {
          const [, indent, key, value] = match;
          const type = types[key];
          if (type) {
            const cleanValue = value.replace(/,$/, "");
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
        className={`relative overflow-hidden rounded-2xl bg-light-surface dark:bg-primary-surface border border-light-brdr dark:border-primary-brdr transition-all duration-500 hover:shadow-2xl transform hover:scale-[1.01] ${methodStyles.hover}`}
      >
        {/* Glow effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${methodStyles.glow} 0%, transparent 70%)`,
          }}
        />

        {/* Main header */}
        <div
          className="p-8 cursor-pointer flex items-center justify-between hover:bg-light-bg/50 dark:hover:bg-primary-bg/50 transition-all duration-300 relative z-10"
          onClick={() => toggleEndpoint(endpoint.id)}
        >
          <div className="flex items-center space-x-6">
            <span className={`px-4 py-2 rounded-xl text-sm font-bold border transition-all duration-300 shadow-sm hover:shadow-lg ${methodStyles.badge}`}>
              {endpoint.method}
            </span>
            <div>
              <h3 className="text-2xl font-bold text-light-text dark:text-primary-text mb-1 transition-colors">
                {endpoint.title}
              </h3>
              <code className={`text-lg font-mono text-light-textSec dark:text-primary-textSec transition-colors ${methodStyles.pathColor}`}>
                {endpoint.path}
              </code>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-light-textSec dark:text-primary-textSec group-hover:text-light-text dark:group-hover:text-primary-text transition-colors">
              {isExpanded ? (
                <ChevronDown size={24} />
              ) : (
                <ChevronRight size={24} />
              )}
            </div>
          </div>
        </div>

        {/* Expanded content */}
        {isExpanded && (
          <div className="border-t border-light-brdr dark:border-primary-brdr">
            <div className="p-8 relative">
              <p className="text-light-textSec dark:text-primary-textSec mb-8 text-lg">
                {endpoint.description}
              </p>

              {/* Tab navigation */}
              <div className="flex space-x-2 mb-8 bg-light-bg dark:bg-primary-bg p-2 rounded-xl border border-light-brdr dark:border-primary-brdr w-fit">
                {["Headers", "Request Body", "Response", "cURL"].map((tab) => (
                  <button
                    key={tab}
                    className={`px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${
                      activeTabForEndpoint === tab
                        ? `shadow-lg transform scale-105 ${methodStyles.activeTab}`
                        : "text-light-textSec dark:text-primary-textSec hover:text-light-text dark:hover:text-primary-text hover:bg-light-surface dark:hover:bg-primary-surface"
                    }`}
                    onClick={() => setActiveTabForEndpoint(endpoint.id, tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Headers tab */}
              {activeTabForEndpoint === "Headers" && (
                <div className={`bg-light-bg dark:bg-primary-bg rounded-2xl p-6 relative border-2 transition-colors ${methodStyles.border}`}>
                  <div className="flex items-center justify-between">
                    <pre className="text-sm overflow-x-auto font-mono text-light-textSec dark:text-primary-textSec flex-1">
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
                      className={`ml-4 p-3 rounded-xl transition-all duration-300 border border-light-brdr dark:border-primary-brdr hover:bg-light-surface dark:hover:bg-primary-surface text-light-textSec dark:text-primary-textSec ${methodStyles.copyHover} flex-shrink-0`}
                    >
                      <Copy size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Response tab */}
              {activeTabForEndpoint === "Response" && (
                <div className={`bg-light-bg dark:bg-primary-bg rounded-2xl p-6 relative border-2 transition-colors ${methodStyles.border}`}>
                  <div className="flex items-center justify-between">
                    <pre className="text-sm overflow-x-auto font-mono text-light-textSec dark:text-primary-textSec flex-1">
                      <code>{JSON.stringify(endpoint.response, null, 2)}</code>
                    </pre>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          JSON.stringify(endpoint.response, null, 2)
                        )
                      }
                      className={`ml-4 p-3 rounded-xl transition-all duration-300 border border-light-brdr dark:border-primary-brdr hover:bg-light-surface dark:hover:bg-primary-surface text-light-textSec dark:text-primary-textSec ${methodStyles.copyHover} flex-shrink-0`}
                    >
                      <Copy size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Request Body tab */}
              {activeTabForEndpoint === "Request Body" && (
                <div className={`bg-light-bg dark:bg-primary-bg rounded-2xl p-6 relative border-2 transition-colors ${methodStyles.border}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1 overflow-x-auto">
                      {endpoint.requestBody || endpoint.queryParams ? (
                        <pre className="text-sm font-mono whitespace-pre-wrap text-light-textSec dark:text-primary-textSec">
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
                                    <span className={`${methodStyles.commentColor} text-xs`}>
                                      "// {typePart.trim()}""
                                    </span>
                                  </div>
                                );
                              }
                              return <div key={index}>{line}</div>;
                            })}
                        </pre>
                      ) : (
                        <pre className="text-sm font-mono text-light-textSec dark:text-primary-textSec">
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
                      className={`ml-4 p-3 rounded-xl transition-all duration-300 border border-light-brdr dark:border-primary-brdr hover:bg-light-surface dark:hover:bg-primary-surface text-light-textSec dark:text-primary-textSec ${methodStyles.copyHover} flex-shrink-0`}
                    >
                      <Copy size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* cURL tab */}
              {activeTabForEndpoint === "cURL" && (
                <div className={`bg-light-bg dark:bg-primary-bg rounded-2xl p-6 border-2 transition-colors ${methodStyles.border}`}>
                  <div className="flex items-start justify-between">
                    <pre className="text-sm overflow-x-auto font-mono text-light-textSec dark:text-primary-textSec flex-1">
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
                    <button
                      onClick={() =>
                        copyToClipboard(
                          endpoint.id === "kyc-upload"
                            ? `curl --location '{{BASE_URL}}/v1/users/upload/kyc' --header 'Authorization: Bearer YOUR_TOKEN' --header 'x-api-key: YOUR_API_KEY' --form 'panNumber="encryptedString"' --form 'email="user@example.com"' --form 'firstName="encryptedString"' --form 'lastName="encryptedString"' --form 'aadharNumber="encryptedString"' --form 'selfie=@"/path/to/file"' --form 'aadharFront=@"/path/to/file"' --form 'aadharBack=@"/path/to/file"' --form 'panFront=@"/path/to/file"' --form 'panBack=@"/path/to/file"' --form 'incomeRange="< 10 L "' --form 'profession="Teacher"'`
                            : `curl -X ${endpoint.method} "{{BASE_URL}}${endpoint.path}" ${generateHeadersString(endpoint.headers)} ${endpoint.requestBody ? `-d '${JSON.stringify(endpoint.requestBody, null, 2)}'` : ""}`
                        )
                      }
                      className={`ml-4 p-3 rounded-xl transition-all duration-300 border border-light-brdr dark:border-primary-brdr hover:bg-light-surface dark:hover:bg-primary-surface text-light-textSec dark:text-primary-textSec ${methodStyles.copyHover} flex-shrink-0`}
                    >
                      <Copy size={18} />
                    </button>
                  </div>
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