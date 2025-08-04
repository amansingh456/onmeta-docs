export const apiEndpoints = {
  onramp: [
    // login (accessToken)
    {
      id: "login",
      method: "POST",
      path: "/v1/users/login",
      title: "Customer Login",
      description: "Authenticate user and get access token",
      required: ["email"],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "OnMeta-Client/1.0",
      },
      requestBody: {
        email: "user@example.com",
      },
      requestBodyTypes: {
        email: "string",
      },
      response: {
        success: true,
        data: {
          accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....",
          refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....",
        },
        error: {},
      },
    },

    // login(with refreshTok)
    {
      id: "refresh-login",
      method: "GET",
      path: "/v1/users/refresh-token",
      title: "Customer Refresh Login",
      description: "Get access token with refresh token ( from login API )",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY",
        Authorization: "Bearer YOUR_REFRESH_TOKEN",
      },
      requestBody: "",
      requestBodyTypes: "",
      response: {
        success: true,
        data: {
          accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....",
        },
        error: {},
      },
    },

    // fetch all tokens (for merchant)
    {
      id: "fetch-tokens",
      method: "GET",
      path: "/v1/tokens",
      title: "Merchant Fetch Token",
      description: "Merchant can check all supportive tokens",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY",
      },
      requestBody: "",
      requestBodyTypes: "",
      response: {
        res: [
          {
            address: "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
            chainId: 137,
            decimals: 6,
            name: "native USD Coin",
            symbol: "USDC",
            logoURI:
              "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
          },
          "......"
        ],
      },
    },

    {
      id: "quote",
      method: "GET",
      path: "/api/onramp/quote",
      title: "Get OnRamp Quote",
      description: "Fetch conversion rates for fiat to crypto",
      required: ["fiatAmount", "fiatCurrency", "cryptoSymbol", "chainId"],
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer YOUR_TOKEN",
        Accept: "application/json",
        "X-API-Version": "v1",
      },
      requestBody: null,
      queryParams: {
        fiatAmount: 100,
        fiatCurrency: "INR",
        cryptoSymbol: "MATIC",
        chainId: 137,
      },
      queryParamsTypes: {
        fiatAmount: "number",
        fiatCurrency: "string",
        cryptoSymbol: "string",
        chainId: "number",
      },
      response: {
        success: true,
        data: {
          fiatAmount: 100,
          cryptoAmount: 85.23,
          rate: 0.8523,
          fees: 2.5,
          networkFees: 0.1,
        },
      },
    },
  ],

  offramp: [
    {
      id: "offramp-quote",
      method: "GET",
      path: "/api/offramp/quote",
      title: "Get OffRamp Quote",
      description: "Fetch conversion rates for crypto to fiat",
      required: ["cryptoAmount", "cryptoSymbol", "fiatCurrency", "chainId"],
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer YOUR_TOKEN",
        Accept: "application/json",
        "X-API-Version": "v1",
      },
      response: {
        success: true,
        data: {
          cryptoAmount: 100,
          fiatAmount: 8523.45,
          rate: 85.2345,
          fees: 25.5,
          networkFees: 0.5,
        },
      },
    },
  ],
};
