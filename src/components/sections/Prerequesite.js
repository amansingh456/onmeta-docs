const Prerequesite = () => {
  return (
    <div className="space-y-12">
      <div className="space-y-6 border-red-500">
        <div className="p-8 rounded-3xl border-2 border-white/15 bg-black hover:border-green-400/30 transition-all duration-500 hover:shadow-2xl group relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${"#ffffff"} 0%, transparent 70%)`,
            }}
          />
          <div className="flex items-center justify-between relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-white/80 mb-3">
                Prerequesite
              </h3>
            
              <p className="text-white/70 text-lg">
                To get started with the widget integration and also to avail the
                above customisations you need to register yourselves in our
                Staging Dashboard. Follow the steps below to setup your account
                in our dashboard :
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-3xl border-2 border-white/15 bg-black hover:border-green-400/30 transition-all duration-500 hover:shadow-2xl group relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${"#ffffff"} 0%, transparent 70%)`,
            }}
          />
          <div className="flex items-center justify-between relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-white/80 mb-4">
                Setting up with Onmeta
              </h3>
              <div className="text-white/70">
                <ul className="ml-6 mb-4">
                  <li className="mb-4">
                    <sapn className="text-white/80 font-bold">1.</sapn> Go to
                    the link <a href="https://dashboard.onmeta.in" target="_blank" rel="noreferrer" className="font-bold cursor-pointer text-green-400">( prod / </a> <a href="https://stg.dashboard.onmeta.in" target="_blank" rel="noreferrer" className="font-bold cursor-pointer text-green-400">stag )</a> to register in our dashboard. Enter your email
                    address, password (at least 8 characters long, containing at
                    least one number, one lowercase, and one uppercase letter),
                    validate captcha, and click on “Register” to proceed to the
                    next step
                  </li>
                  <li className="mb-4">
                    <sapn className="text-white/80 font-bold">2.</sapn> Enter
                    the OTP received on the email address provided, and click on
                    “Submit OTP” to complete the registration. Note: Please
                    check the spam folder, in case you don’t find the OTP
                    Verification email in your inbox
                  </li>
                  <li className="mb-4">
                    <sapn className="text-white/80 font-bold">3.</sapn> Upon
                    successful verification, you will be redirected to Partner
                    Login Page. Please enter your registered email address and
                    password and click on “Login” to view the dashboard.
                  </li>
                  <li className="mb-4">
                    <sapn className="text-white/80 font-bold">4.</sapn> Register
                    <div className="flex justify-center">
                      <img
                        src="/register.png"
                        alt="OnMeta Complete Flow"
                        className="w-[50%] h-auto rounded-lg shadow-lg"
                      />
                    </div>
                  </li>
                  <li className="mb-4">
                    <sapn className="text-white/80 font-bold">5.</sapn> Home
                    Page
                    <div className="flex justify-center">
                      <img
                        src="/homePage.png"
                        alt="OnMeta Complete Flow"
                        className="w-[50%] h-auto rounded-lg shadow-lg"
                      />
                    </div>
                  </li>
                  <li className="mb-4">
                    <sapn className="text-white/80 font-bold">6.</sapn> API Key
                    <div className="flex justify-center">
                      <img
                        src="/apiKey.png"
                        alt="OnMeta Complete Flow"
                        className="w-[50%] h-auto rounded-lg shadow-lg"
                      />
                    </div>
                  </li>

                  <li className="mb-4">
                    <sapn className="text-white/80 font-bold">7.</sapn> Token
                    Selection 
                    <div className="flex justify-center">
                      <img
                        src="/token.png"
                        alt="OnMeta Complete Flow"
                        className="w-[50%] h-auto rounded-lg shadow-lg"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prerequesite;
