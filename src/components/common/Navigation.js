import { Search, Cpu } from 'lucide-react';

const Navigation = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b-2 border-white/15">
      <div className="max-w-8xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-400 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                <Cpu className="text-black" size={24} />
              </div>
              <span className="text-3xl font-black text-white">
              Docs
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" size={20} />
              <input
                type="text"
                placeholder="Search endpoints..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 rounded-xl border-2 border-white/15 focus:outline-none focus:border-green-400/50 transition-all bg-black/50 text-white placeholder-white/40 font-medium"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;