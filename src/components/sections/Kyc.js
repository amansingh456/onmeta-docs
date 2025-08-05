const Kyc = () => {
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
              <h3 className="text-2xl font-bold text-white/80 mb-8">
                Code for encryption
              </h3>
              <div className="text-white/70">
                <ul className="ml-6 mb-4">
                  <li className="mb-4">
                    <div className="flex justify-center">
                      <img
                        src="/encryptedCode.png"
                        alt="OnMeta Complete Flow"
                        className="w-[100%] h-auto rounded-lg shadow-lg"
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

export default Kyc;