const Kyc = () => {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
     

        <div className="p-8 rounded-3xl border border-light-brdr dark:border-primary-brdr bg-light-surface dark:bg-primary-surface hover:border-light-accent dark:hover:border-primary-accent transition-all duration-500 hover:shadow-2xl group relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
            style={{
              background: `radial-gradient(circle at 50% 50%, var(--glow-accent) 0%, transparent 70%)`,
            }}
          />
          <div className="flex items-center justify-between relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-light-text dark:text-primary-text mb-8">
                Code for encryption
              </h3>
              <div className="">
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