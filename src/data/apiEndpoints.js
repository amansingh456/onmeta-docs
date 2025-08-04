export const apiEndpoints = {
  onramp: [
    {
      id: 'login',
      method: 'POST',
      path: '/v1/user/login',
      title: 'Customer Login',
      description: 'Authenticate user and get access token',
      required: ['email'],
      optional: ['remember'],
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'OnMeta-Client/1.0'
      },
      requestBody: {
        email: 'user@example.com',
      },
      requestBodyTypes: {
        email: 'string',
      },
      response: {
        success: true,
        data:{
          accessToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....",
          refreshToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...."
        },
        error: {},
      }
    },
    {
      id: 'quote',
      method: 'GET',
      path: '/api/onramp/quote',
      title: 'Get OnRamp Quote',
      description: 'Fetch conversion rates for fiat to crypto',
      required: ['fiatAmount', 'fiatCurrency', 'cryptoSymbol', 'chainId'],
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_TOKEN',
        'Accept': 'application/json',
        'X-API-Version': 'v1'
      },
      requestBody: null,
      queryParams: {
        fiatAmount: 100,
        fiatCurrency: 'INR',
        cryptoSymbol: 'MATIC',
        chainId: 137
      },
      queryParamsTypes: {
        fiatAmount: 'number',
        fiatCurrency: 'string',
        cryptoSymbol: 'string',
        chainId: 'number'
      },
      response: {
        success: true,
        data: {
          fiatAmount: 100,
          cryptoAmount: 85.23,
          rate: 0.8523,
          fees: 2.5,
          networkFees: 0.1
        }
      }
    }
  ],
  offramp: [
    {
      id: 'offramp-quote',
      method: 'GET',
      path: '/api/offramp/quote',
      title: 'Get OffRamp Quote',
      description: 'Fetch conversion rates for crypto to fiat',
      required: ['cryptoAmount', 'cryptoSymbol', 'fiatCurrency', 'chainId'],
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_TOKEN',
        'Accept': 'application/json',
        'X-API-Version': 'v1'
      },
      response: {
        success: true,
        data: {
          cryptoAmount: 100,
          fiatAmount: 8523.45,
          rate: 85.2345,
          fees: 25.5,
          networkFees: 0.5
        }
      }
    }
  ]
};