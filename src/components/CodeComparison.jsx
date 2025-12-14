import React, { useState } from 'react';
import { Code, Play, Sparkles } from 'lucide-react';

const CodeComparison = () => {
  const [activeTab, setActiveTab] = useState('jquery');
  const [selectedExample, setSelectedExample] = useState(0);
  const [demoOutput, setDemoOutput] = useState('');

  const examples = [
    {
      title: 'Selecting Elements',
      jquery: `// jQuery
$('.my-class')
$('#my-id')
$('div')`,
      vanilla: `// Vanilla JS
document.querySelectorAll('.my-class')
document.getElementById('my-id')
document.querySelectorAll('div')`,
      demo: () => 'Selected 3 elements from the DOM!'
    },
    {
      title: 'Adding Event Listeners',
      jquery: `// jQuery
$('.button').click(function() {
  alert('Clicked!');
});`,
      vanilla: `// Vanilla JS
document.querySelector('.button')
  .addEventListener('click', () => {
    alert('Clicked!');
  });`,
      demo: () => 'Event listener added! 🎉'
    },
    {
      title: 'Toggling Classes',
      jquery: `// jQuery
$('.box').toggleClass('active');`,
      vanilla: `// Vanilla JS
document.querySelector('.box')
  .classList.toggle('active');`,
      demo: () => 'Class toggled successfully!'
    },
    {
      title: 'Showing/Hiding Elements',
      jquery: `// jQuery
$('.element').hide();
$('.element').show();`,
      vanilla: `// Vanilla JS
el.style.display = 'none';
el.style.display = 'block';
// Or use classList
el.classList.add('hidden');`,
      demo: () => 'Element visibility changed!'
    },
    {
      title: 'Getting/Setting Text',
      jquery: `// jQuery
$('.title').text('New Title');
const text = $('.title').text();`,
      vanilla: `// Vanilla JS
el.textContent = 'New Title';
const text = el.textContent;`,
      demo: () => 'Text updated to: "New Title"'
    },
    {
      title: 'AJAX Requests',
      jquery: `// jQuery
$.ajax({
  url: '/api/data',
  success: (data) => console.log(data)
});`,
      vanilla: `// Vanilla JS
fetch('/api/data')
  .then(res => res.json())
  .then(data => console.log(data));`,
      demo: () => 'Fetch request ready to go! 🚀'
    },
    {
      title: 'Fading Effects',
      jquery: `// jQuery
$('.box').fadeIn();
$('.box').fadeOut();`,
      vanilla: `// Vanilla JS
el.style.transition = 'opacity 0.3s';
el.style.opacity = '1'; // fadeIn
el.style.opacity = '0'; // fadeOut`,
      demo: () => 'Fade animation applied!'
    },
    {
      title: 'Getting Parent/Children',
      jquery: `// jQuery
$('.child').parent();
$('.parent').children();`,
      vanilla: `// Vanilla JS
el.parentElement;
el.children;
// Or for all descendants:
el.querySelectorAll('*');`,
      demo: () => 'Parent/children elements accessed!'
    }
  ];

  const runDemo = () => {
    const output = examples[selectedExample].demo();
    setDemoOutput(output);
    setTimeout(() => setDemoOutput(''), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              You Don't Need jQuery
            </h1>
            <Sparkles className="w-8 h-8 text-pink-600" />
          </div>
          <p className="text-gray-600 text-lg">
            Learn vanilla JavaScript equivalents for common jQuery patterns
          </p>
        </div>

        {/* Example Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {examples.map((example, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedExample(idx);
                setDemoOutput('');
              }}
              className={`p-4 rounded-lg font-medium transition-all ${
                selectedExample === idx
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:shadow-md hover:scale-102'
              }`}
            >
              {example.title}
            </button>
          ))}
        </div>

        {/* Code Comparison */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('jquery')}
              className={`flex-1 px-6 py-4 font-semibold transition-all ${
                activeTab === 'jquery'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Code className="inline w-5 h-5 mr-2" />
              jQuery
            </button>
            <button
              onClick={() => setActiveTab('vanilla')}
              className={`flex-1 px-6 py-4 font-semibold transition-all ${
                activeTab === 'vanilla'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Code className="inline w-5 h-5 mr-2" />
              Vanilla JavaScript
            </button>
          </div>

          {/* Code Display */}
          <div className="p-8">
            <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
              <code className="text-sm font-mono">
                {activeTab === 'jquery'
                  ? examples[selectedExample].jquery
                  : examples[selectedExample].vanilla}
              </code>
            </pre>

            {/* Run Demo Button */}
            <div className="mt-6 flex items-center gap-4">
              <button
                onClick={runDemo}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                <Play className="w-5 h-5" />
                Run Demo
              </button>
              {demoOutput && (
                <div className="flex-1 px-4 py-3 bg-green-50 border-2 border-green-300 rounded-lg text-green-800 font-medium animate-pulse">
                  {demoOutput}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">0 KB</div>
            <div className="text-gray-600">Vanilla JS Size</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-pink-600 mb-2">~30 KB</div>
            <div className="text-gray-600">jQuery Size (min)</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-600">Browser Support</div>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">💡 Pro Tips</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Modern browsers have excellent native DOM APIs</li>
            <li>• querySelector/querySelectorAll work just like jQuery selectors</li>
            <li>• classList API makes class manipulation easy</li>
            <li>• fetch() is the modern replacement for $.ajax()</li>
            <li>• No extra library means faster page loads!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CodeComparison;
