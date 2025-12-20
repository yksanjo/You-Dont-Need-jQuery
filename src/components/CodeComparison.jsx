import React, { useState, useMemo } from 'react';
import { Code, Play, Sparkles, Copy, Check, Search } from 'lucide-react';

const CodeComparison = () => {
  const [activeTab, setActiveTab] = useState('jquery');
  const [selectedExample, setSelectedExample] = useState(0);
  const [demoOutput, setDemoOutput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  const examples = [
    {
      title: 'Selecting Elements',
      category: 'DOM',
      jquery: `// jQuery
$('.my-class')
$('#my-id')
$('div')`,
      vanilla: `// Vanilla JS
document.querySelectorAll('.my-class')
document.getElementById('my-id')
document.querySelectorAll('div')`,
      demo: () => 'Selected 3 elements from the DOM!',
      compatibility: 'IE9+ (querySelector), IE6+ (getElementById)'
    },
    {
      title: 'Adding Event Listeners',
      category: 'DOM',
      jquery: `// jQuery
$('.button').click(function() {
  alert('Clicked!');
});`,
      vanilla: `// Vanilla JS
document.querySelector('.button')
  .addEventListener('click', () => {
    alert('Clicked!');
  });`,
      demo: () => 'Event listener added! 🎉',
      compatibility: 'IE9+'
    },
    {
      title: 'Toggling Classes',
      category: 'DOM',
      jquery: `// jQuery
$('.box').toggleClass('active');`,
      vanilla: `// Vanilla JS
document.querySelector('.box')
  .classList.toggle('active');`,
      demo: () => 'Class toggled successfully!',
      compatibility: 'IE10+'
    },
    {
      title: 'Showing/Hiding Elements',
      category: 'DOM',
      jquery: `// jQuery
$('.element').hide();
$('.element').show();`,
      vanilla: `// Vanilla JS
el.style.display = 'none';
el.style.display = 'block';
// Or use classList
el.classList.add('hidden');`,
      demo: () => 'Element visibility changed!',
      compatibility: 'All browsers'
    },
    {
      title: 'Getting/Setting Text',
      category: 'DOM',
      jquery: `// jQuery
$('.title').text('New Title');
const text = $('.title').text();`,
      vanilla: `// Vanilla JS
el.textContent = 'New Title';
const text = el.textContent;`,
      demo: () => 'Text updated to: "New Title"',
      compatibility: 'IE9+'
    },
    {
      title: 'AJAX Requests',
      category: 'Network',
      jquery: `// jQuery
$.ajax({
  url: '/api/data',
  success: (data) => console.log(data)
});`,
      vanilla: `// Vanilla JS
fetch('/api/data')
  .then(res => res.json())
  .then(data => console.log(data));`,
      demo: () => 'Fetch request ready to go! 🚀',
      compatibility: 'IE11+ (or use polyfill)'
    },
    {
      title: 'Fading Effects',
      category: 'DOM',
      jquery: `// jQuery
$('.box').fadeIn();
$('.box').fadeOut();`,
      vanilla: `// Vanilla JS
el.style.transition = 'opacity 0.3s';
el.style.opacity = '1'; // fadeIn
el.style.opacity = '0'; // fadeOut`,
      demo: () => 'Fade animation applied!',
      compatibility: 'IE10+ (transition), IE9+ (opacity)'
    },
    {
      title: 'Getting Parent/Children',
      category: 'DOM',
      jquery: `// jQuery
$('.child').parent();
$('.parent').children();`,
      vanilla: `// Vanilla JS
el.parentElement;
el.children;
// Or for all descendants:
el.querySelectorAll('*');`,
      demo: () => 'Parent/children elements accessed!',
      compatibility: 'All browsers'
    },
    {
      title: 'Creating Elements',
      category: 'DOM',
      jquery: `// jQuery
const div = $('<div>');
div.addClass('new-box');
$('body').append(div);`,
      vanilla: `// Vanilla JS
const div = document.createElement('div');
div.classList.add('new-box');
document.body.appendChild(div);`,
      demo: () => 'Element created and appended!',
      compatibility: 'All browsers'
    },
    {
      title: 'Removing Elements',
      category: 'DOM',
      jquery: `// jQuery
$('.element').remove();`,
      vanilla: `// Vanilla JS
el.remove();
// Or for older browsers:
el.parentNode.removeChild(el);`,
      demo: () => 'Element removed from DOM!',
      compatibility: 'IE9+ (remove()), All (removeChild)'
    },
    {
      title: 'Array Filter',
      category: 'Arrays',
      jquery: `// jQuery
const filtered = $.grep([1, 2, 3, 4], 
  function(n) { return n > 2; });`,
      vanilla: `// Vanilla JS
const filtered = [1, 2, 3, 4]
  .filter(n => n > 2);`,
      demo: () => 'Array filtered: [3, 4]',
      compatibility: 'IE9+'
    },
    {
      title: 'Array Map',
      category: 'Arrays',
      jquery: `// jQuery
const doubled = $.map([1, 2, 3], 
  function(n) { return n * 2; });`,
      vanilla: `// Vanilla JS
const doubled = [1, 2, 3]
  .map(n => n * 2);`,
      demo: () => 'Array mapped: [2, 4, 6]',
      compatibility: 'IE9+'
    },
    {
      title: 'Promises',
      category: 'Async',
      jquery: `// jQuery
$.Deferred()
  .resolve('Success')
  .then(function(result) {
    console.log(result);
  });`,
      vanilla: `// Vanilla JS
Promise.resolve('Success')
  .then(result => {
    console.log(result);
  });`,
      demo: () => 'Promise resolved successfully!',
      compatibility: 'IE11+ (or use polyfill)'
    },
    {
      title: 'localStorage',
      category: 'Storage',
      jquery: `// jQuery (with plugin)
$.jStorage.set('key', 'value');
const value = $.jStorage.get('key');`,
      vanilla: `// Vanilla JS
localStorage.setItem('key', 'value');
const value = localStorage.getItem('key');`,
      demo: () => 'Data saved to localStorage!',
      compatibility: 'IE8+'
    },
    {
      title: 'JSON Parse/Stringify',
      category: 'Data',
      jquery: `// jQuery
const obj = $.parseJSON('{"key":"value"}');
const str = JSON.stringify(obj);`,
      vanilla: `// Vanilla JS
const obj = JSON.parse('{"key":"value"}');
const str = JSON.stringify(obj);`,
      demo: () => 'JSON parsed and stringified!',
      compatibility: 'IE8+'
    },
    {
      title: 'Each/ForEach',
      category: 'Arrays',
      jquery: `// jQuery
$.each([1, 2, 3], function(i, val) {
  console.log(val);
});`,
      vanilla: `// Vanilla JS
[1, 2, 3].forEach((val, i) => {
  console.log(val);
});`,
      demo: () => 'Array iterated successfully!',
      compatibility: 'IE9+'
    }
  ];

  const filteredExamples = useMemo(() => {
    if (!searchQuery) return examples;
    const query = searchQuery.toLowerCase();
    return examples.filter(example => 
      example.title.toLowerCase().includes(query) ||
      example.category.toLowerCase().includes(query) ||
      example.jquery.toLowerCase().includes(query) ||
      example.vanilla.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const runDemo = () => {
    const currentExample = filteredExamples[selectedExample] || examples[0];
    const output = currentExample.demo();
    setDemoOutput(output);
    setTimeout(() => setDemoOutput(''), 2000);
  };

  const currentExample = filteredExamples[selectedExample] || examples[0];
  const currentCode = activeTab === 'jquery' ? currentExample.jquery : currentExample.vanilla;

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

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search examples (e.g., 'array', 'DOM', 'promise')..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSelectedExample(0);
                setDemoOutput('');
              }}
              className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-all"
            />
          </div>
          {searchQuery && (
            <p className="text-center mt-2 text-gray-600 text-sm">
              Found {filteredExamples.length} example{filteredExamples.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* Example Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {filteredExamples.map((example, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedExample(idx);
                setDemoOutput('');
              }}
              className={`p-4 rounded-lg font-medium transition-all relative ${
                selectedExample === idx
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:shadow-md hover:scale-102'
              }`}
            >
              <div className="text-xs opacity-75 mb-1">{example.category}</div>
              <div>{example.title}</div>
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
            <div className="relative">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                <code className="text-sm font-mono">
                  {currentCode}
                </code>
              </pre>
              <button
                onClick={() => copyToClipboard(currentCode)}
                className="absolute top-4 right-4 p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all flex items-center gap-2"
                title="Copy code"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span className="text-xs">Copied!</span>
                  </>
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Browser Compatibility */}
            {currentExample.compatibility && (
              <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
                <p className="text-sm text-blue-800">
                  <strong>Browser Support:</strong> {currentExample.compatibility}
                </p>
              </div>
            )}

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










