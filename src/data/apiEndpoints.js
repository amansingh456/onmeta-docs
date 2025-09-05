export const apiEndpoints = {
  onramp: [
    // login (accessToken)
    {
      id: "login",
      method: "POST",
      path: "/v1/users/login",
      title: "Login",
      description:
        "Using email let us create access token which can be utilised for subsequent api request, without this, request will be denied with reason as unauthorised.",
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
      responseFalse :{
        
      }
    },

    // login(with refreshTok)
    {
      id: "refresh-login",
      method: "GET",
      path: "/v1/users/refresh-token",
      title: "Refresh Login",
      description:
        "Get the refresh access token for a user. With refresh token received from User Login api request you can get new access tokens and use it in subsequent api's if the earlier access token is expired.",
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
      description: "Fetch list of enabled tokens for your api-key",
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

    // get chain wise limits
    {
      id: "chain-wise-limits",
      method: "GET",
      path: "/v1/orders/get-chain-limit",
      title: "Get chain wise limits",
      description: "Fetch chain wise Min/Max fiat limits for your apiKey",
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

    // fetch quote
    {
      id: "fetch-quote",
      method: "POST",
      path: "/v1/quote/fetch",
      title: "Fetch Quatation",
      description:
        "Fetch Quotation for the provided token and chainId combination",
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
      description:
        "link user account with bank details. this details will be used for refund or for offramp payouts.",
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
      description: "Get status for the account link process.",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY",
        Authorization: "Bearer YOUR_TOKEN",
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
      description: "Get status for the UPI Id linked earlier",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY",
        Authorization: "Bearer YOUR_TOKEN",
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

    // fetch all UPIs
    {
      id: "fetch-all-upis",
      method: "GET",
      path: "/v1/users/upi/fetch",
      title: "Fetch all UPIs",
      description: "Get all the linked UPI Ids for a customer",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY",
        Authorization: "Bearer YOUR_TOKEN",
      },
      requestBody: "",
      requestBodyTypes: "",
      response: {
        success: true,
        message: "success",
        data:[ {
          upiId: "john@doe",
          name: "John Doe",
          status:"SUCCESS",
          referenceId:"d8fef079-0f0c-4182-90c3-351631247d25",
          reason:"........"
        }]
      },
    },

     // fetch all Banks
    {
      id: "fetch-all-banks",
      method: "GET",
      path: "/v1/users/bank/fetch",
      title: "Fetch all Bank Accounts",
      description: "Get all the linked Bank Accounts for a customer",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY",
        Authorization: "Bearer YOUR_TOKEN",
      },
      requestBody: "",
      requestBodyTypes: "",
      response: {
        success: true,
        message: "success",
        "data": [
        {
            "accountNumber": "XXXX7315",
            "accountName": "John Doe",
            "ifsc": "BKID0001234",
            "referenceNumber": "ccc4f45e-6d3c-4625-8bcb-e0babea3b906",
            "transactionId": "1353203607",
            "tenantId": "68777a0af533c18a4cea1234",
            "status": "SUCCESS",
            "created_at": "2025-08-04T13:10:57.123Z",
            "updated_at": "2025-08-04T13:11:02.221Z",
            "verificationName": "John Doe",
            "reason": "........"
        }
    ]
      },
    },

    // fetch all currencies (for merchant)
    {
      id: "fetch-currencies",
      method: "GET",
      path: "/v1/orders/currencies",
      title: "Fetch Currencies",
      description: "Get all supportive currencies",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY",
        Authorization: "Bearer YOUR_TOKEN",
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

    // create order onramp
    {
      id: "create-order-onramp",
      method: "POST",
      path: "/v1/orders/create",
      title: "Create Order",
      description:
        "To create Onramp order. you need to link UPI ID or Bank account of the user before creating orders",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY",
        Authorization: "Bearer YOUR_TOKEN",
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
      path: "/v1/orders/utr",
      title: "Update UTR",
      description: "Update the UTR for a given orderId",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY",
        Authorization: "Bearer YOUR_TOKEN",
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
      path: "/v1/orders/status",
      title: "Check Order Status",
      description: "Fetch Order Status with order ID",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY",
        Authorization: "Bearer YOUR_TOKEN",
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

    // Fetch Order History
    {
      id: "order-history",
      method: "GET",
      path: "/v1/orders/{{skip}}",
      title: "Fetch Users Order History",
      description:
        "API returns 10 recent transactions of the user. Skip is used for pagination. For fetching next 10 latest transactions value of skip value will be 1.",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY",
        Authorization: "Bearer YOUR_TOKEN",
      },
      requestBody: "",
      requestBodyTypes: "",
      response: {
        success: true,
        data: [
          {
            orderId: "6890c8c1b59b98cfb19a7b8f",
            status: "fiatPending",
            amount: 100,
            receiverWalletAddress: "0x232424242424242",
            buyTokenSymbol: "WMATIC",
            buyTokenAddress: "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",
            currency: "INR",
            currencySymbol: "₹",
            created_at: "2022-10-11T13:47:36.323Z",
            source: "UTR",
            chainId: 137,
            paymentDetails: {
              source: "UTR",
              reference: "",
            },
            reason: "",
            txnHash: "0x122..",
          },
        ],
      },
    },
  ],

  offramp: [
    //login
    {
      id: "login",
      method: "POST",
      path: "/v1/users/login",
      title: "Login",
      description:
        "Using email let us create access token which can be utilised for subsequent api request, without this, request will be denied with reason as unauthorised.",
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
      description:
        "Get the refresh access token for a user. With refresh token received from User Login api request you can get new access tokens and use it in subsequent api's if the earlier access token is expired.",
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
      description: "Fetch list of enabled tokens for your api-key",
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

    // get chain wise limits
    {
      id: "chain-wise-limits",
      method: "GET",
      path: "/v1/orders/get-chain-limit",
      title: "Get chain wise limits",
      description: "Fetch chain wise Min/Max fiat limits for your apiKey",
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

    //TODO: need to add fetch quote By Fiat
    // {
    //   id: "fetch-quote-fiat",
    //   method: "POST",
    //   path: "/v1/quote/sell",
    //   title: "Fetch Quatation - Fiat",
    //   description: "Fetch Quotation Offramp By Fiat Amount.",
    //   required: [""],
    //   optional: ["remember"],
    //   headers: {
    //     "Content-Type": "application/json",
    //     "x-api-key": "YOUR_API_KEY",
    //   },
    //   requestBody: {
    //     sellTokenSymbol: "USDT",
    //     sellTokenAddress: "0x55d398326f99059ff775485246999027b3197955",
    //     chainId: 56,
    //     fiatCurrency: "inr",
    //     fiatAmount: 30000,
    //     senderAddress: "0xcF4562Dfb0682331703F5DB8Cf5EA6390B8f307b",
    //   },
    //   requestBodyTypes: {
    //     sellTokenSymbol: "string",
    //     sellTokenAddress: "string",
    //     chainId: "number",
    //     fiatCurrency: "string",
    //     fiatAmount: "number",
    //     senderAddress: "string",
    //   },
    //   response: {
    //     success: true,
    //     data: {
    //       sellTokens: "1.234",
    //       conversionRate: "82.21",
    //       transactionFee: 3,
    //       gasFee: 7.0,
    //       fiatCurrency: "inr",
    //       fiatAmount: 100,
    //     },
    //     error: {},
    //   },
    // },

    // fetch quote By Crypto
    {
      id: "fetch-quote-crypto",
      method: "POST",
      path: "/v1/quote/sell",
      title: "Fetch Quatation - Crypto",
      description: "Fetch Quotation Offramp By Crypto Input",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY",
      },
      requestBody: {
        sellTokenSymbol: "USDT",
        sellTokenAddress: "0x55d398326f99059ff775485246999027b3197955",
        chainId: 56,
        fiatCurrency: "inr",
        sellTokenAmount: 10,
        senderAddress: "0xcF4562Dfb0682331703F5DB8Cf5EA6390B8f307b",
      },
      requestBodyTypes: {
        sellTokenSymbol: "string",
        sellTokenAddress: "string",
        chainId: "number",
        fiatCurrency: "string",
        sellTokenAmount: "number",
        senderAddress: "string",
      },
      response: {
        success: true,
        data: {
          sellTokens: "1.234",
          conversionRate: "82.21",
          transactionFee: 3,
          gasFee: 7.0,
          fiatCurrency: "inr",
          fiatAmount: 1000,
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
      description:
        "link user account with bank details. this details will be used for refund or for offramp payouts.",
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
      description: "Get status for the account link process.",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY",
        Authorization: "Bearer YOUR_TOKEN",
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

      // fetch all Banks
    {
      id: "fetch-all-banks",
      method: "GET",
      path: "/v1/users/bank/fetch",
      title: "Fetch all Bank Accounts",
      description: "Get all the linked Bank Accounts for a customer",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY",
        Authorization: "Bearer YOUR_TOKEN",
      },
      requestBody: "",
      requestBodyTypes: "",
      response: {
        success: true,
        message: "success",
        "data": [
        {
            "accountNumber": "XXXX7315",
            "accountName": "John Doe",
            "ifsc": "BKID0001234",
            "referenceNumber": "ccc4f45e-6d3c-4625-8bcb-e0babea3b906",
            "transactionId": "1353203607",
            "tenantId": "68777a0af533c18a4cea1234",
            "status": "SUCCESS",
            "created_at": "2025-08-04T13:10:57.123Z",
            "updated_at": "2025-08-04T13:11:02.221Z",
            "verificationName": "John Doe",
            "reason": "........"
        }
    ]
      },
    },


    // fetch all currencies (for merchant)
    {
      id: "fetch-currencies",
      method: "GET",
      path: "/v1/orders/currencies",
      title: "Fetch Currencies",
      description: "Get all supportive currencies",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY",
        Authorization: "Bearer YOUR_TOKEN",
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

    //TODO: need to add one more create order with FIAT

    // create order offRamp - Crypto
    {
      id: "create-order-offRamp-crypto",
      method: "POST",
      path: "/v1/offramp/orders/create",
      title: "Create Order OffRamp - Crypto",
      description:
        "To create OffRamp order. you need to add Bank account of the user before creating orders",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY",
        Authorization: "Bearer YOUR_TOKEN",
      },
      requestBody: {
        bankDetails: {
          accountNumber: "XXXX7315",
          ifsc: "ABCD0009955",
        },
        chainId: 137,
        sellTokenAmount: 5,
        fiatCurrency: "inr",
        sellTokenAddress: "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
        sellTokenSymbol: "USDC",
        senderWalletAddress: "0x4cDF040E5018D862D7dE16225b7A2e6F6aE7c4d7",
        refundWalletAddress: "0x4cDF040E5018D862D7dE16225b7A2e6F6aE7c4d7",
        metaData: {},
      },
      requestBodyTypes: {
        bankDetails: {
          accountNumber: "string",
          ifsc: "string",
        },
        chainId: "number",
        sellTokenAmount: "number",
        fiatCurrency: "string",
        sellTokenAddress: "string",
        sellTokenSymbol: "string",
        senderWalletAddress: "string",
        refundWalletAddress: "string",
        metaData: "object",
      },
      response: {
        success: true,
        data: {
          orderId: "6890c8c1b59b98cfb19a7b8f",
          receiverWalletAddress: "0x114540f8bb4ace7e54ef44d44d86B9bCc693897C",
          gasPriceWei: "28600000000",
          gasUseEstimate: "70000",
          quote: "5",
          fiatCurrency: "inr",
          fiatAmount: 445.4,
          sellTokenSymbol: "USDC",
          sellTokenAddress: "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
          senderWalletAddress: "0x4cDF040E5018D862D7dE16225b7A2e6F6aE7c4d7",
          chainId: 137,
          paymentMode: "NEFT",
        },
        error: {},
      },
    },

    // update TxnHash
    {
      id: "update-txnHash",
      method: "POST",
      path: "/v1/offramp/orders/txnhash",
      title: "Update Transaction Hash",
      description:
        "Update Transaction Hash for the offramp order so that order will be completed and fiat payout will be processed.",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY",
        Authorization: "Bearer YOUR_TOKEN",
      },
      requestBody: {
        orderId: "6890c8c1b59b98cfb19a7b8f",
        txnHash: "0xe13r11922664140998823t712t3781t7",
      },
      requestBodyTypes: {
        orderId: "string",
        txnHash: "string",
      },
      response: {
        success: true,
        error: {},
      },
    },

    // Order Status
    {
      id: "order-status-offRamp",
      method: "POST",
      path: "/v1/offramp/orders/status",
      title: "Check Order Status",
      description: "Fetch Order Status with order ID",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY",
        Authorization: "Bearer YOUR_TOKEN",
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
          fiat: 100.0,
          senderWalletAddress: "0x32311131",
          receiverWalletAddress: "0x4113112",
          sellTokenSymbol: "WMATIC",
          sellTokenAddress: "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",
          orderId: "1244334342",
          status: "pending",
          currency: "inr",
          created_at: "2022-09-12T12:12:434Z0",
          chainId: "80001",
          customer: {
            name: "Satoshi",
            email: "test@test.com",
            phone: {
              CountryCode: "+91",
              Number: "1234567890",
            },
            created_at: "2022-09-12T12:12:434Z0",
          },
          reason: "",
          txnHash: "0x1131242424232323",
          bankDetails: {
            accountNumber: "121231212",
            accountName: "Satoshi",
            ifsc: "HDFC00001131",
            branchAddress: "whitefield",
          },
        },
        error: {},
      },
    },
  ],

  wehbookOnRamp: [
    {
      id: "webhook-onramp",
      method: "POST",
      path: "{{configured_webhook_url}}",
      title: "Completed Order",
      description:
        "This callback will be triggered when the crypto coins are deposited to the given receiver address. will use the configured webhook url to send order completed details in POST body.",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "X-Onmeta-Signature":
          "{{signature-of-the-request}}`//as computed abouve`", // as computed above,
      },
      requestBody: {
        fiat: 100,
        receiverWalletAddress: "0x14o2422324232323232323232232",
        buyTokenSymbol: "MATIC",
        buyTokenAddress: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        orderId: "63c93f0ffa666e128b7ab131",
        status: "completed",
        currency: "INR",
        chainId: 80001,
        customer: {
          id: "63aaedf35b07a87b1f912023",
          email: "test@test.com",
          phone: {},
          created_at: "2022-12-27T13:06:59.068Z",
        },
        createdAt: "2023-01-19T13:01:03.289Z",
        txnHash: "0xae21ff484bd2d05d22f6....7d1f795e9e09cda97b4d522",
        transferredAmount: "0.01",
        transferredAmountWei: "10000000000000000",
        eventType: "onramp",
        metaData: {
          conversionRate: "90.2",
          commission: "0",
        },
      },
      requestBodyTypes: {
        fiat: "number",
        receiverWalletAddress: "string",
        buyTokenSymbol: "string",
        buyTokenAddress: "string",
        orderId: "string",
        status: "string",
        currency: "string",
        chainId: "number",
        customer: {
          id: "string",
          email: "string",
          phone: {},
          created_at: "string",
        },
        createdAt: "string",
        txnHash: "string",
        transferredAmount: "string",
        transferredAmountWei: "string",
        eventType: "string",
        metaData: {
          conversionRate: "string",
          commission: "string",
        },
      },
      response: {},
    },
  ],

  wehbookOffRamp: [
    {
      id: "webhook-offramp",
      method: "POST",
      path: "{{configured_webhook_url}}",
      title: "Completed Order",
      description:
        "This callback will be triggered when the crypto coins are deposited to the given receiver address. will use the configured webhook url to send order completed details in POST body.",
      required: [""],
      optional: ["remember"],
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "X-Onmeta-Signature":
          "{{signature-of-the-request}}`//as computed abouve`", // as computed above,
      },
      requestBody: {
        fiat: 100,
        senderWalletAddress: "0xf12dcsdadefed2eeb4d0475de270447a92a481635caf4a",
        sellTokenSymbol: "MATIC",
        sellTokenAddress: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        chainId: 137,
        orderId: "641c311afdsaddfwcd2768aa5e",
        status: "PayoutSuccess",
        currency: "inr",
        created_at: "2023-03-23T10:59:38.494Z",
        updated_at: "0001-01-01T00:00:00Z",
        source: "",
        customer: {
          id: "63b52390dsaddefsfefwfw25d377ae",
          email: "documentation@onmeta.in",
          phone: {},
          created_at: "2023-01-04T06:58:24.968Z",
        },
        tenantId: "",
        transactionId: "TRAREFXXXXXXXXX",
        tokensDeducted: 1051823.63,
        tds: 1,
        eventType: "offramp",
        metaData: { submeta1: "metadata" },
      },
      requestBodyTypes: {
        fiat: "number",
        senderWalletAddress: "string",
        sellTokenSymbol: "string",
        sellTokenAddress: "string",
        chainId: "number",
        orderId: "string",
        status: "string",
        currency: "string",
        created_at: "string",
        updated_at: "string",
        source: "string",
        customer: {
          id: "string",
          email: "string",
          phone: {},
          created_at: "string",
        },
        tenantId: "string",
        transactionId: "string",
        tokensDeducted: "number",
        tds: "number",
        eventType: "string",
        metaData: { submeta1: "string" },
      },
      response: {},
    },
  ],
};
