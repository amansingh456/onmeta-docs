export const apiEndpoints = {
  onramp: [
    {
      id: 'login',
      method: 'POST',
      path: '/api/customer/login',
      title: 'Customer Login',
      description: 'Authenticate user and get access token',
      required: ['email', 'password'],
      optional: ['remember'],
      requestBody: {
        email: 'user@example.com',
        password: 'password123',
        remember: true
      },
      response: {
        success: true,
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
        user: { id: 123, email: 'user@example.com' }
      }
    },
    {
      id: 'quote',
      method: 'GET',
      path: '/api/onramp/quote',
      title: 'Get OnRamp Quote',
      description: 'Fetch conversion rates for fiat to crypto',
      required: ['fiatAmount', 'fiatCurrency', 'cryptoSymbol', 'chainId'],
      requestBody: null,
      queryParams: {
        fiatAmount: 100,
        fiatCurrency: 'INR',
        cryptoSymbol: 'MATIC',
        chainId: 137
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