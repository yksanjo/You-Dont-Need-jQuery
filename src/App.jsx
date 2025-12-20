import { useState } from 'react';
import Navigation from './components/Navigation';
import PromptGuard from './components/PromptGuard';
import AgentGuard from './components/AgentGuard';
import FinSecure from './components/FinSecure';
import './App.css';

function App() {
  const [activeProduct, setActiveProduct] = useState('promptguard');

  const renderProduct = () => {
    switch (activeProduct) {
      case 'promptguard':
        return <PromptGuard />;
      case 'agentguard':
        return <AgentGuard />;
      case 'finsecure':
        return <FinSecure />;
      default:
        return <PromptGuard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeProduct={activeProduct} onProductChange={setActiveProduct} />
      {renderProduct()}
    </div>
  );
}

export default App;











