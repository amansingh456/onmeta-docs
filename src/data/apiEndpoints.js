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
        "x-api-key":"YOUR_API_KEY"
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
          "......",
        ],
      },
    },

    // fetch quote
    {
      id: "fetch-quote",
      method: "POST",
      path: "/v1/quote/fetch",
      title: "Customer Fetch Quatation",
      description: "Customer can fetch quote and check conversation rates",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY",
      },
      requestBody: {
        buyTokenSymbol: "USDT",
        chainId: 137,
        fiatCurrency: "inr",
        fiatAmount: 30000,
      },
      requestBodyTypes: {
        buyTokenSymbol: "string",
        chainId: "number",
        fiatCurrency: "string",
        fiatAmount: "number",
      },
      response: {
        success: true,
        data: {
          gasPriceWei: "30139505131",
          gasUseEstimate: "",
          quote: "318920900",
          orders: [
            {
              tokenIn: {
                isBlacklist: false,
                address: "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
                chainId: 137,
                decimals: 6,
                name: "native USD Coin",
                symbol: "USDC",
                logoURI:
                  "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
                sources: ["0x", "1inch", "Uniswap-V3"],
                isVisible: true,
                updatedAt: "0001-01-01T00:00:00Z",
              },
              tokenOut: {
                isBlacklist: false,
                address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
                chainId: 137,
                decimals: 6,
                name: "Tether USD",
                symbol: "USDT",
                logoURI:
                  "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
                sources: ["0x"],
                isVisible: true,
                updatedAt: "0001-01-01T00:00:00Z",
              },
              source: "0x",
              amountIn: "319427497",
              amountOut: "318920900",
            },
          ],
          source: "0x",
          gasPriceNativeToken: "9723000000000000",
          nativeTokenDecimals: 18,
          estimateId: "c49fb713-df5f-43b7-a2b4-a886eb907894",
          desiredOrder: {
            base: {
              gasCharge: {
                currency: "inr",
                value: "0.18",
              },
              gasChargeInINR: "0.0",
              transactionFee: 0,
            },
          },
          receivedTokens: "318.9209",
          conversionRate: "94.06664552",
        },
        error: {},
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
