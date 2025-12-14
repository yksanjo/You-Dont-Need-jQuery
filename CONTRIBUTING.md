# Contributing to You Don't Need jQuery

Thank you for your interest in contributing! This project aims to help developers learn vanilla JavaScript equivalents for jQuery patterns.

## How to Contribute

### Adding New Examples

1. **Fork the repository** and clone it locally
2. **Create a new branch** for your example: `git checkout -b add-example-name`
3. **Add your example** to the `examples` array in `src/components/CodeComparison.jsx`

Each example should follow this structure:

```javascript
{
  title: 'Example Title',           // Short, descriptive title
  category: 'DOM',                  // Category: DOM, Arrays, Async, Network, Storage, Data
  jquery: `// jQuery code here`,    // jQuery implementation
  vanilla: `// Vanilla JS code`,    // Vanilla JavaScript equivalent
  demo: () => 'Demo output text',   // Function that returns demo output
  compatibility: 'IE9+'             // Browser compatibility info
}
```

4. **Test your example** by running `npm run dev`
5. **Commit your changes**: `git commit -m "Add example: [title]"`
6. **Push to your fork**: `git push origin add-example-name`
7. **Open a Pull Request** on GitHub

### Example Guidelines

- **Keep code concise** but clear
- **Use modern JavaScript** (ES6+) for vanilla examples
- **Include comments** where helpful
- **Provide accurate compatibility** information
- **Test the demo function** to ensure it works
- **Follow existing code style** (2 spaces, single quotes)

### Categories

- **DOM**: DOM manipulation, selecting elements, events
- **Arrays**: Array methods, iteration, filtering
- **Async**: Promises, async/await, callbacks
- **Network**: AJAX, fetch, HTTP requests
- **Storage**: localStorage, sessionStorage
- **Data**: JSON, data transformation

### Reporting Issues

Found a bug or have a suggestion? Please open an issue with:
- Clear description of the problem
- Steps to reproduce (if applicable)
- Expected vs actual behavior
- Browser/OS information (if relevant)

### Code Style

- Use functional components with hooks
- Follow React best practices
- Use Tailwind CSS for styling
- Keep components focused and reusable

## Development Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Questions?

Feel free to open an issue for any questions or discussions!

Thank you for contributing! 🎉
