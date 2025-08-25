import { Search, Cpu } from 'lucide-react';

const Navigation = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-light-bg dark:bg-primary-bg backdrop-blur-xl border-b-2 border-light-brdr dark:border-primary-brdr ">
      <div className="max-w-8xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-light-accent dark:bg-primary-accent rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                <Cpu className="text-light-bg dark:text-primary-bg" size={24} />
              </div>
              <span className="text-3xl font-black text-light-text dark:text-primary-text">
                Docs
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-600 dark:text-white/60" size={20} />
              <input
                type="text"
                placeholder="Search endpoints..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 rounded-xl border-2 border-light-brdr dark:border-primary-brdr focus:outline-none focus:border-light-accent dark:focus:border-primary-accent transition-all bg-gray-50 dark:bg-black/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/40 font-medium"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;