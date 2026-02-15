const codeSnippets = [
    'const greeting = "Hello World";',
    'function calculateSum(a, b) {',
    '  return a + b;',
    '}',
    'import React from "react";',
    'class Portfolio extends Component {',
    '  render() {',
    '    return <div>Welcome</div>;',
    '  }',
    '}',
    'SELECT * FROM users WHERE active = 1;',
    'def analyze_data(dataset):',
    '    results = []',
    '    for item in dataset:',
    '        results.append(process(item))',
    '    return results',
    'git commit -m "Update portfolio"',
    'npm install react-router-dom',
    'docker build -t my-app .',
    'const apiUrl = process.env.API_URL;',
    'async function fetchData() {',
    '  const response = await fetch(url);',
    '  return response.json();',
    '}',
    'typedef struct Node {',
    '  int data;',
    '  struct Node* next;',
    '} Node;',
    '<div className="container">',
    '  <h1>Welcome</h1>',
    '</div>',
    'let result = array.map(x => x * 2);',
    'const [count, setCount] = useState(0);',
    'useEffect(() => {',
    '  document.title = `Count: ${count}`;',
    '}, [count]);',
    'query GetUser($id: ID!) {',
    '  user(id: $id) { name email }',
    '}',
    'model User {',
    '  id: ID! @id',
    '  email: String! @unique',
    '}',
    'public class Main {',
    '  public static void main(String[] args) {',
    '    System.out.println("Hello");',
    '  }',
    '}',
    'flutter: sdk: flutter',
    'body: Center(',
    '  child: Text("Flutter App"),',
    ')',
    'interface UserProps {',
    '  name: string;',
    '  email: string;',
    '}',
    'const theme = createTheme({',
    '  palette: { primary: blue },',
    '});',
    'app.get("/api/users", async (req, res) => {',
    '  const users = await User.find();',
    '  res.json(users);',
    '});',
    'CREATE TABLE users (',
    '  id SERIAL PRIMARY KEY,',
    '  email VARCHAR(255) UNIQUE',
    ');',
    'test("should calculate sum", () => {',
    '  expect(sum(2, 3)).toBe(5);',
    '});',
    'mutation CreateUser($input: UserInput!) {',
    '  createUser(input: $input) { id }',
    '}',
    'enum Status { PENDING, ACTIVE, INACTIVE }',
    'try {',
    '  const data = await api.fetch();',
    '} catch (error) {',
    '  console.error(error);',
    '}',
    'class Node<T> {',
    '  constructor(public value: T) {}',
    '}',
    'const memoized = useMemo(() => {',
    '  return expensiveCalculation(data);',
    '}, [data]);',
    '@Component({',
    '  selector: "app-root",',
    '  template: "<h1>Hello</h1>"',
    '})',
    'package main',
    'func main() {',
    '  fmt.Println("Hello, World!")',
    '}',
    'FROM node:18-alpine',
    'WORKDIR /app',
    'COPY package*.json ./',
    'RUN npm install',
    'val list = listOf(1, 2, 3)',
    'println(list.map { it * 2 })',
    'struct User {',
    '    name: String,',
    '    email: String,',
    '}',
    'impl User {',
    '    fn new(name: &str) -> Self {',
    '        User { name: name.to_string() }',
    '    }',
    '}',
];

class TypewriterLine {
    constructor(element, snippets, index) {
        this.element = element;
        this.snippets = snippets;
        this.currentText = '';
        this.targetText = '';
        this.isTyping = false;
        this.isDeleting = false;
        this.charIndex = 0;
        
        // Random initial delay
        setTimeout(() => {
            this.selectNewText();
            this.animate();
        }, Math.random() * 3000 + index * 100);
    }
    
    selectNewText() {
        this.targetText = this.snippets[Math.floor(Math.random() * this.snippets.length)];
        this.charIndex = 0;
        this.isTyping = true;
        this.isDeleting = false;
    }
    
