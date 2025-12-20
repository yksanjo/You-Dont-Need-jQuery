import { Shield, Bot, Building2 } from 'lucide-react';

export default function Navigation({ activeProduct, onProductChange }) {
  const products = [
    { id: 'promptguard', name: 'PromptGuard', icon: Shield, color: 'blue' },
    { id: 'agentguard', name: 'AgentGuard Enterprise', icon: Bot, color: 'purple' },
    { id: 'finsecure', name: 'FinSecure AI', icon: Building2, color: 'green' }
  ];

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-1">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">AI Security Suite</span>
          </div>
          
          <div className="flex space-x-1">
            {products.map((product) => {
              const Icon = product.icon;
              const isActive = activeProduct === product.id;
              const colorClasses = {
                blue: isActive ? 'bg-blue-50 text-blue-700 border-blue-300' : 'text-blue-600 hover:bg-blue-50',
                purple: isActive ? 'bg-purple-50 text-purple-700 border-purple-300' : 'text-purple-600 hover:bg-purple-50',
                green: isActive ? 'bg-green-50 text-green-700 border-green-300' : 'text-green-600 hover:bg-green-50'
              };
              
              return (
                <button
                  key={product.id}
                  onClick={() => onProductChange(product.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all border ${
                    colorClasses[product.color]
                  } ${isActive ? 'font-semibold' : 'font-medium'}`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{product.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

