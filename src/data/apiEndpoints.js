export const apiEndpoints = {
  onramp: [
    // login (accessToken)
    {
      id: "login",
      method: "POST",
      path: "/v1/users/login",
      title: "Login",
      description: "Authenticate user and get access token",
      required: ["email"],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-key": "YOUR_API_KEY",
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
      title: "Refresh Login",
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
      title: "Fetch Token",
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
      title: "Fetch Quatation",
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

    // customer kyc check
    {
      id: "kyc-status",
      method: "POST",
      path: "/v1/users/kyc-status",
      title: "KYC Status",
      description: "Check KYC status of customer",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY",
        Authorization: "Bearer YOUR_TOKEN",
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
          isKycVerified: "true",
        },
      },
    },

    // customer submit kyc
    {
      id: "kyc-upload",
      method: "POST",
      path: "/v1/users/upload/kyc",
      title: "Upload KYC",
      description: "Upload user KYC documents and information for verification",
      required: [""],
      optional: [],
      headers: {
        Authorization: "Bearer YOUR_TOKEN",
        "x-api-key": "YOUR_API_KEY",
        "Content-Type": "multipart/form-data",
      },
      requestBody: {
        panNumber: "e755679f85167969e:ae2d3d561d96f2540897",
        email: "user@example.com",
        firstName: "d3470b063ad81a:4cc79f359c07508512b449565dc",
        lastName: "3226e2295a2594f:8a480093718fe622",
        aadharNumber: "ea6ffa8de411:bf6d5f05283d27a794",
        selfie: "[FILE_UPLOAD]",
        aadharFront: "[FILE_UPLOAD]",
        aadharBack: "[FILE_UPLOAD]",
        panFront: "[FILE_UPLOAD]",
        panBack: "[FILE_UPLOAD]",
        incomeRange: "< 10 L",
        profession: "Teacher",
      },
      requestBodyTypes: {
        panNumber: "string (encrypted)",
        email: "string",
        firstName: "string (encrypted)",
        lastName: "string (encrypted)",
        aadharNumber: "string (encrypted)",
        selfie: "file",
        aadharFront: "file",
        aadharBack: "file",
        panFront: "file",
        panBack: "file",
        incomeRange: "string",
        profession: "string",
      },
      response: {
        success: true,
        error: {},
      },
    },

    // customer bank account addition
    {
      id: "add-bank",
      method: "POST",
      path: "/v1/users/account-link",
      title: "Add Bank Account",
      description: "Add bank account of user",
      required: [""],
      optional: [],
      headers: {
        Authorization: "Bearer YOUR_TOKEN",
        "x-api-key": "YOUR_API_KEY",
        "Content-Type": "application/json",
      },
      requestBody: {
        name: "John Doe",
        panNumber: "ABCDE0011F",
        email: "user@example.com",
        kycVerfied: true,
        bankDetails: {
          accountNumber: "0000000000000000",
          accountName: "John Doe",
          ifsc: "ABCD0001122",
        },
      },
      requestBodyTypes: {
        name: "string",
        panNumber: "string",
        email: "string",
        kycVerfied: "bool",
        bankDetails: {
          accountNumber: "string",
          accountName: "string",
          ifsc: "string",
        },
      },
      response: {
        success: true,
        data: {
          referenceNumber: "ccc4f45e-6d3c-4625-8bcb-e0babea3b906",
          status: "SUCCESS",
        },
        error: {},
      },
    },

    // fetch status of bank addition
    {
      id: "fetch-bank-status",
      method: "GET",
      path: "/v1/users/get-bank-status/{{referenceNumber}}",
      title: "Check Bank Status",
      description: "Check status of recent adding bank account",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY",
        Authorization: "YOUR_TOKEN",
      },
      requestBody: "",
      requestBodyTypes: "",
      response: {
        success: true,
        data: {
          bankStatus: "SUCCESS",
          transactionId: "1353203607",
          referenceId: "ccc4f45e-6d3c-4625-8bcb-e0babea3b906",
        },
        error: {},
      },
    },

    // customer link UPI addition
    {
      id: "link-upi",
      method: "POST",
      path: "/v1/users/upi-link",
      title: "Link UPI ",
      description: "Add upiId for enable upi payments",
      required: [""],
      optional: [],
      headers: {
        Authorization: "Bearer YOUR_TOKEN",
        "x-api-key": "YOUR_API_KEY",
        "Content-Type": "application/json",
      },
      requestBody: {
        name: "John Doe",
        email: "user@example.com",
        phone: {
          countryCode: "+91",
          number: "9111111111",
        },
        upiId: "john@doe",
      },
      requestBodyTypes: {
        name: "string",
        email: "string",
        phone: {
          countryCode: "string",
          number: "string",
        },
        upiId: "string",
      },
      response: {
        success: true,
        data: {
          referenceNumber: "ccc4f45e-6d3c-4625-8bcb-e0babea3b906",
          status: "SUCCESS",
        },
        error: {},
      },
    },

    // fetch status of Upi addition
    {
      id: "fetch-upi-status",
      method: "GET",
      path: "/v1/users/get-upi-status/{{referenceNumber}}",
      title: "Check UPI Status",
      description: "Check status of recent upiId",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY",
        Authorization: "YOUR_TOKEN",
      },
      requestBody: "",
      requestBodyTypes: "",
      response: {
        success: true,
        data: {
          upiStatus: "SUCCESS",
          referenceId: "ccc4f45e-6d3c-4625-8bcb-e0babea3b906",
        },
        error: {},
      },
    },

    // fetch all currencies (for merchant)
    {
      id: "fetch-currencies",
      method: "GET",
      path: "/v1/orders/currencies",
      title: "Fetch Currencies",
      description: "Fetch all supportive currencies",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY",
        Authorization: "YOUR_TOKEN",
      },
      requestBody: "",
      requestBodyTypes: "",
      response: {
        success: true,
        data: [
          {
            currencyCode: "PHP",
            fraction: 2,
            symbol: "₱",
            paymentModes: ["....", "....", "...."],
          },
          {
            currencyCode: "INR",
            fraction: 2,
            symbol: "₹",
            paymentModes: ["....", "....", "...."],
          },
        ],
        error: {},
      },
    },

     // get chain wise limits
    {
      id: "chain-wise-limits",
      method: "GET",
      path: "/v1/orders/chain_limits",
      title: "Get Chain Wise Limits",
      description: "Get chain wise limits",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY",
      },
      requestBody: "",
      requestBodyTypes: "",
      response: {
        success: true,
        data: [{}],
        error: {},
      },
    },

    // create order onramp
    {
      id: "create-order-onramp",
      method: "POST",
      path: "v1/orders/create",
      title: "Create Order",
      description: "Create order onRamp",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY",
        Authorization: "YOUR_TOKEN",
      },
      requestBody: {
        buyTokenSymbol: "USDC.e",
        chainId: 137,
        fiatCurrency: "inr",
        fiatAmount: 1000,
        buyTokenAddress: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
        receiverAddress: "0x64Dc21C25Ba5ec2637e1fA32a5db7A845b9Ec222",
        paymentMode: "INR_UPI",
        upiId: {
          upiId: "john@doe",
          name: "John Doe",
        },
        bankDetails: {
          accountName: "",
          accountNumber: "",
          ifsc: "",
        },
      },
      requestBodyTypes: {
        buyTokenSymbol: "string",
        chainId: "number",
        fiatCurrency: "string",
        fiatAmount: "number",
        buyTokenAddress: "string",
        receiverAddress: "string",
        paymentMode: "string",
        upiId: {
          upiId: "string",
          name: "string",
        },
        bankDetails: {
          accountName: "string",
          accountNumber: "string",
          ifsc: "string",
        },
      },
      response: {
        success: true,
        data: {
          orderId: "6890c8c1b59b98cfb19a7b8f",
          pgOrderId: "",
          upiCode: "",
          redirect_actions: {
            qr_checkout_string:
              "upi://pay?pa=jana2311108098@janabank&am=1000.00&tn=6890d441bfb19a7c75&orgid=159765&pn=merchant1218926&mode=02&purpose=00&mc=0000&ver=01&cu=INR&mg=OFFLINE&qrMedium=04&sign=ANASmvuKq9Yvyv8F8snJD7KcfxdX2yNJfjxZPHAMtDaPwWGf2Tv6J6WukUTooT6sNCHJXIrM92ItGbIxEiRSL6saAO63EYeFUqw73Mr1Kb658IbnXcMRI5hIW+6fGFIQXmyp1EHUl6vtTCOhfYNBGtCX8dYTrTkKJjnsc36aF4n6PFRv",
            deepLinks: [
              {
                name: "Phonepe",
                url: "phonepe://pay?pa=jana2311108098@janabank&pn=merchant1218926&am=1000.00&tn=6890d441bfb19a7c75&cu=INR",
                imageUrl:
                  "https://ik.imagekit.io/z3vwasz5xwz/Meta_widget/Payment_icons/Phonepe_53UkYwiQw.svg",
              },
              {
                name: "QR",
                url: "upi://pay?pa=jana2311108098@janabank&am=1000.00&tn=6890d441bfb19a7c75&orgid=159765&pn=merchant1218926&mode=02&purpose=00&mc=0000&ver=01&cu=INR&mg=OFFLINE&qrMedium=04&sign=ANASmvuKq9Yvyv8F8snJD7KcfxdX2yNJfjxZPHAMtDaPwWGf2Tv6J6WukUTooT6sNCHJXIrM92ItGbIxEiRSL6saAO63EYeFUqw73Mr1Kb658IbnXcMRI5hIW+6fGFIQXmyp1EHUl6vtTCOhfYNBGtCX8dYTrTkKJjnsc36aF4n6PFRv",
                imageUrl:
                  "https://ik.imagekit.io/z3vwasz5xwz/Meta_widget/Payment_icons/bhim_t366jHPDh.svg",
              },
            ],
          },
          paymentDetails: {
            upiCode: "jana2311108098@janabank",
          },
        },
        error: {},
      },
    },

    // update UTR
    {
      id: "update-utr",
      method: "POST",
      path: "v1/orders/utr",
      title: "Update UTR",
      description: "update the utr with orderId",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY",
        Authorization: "YOUR_TOKEN",
      },
      requestBody: {
        orderId: "6890c8c1b59b98cfb19a7b8f",
        utr: "123456789987",
      },
      requestBodyTypes: {
        orderId: "string",
        utr: "string",
      },
      response: {
        success: true,
        error: {},
      },
    },

    // Order Status
    {
      id: "order-status-onramp",
      method: "POST",
      path: "v1/orders/status",
      title: "Check Order Status",
      description: "Fetch Order Status with order ID",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY",
        Authorization: "YOUR_TOKEN",
      },
      requestBody: {
        orderId: "6890c8c1b59b98cfb19a7b8f",
      },
      requestBodyTypes: {
        orderId: "string",
      },
      response: {
        success: true,
        data: {
          status: "fiatPending",
          reason: "",
          transactionHash: "",
          explorerUrl: "",
          transferredAmount: "",
          transferredAmountWei: "",
          fiat: 100,
          receiverWalletAddress: "0xCdF10Bc7a1fAE391ff18F4C220ACe912547971cC",
          buyTokenSymbol: "WMATIC",
          buyTokenAddress: "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",
          currency: "INR",
          created_at: "2022-10-13T19:07:30.155Z",
          updated_at: "2022-10-13T19:07:30.155Z",
          chainId: 80001,
          customer: {
            email: "user@example.com",
            phone: {
              countryCode: "+91",
              number: "9191919191",
            },
            created_at: "2022-04-05T12:13:51.899Z",
          },
          orderId: "6890c8c1b59b98cfb19a7b8f",
        },
        error: {},
      },
    },

    // Get invoice
    {
      id: "invoice",
      method: "GET",
      path: "/v1/orders/invoice/{{order_id}}",
      title: "Get Invoice PDF",
      description:
        "The response for this API is PDF URL which has a validity of 1 hour. After which it will be expired. If expired new URL can be regerated by calling the same API",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY",
      },
      requestBody: "",
      requestBodyTypes: "",
      response: {
        success: true,
        data: {
          url: "https://stg-invoice.sgp1.digitaloceanspaces.com/v1/669189cfb50c4dff0faef7c9.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=DO00F4EQRRW9W32R93U3%2F20250505%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250505T080048Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=ca84e35f5f4f3df272e3920ab0b2134ded22c32982e649d7d179290f13dcd76b",
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