    animate() {
        if (this.isTyping) {
            // Typing
            if (this.charIndex < this.targetText.length) {
                this.currentText = this.targetText.substring(0, this.charIndex + 1);
                this.element.textContent = this.currentText;
                this.charIndex++;
                setTimeout(() => this.animate(), 30 + Math.random() * 40); // Variable typing speed
            } else {
                // Finished typing, wait then start deleting
                this.isTyping = false;
                setTimeout(() => {
                    this.isDeleting = true;
                    this.animate();
                }, 2000 + Math.random() * 2000); // Wait 2-4 seconds
            }
        } else if (this.isDeleting) {
            // Deleting
            if (this.charIndex > 0) {
                this.charIndex--;
                this.currentText = this.targetText.substring(0, this.charIndex);
                this.element.textContent = this.currentText;
                setTimeout(() => this.animate(), 20 + Math.random() * 30); // Faster deletion
            } else {
                // Finished deleting, select new text
                this.isDeleting = false;
                setTimeout(() => {
                    this.selectNewText();
                    this.animate();
                }, 500 + Math.random() * 1000); // Short pause before new text
            }
        }
    }
}

function createCodeLines() {
    const background = document.getElementById('codeBackground');
    const viewportHeight = window.innerHeight;
    const lineHeight = 21; // Approximate line height in pixels
    const numberOfLines = Math.floor(viewportHeight / lineHeight) * 3; // Fill 3 columns
    
    const typewriters = [];
    
    for (let i = 0; i < numberOfLines; i++) {
        const line = document.createElement('div');
        line.className = 'code-line';
        line.textContent = '';
        background.appendChild(line);
        
        // Create typewriter instance
        typewriters.push(new TypewriterLine(line, codeSnippets, i));
    }
}

// Initialize code background
createCodeLines();

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const background = document.getElementById('codeBackground');
        background.innerHTML = '';
        createCodeLines();
    }, 500);
});

const centerText = document.getElementById('centerText');
const layers = document.querySelectorAll('.layer[data-section]');

layers.forEach(layer => {
    // Desktop Hover
    layer.addEventListener('mouseenter', function() {
        const section = this.getAttribute('data-section');
        centerText.textContent = section;
    });
    layer.addEventListener('mouseleave', function() {
        centerText.textContent = "i'm betza";
    });

    // Mobile Tap Image Swapping
    layer.addEventListener('touchstart', function() {
        layers.forEach(l => l.classList.remove('active-about', 'active-experience', 'active-projects'));
        const section = this.getAttribute('data-section');
        this.classList.add('active-' + section);
        centerText.textContent = section;
    });
});

function expandLayer(layer, event) {
    if (event.target.classList.contains('close-btn') || layer.classList.contains('expanded')) return;
    
    layer.classList.add('expanded');
    document.body.style.overflow = 'hidden';
    
    // Manual hide for older browsers
    document.querySelector('.availability-badge-top').style.display = 'none';
    document.querySelector('.contact-buttons-bottom').style.display = 'none';
}

function closeLayer(event) {
    event.stopPropagation();
    const layer = event.target.closest('.layer');
    layer.classList.remove('expanded');
    document.body.style.overflow = 'auto';
    
    // Manual show
    document.querySelector('.availability-badge-top').style.display = 'flex';
    document.querySelector('.contact-buttons-bottom').style.display = 'flex';
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const expanded = document.querySelector('.layer.expanded');
        if (expanded) closeLayer({ target: expanded.querySelector('.close-btn'), stopPropagation: () => {} });
        
        // Also close project modal
        const modal = document.querySelector('.project-modal.active');
        if (modal) closeProjectModal();
    }
});

// Project Modal Functions
function openProjectModal(projectId) {
    const modal = document.getElementById(projectId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeProjectModal() {
    const modals = document.querySelectorAll('.project-modal');
    modals.forEach(modal => modal.classList.remove('active'));
    document.body.style.overflow = 'auto';
}

// Add click event to project cards
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.stopPropagation();
            const projectId = this.getAttribute('data-project');
            if (projectId) {
                openProjectModal(projectId);
            }
        });
    });
});
