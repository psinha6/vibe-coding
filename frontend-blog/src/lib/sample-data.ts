import { Author, Category, Post, Tag } from '@/types'

export const authors: Author[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    avatar: '/images/authors/alex.jpg',
    bio: 'Senior Frontend Engineer with 8+ years of experience. Passionate about React, performance optimization, and design systems.',
    twitter: 'alexjohnson',
    github: 'alexjohnson',
    website: 'https://alexjohnson.dev',
  },
  {
    id: '2',
    name: 'Sarah Chen',
    avatar: '/images/authors/sarah.jpg',
    bio: 'Frontend Developer and UX enthusiast. Focused on creating accessible and performant web applications.',
    twitter: 'sarahchen',
    github: 'sarahchen',
  },
  {
    id: '3',
    name: 'Marcus Williams',
    avatar: '/images/authors/marcus.jpg',
    bio: 'JavaScript developer and open source contributor. Currently exploring the ins and outs of modern frontend frameworks.',
    github: 'marcuswilliams',
    website: 'https://marcuswilliams.io',
  },
]

export const categories: Category[] = [
  {
    id: '1',
    name: 'React',
    slug: 'react',
    description: 'Articles about React, React ecosystem, and related libraries',
  },
  {
    id: '2',
    name: 'Vue.js',
    slug: 'vue',
    description: 'Articles about Vue.js, its ecosystem, and best practices',
  },
  {
    id: '3',
    name: 'JavaScript',
    slug: 'javascript',
    description: 'Deep dives into JavaScript language features, patterns, and techniques',
  },
  {
    id: '4',
    name: 'CSS',
    slug: 'css',
    description: 'CSS architecture, modern styling approaches, and design techniques',
  },
  {
    id: '5',
    name: 'Performance',
    slug: 'performance',
    description: 'Web performance optimization strategies and techniques',
  },
  {
    id: '6',
    name: 'Accessibility',
    slug: 'accessibility',
    description: 'Building inclusive web applications for all users',
  },
]

export const tags: Tag[] = [
  { id: '1', name: 'React Hooks', slug: 'react-hooks' },
  { id: '2', name: 'TypeScript', slug: 'typescript' },
  { id: '3', name: 'State Management', slug: 'state-management' },
  { id: '4', name: 'CSS-in-JS', slug: 'css-in-js' },
  { id: '5', name: 'Testing', slug: 'testing' },
  { id: '6', name: 'Performance', slug: 'performance' },
  { id: '7', name: 'Accessibility', slug: 'accessibility' },
  { id: '8', name: 'SSR', slug: 'ssr' },
  { id: '9', name: 'Animation', slug: 'animation' },
  { id: '10', name: 'Design Systems', slug: 'design-systems' },
]

export const posts: Post[] = [
  {
    id: '1',
    title: 'Understanding React\'s Concurrent Mode',
    slug: 'understanding-react-concurrent-mode',
    excerpt: 'An in-depth look at React\'s Concurrent Mode and how it changes the rendering paradigm.',
    content: `
# Understanding React's Concurrent Mode

React's Concurrent Mode is a set of new features that help React apps stay responsive and gracefully adjust to the user's device capabilities and network speed.

## What is Concurrent Mode?

Concurrent Mode is a set of new features that will help React apps stay responsive and gracefully adjust to the user's device capabilities and network speed.

\`\`\`jsx
// Example of using startTransition
import { startTransition } from 'react';

function TabContainer() {
  const [tab, setTab] = useState('about');
  
  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }
  
  return (
    <>
      <TabButton 
        isActive={tab === 'about'} 
        onClick={() => selectTab('about')}
      >
        About
      </TabButton>
      <TabButton 
        isActive={tab === 'posts'} 
        onClick={() => selectTab('posts')}
      >
        Posts
      </TabButton>
      <TabButton 
        isActive={tab === 'contact'} 
        onClick={() => selectTab('contact')}
      >
        Contact
      </TabButton>
      <hr />
      {tab === 'about' && <AboutTab />}
      {tab === 'posts' && <PostsTab />}
      {tab === 'contact' && <ContactTab />}
    </>
  );
}
\`\`\`

## Benefits of Concurrent Mode

1. **Improved User Experience**: Applications feel more fluid and responsive.
2. **Smoother Transitions**: Screen updates look smoother.
3. **Better Loading States**: Loading states are less jarring.
4. **Interruptible Rendering**: React can pause, abort, or resume work as needed.

Concurrent Mode introduces concepts like Suspense and transitions that give you more control over how your application loads and responds to user interactions.
    `,
    coverImage: '/images/posts/concurrent-mode.jpg',
    date: '2023-05-10',
    author: authors[0],
    category: categories[0],
    tags: [tags[0], tags[5]],
    readingTime: '8 min read',
  },
  {
    id: '2',
    title: 'Building Scalable CSS Architecture',
    slug: 'building-scalable-css-architecture',
    excerpt: 'Learn how to structure your CSS for large applications to ensure maintainability and performance.',
    content: `
# Building Scalable CSS Architecture

In large web applications, CSS can quickly become a maintenance nightmare if not properly structured. This article explores methodologies and best practices for organizing CSS at scale.

## The Problems with CSS at Scale

As web applications grow, CSS often faces several challenges:

1. **Global Scope**: By default, CSS has a global scope, causing unexpected styling conflicts.
2. **Specificity Wars**: Developers often increase selector specificity to override styles, creating a hard-to-maintain codebase.
3. **Code Duplication**: Without proper abstractions, similar styles get duplicated throughout the codebase.
4. **Performance Issues**: Unoptimized CSS can lead to rendering performance problems.

## CSS Architecture Methodologies

### BEM (Block, Element, Modifier)

BEM is a naming convention that helps create reusable components and promotes code sharing.

\`\`\`css
/* Block component */
.card {
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Element that depends upon the block */
.card__title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

/* Modifier that changes the style of the block */
.card--featured {
  border-left: 5px solid gold;
}
\`\`\`

### CSS Modules

CSS Modules automatically scope CSS by creating unique class names during build time.

\`\`\`css
/* styles.module.css */
.button {
  padding: 0.5rem 1rem;
  background-color: blue;
  color: white;
}

.buttonPrimary {
  background-color: green;
}
\`\`\`

\`\`\`jsx
import styles from './styles.module.css';

function Button({ primary, children }) {
  return (
    <button 
      className={\`\${styles.button} \${primary ? styles.buttonPrimary : ''}\`}
    >
      {children}
    </button>
  );
}
\`\`\`

## Organization Strategies

1. **File Organization**: Group CSS by feature or component rather than by CSS property type.
2. **Design Tokens**: Centralize design variables like colors, typography, and spacing.
3. **Utility Classes**: Create small, single-purpose classes for common styling needs.
4. **Responsive Design Systems**: Build a consistent approach to responsiveness across the application.

By adopting these principles, you can create a CSS architecture that scales with your application and keeps your styling maintainable.
    `,
    coverImage: '/images/posts/css-architecture.jpg',
    date: '2023-06-15',
    author: authors[1],
    category: categories[3],
    tags: [tags[3], tags[9]],
    readingTime: '10 min read',
  },
  {
    id: '3',
    title: 'Modern State Management in Vue 3',
    slug: 'modern-state-management-vue-3',
    excerpt: 'Explore the new Composition API and other state management solutions in Vue 3.',
    content: `
# Modern State Management in Vue 3

Vue 3 introduces powerful new options for managing state. This article explores the Composition API and how it compares to other state management approaches in the Vue ecosystem.

## The Evolution of State Management in Vue

Vue has offered several approaches to state management:

1. **Component State**: Local component data
2. **Props & Events**: Parent-child communication
3. **Provide/Inject**: Dependency injection across component tree
4. **Vuex**: Centralized state management
5. **Composition API**: New in Vue 3, offering more flexible patterns

## The Composition API

The Composition API provides a way to organize code by logical concerns rather than options.

\`\`\`js
import { ref, computed, watch } from 'vue'

export function useCounter() {
  const count = ref(0)
  
  const doubleCount = computed(() => count.value * 2)
  
  function increment() {
    count.value++
  }
  
  watch(count, (newValue) => {
    console.log(\`Count changed to \${newValue}\`)
  })
  
  return {
    count,
    doubleCount,
    increment
  }
}
\`\`\`

\`\`\`html
<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double: {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { useCounter } from './composables/counter'

const { count, doubleCount, increment } = useCounter()
</script>
\`\`\`

## Pinia: The New Vuex

Pinia is a state management library that feels like a natural extension of the Composition API.

\`\`\`js
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
\`\`\`

\`\`\`html
<template>
  <div>
    <p>Count: {{ counter.count }}</p>
    <p>Double: {{ counter.doubleCount }}</p>
    <button @click="counter.increment">Increment</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>
\`\`\`

## Choosing the Right Approach

- **Simple Components**: Component state or props/events
- **Shared Component Logic**: Composition functions
- **Application-wide State**: Pinia
- **Deep Component Trees**: Provide/Inject

The Vue 3 ecosystem gives developers more options than ever to structure their application state in a way that fits their specific needs.
    `,
    coverImage: '/images/posts/vue-state-management.jpg',
    date: '2023-07-20',
    author: authors[2],
    category: categories[1],
    tags: [tags[2]],
    readingTime: '12 min read',
  },
  {
    id: '4',
    title: 'Building Accessible Web Forms',
    slug: 'building-accessible-web-forms',
    excerpt: 'Learn how to create forms that are usable by everyone, including people with disabilities.',
    content: `
# Building Accessible Web Forms

Forms are a critical part of web applications, serving as the primary way users input data. Making them accessible ensures all users can complete them successfully.

## Core Principles of Accessible Forms

Here are the key considerations for building accessible forms:

### Clear Labeling

Every input field should have a clear, associated label.

\`\`\`html
<!-- Bad example -->
<div>
  Email:
  <input type="email" />
</div>

<!-- Good example -->
<div>
  <label for="email">Email address</label>
  <input type="email" id="email" name="email" />
</div>
\`\`\`

### Logical Focus Order

Users should be able to navigate through the form in a logical order using the keyboard.

\`\`\`html
<form>
  <div>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" />
  </div>
  <div>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" />
  </div>
  <div>
    <button type="submit">Submit</button>
  </div>
</form>
\`\`\`

### Error Handling

Error messages should be clear and associated with the corresponding field.

\`\`\`jsx
function FormField({ id, label, error, ...props }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input 
        id={id}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? \`\${id}-error\` : undefined}
        {...props}
      />
      {error && (
        <div id={\`\${id}-error\`} className="error" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}
\`\`\`

### ARIA Attributes

Use ARIA attributes to enhance accessibility when needed.

\`\`\`html
<div role="group" aria-labelledby="shipping-heading">
  <h2 id="shipping-heading">Shipping Information</h2>
  <!-- Form fields related to shipping -->
</div>
\`\`\`

## Testing for Accessibility

Automated testing tools can help catch common accessibility issues:

1. **Lighthouse**: Integrated into Chrome DevTools
2. **axe-core**: Can be integrated into automated testing
3. **WAVE**: Web accessibility evaluation tool

However, manual testing with keyboards and screen readers is essential for ensuring a truly accessible experience.

By following these guidelines, you can create forms that work for all users, improving the overall user experience of your application.
    `,
    coverImage: '/images/posts/accessible-forms.jpg',
    date: '2023-08-05',
    author: authors[1],
    category: categories[5],
    tags: [tags[6]],
    readingTime: '9 min read',
  },
  {
    id: '5',
    title: 'JavaScript Performance Optimization Techniques',
    slug: 'javascript-performance-optimization-techniques',
    excerpt: 'Advanced techniques to optimize your JavaScript code for better performance.',
    content: `
# JavaScript Performance Optimization Techniques

Optimizing JavaScript performance is crucial for providing a smooth user experience. This article covers advanced techniques for making your JavaScript more efficient.

## Common Performance Bottlenecks

JavaScript performance issues typically stem from:

1. **DOM Manipulation**: Frequent DOM updates can cause layout thrashing
2. **Heavy Computations**: Blocking the main thread with intensive calculations
3. **Memory Leaks**: Unintentionally holding references to objects
4. **Network Requests**: Inefficient data fetching patterns

## Optimization Strategies

### 1. Efficient DOM Operations

Minimize layout thrashing by batching DOM operations:

\`\`\`javascript
// Bad approach - causes multiple reflows
const container = document.getElementById('container');
for (let i = 0; i < 1000; i++) {
  container.innerHTML += '<div>' + i + '</div>'; // Causes reflow on each iteration
}

// Better approach - single reflow
const container = document.getElementById('container');
let html = '';
for (let i = 0; i < 1000; i++) {
  html += '<div>' + i + '</div>';
}
container.innerHTML = html; // Single reflow

// Best approach - DocumentFragment
const container = document.getElementById('container');
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  const div = document.createElement('div');
  div.textContent = i;
  fragment.appendChild(div);
}
container.appendChild(fragment); // Single reflow
\`\`\`

### 2. Virtualization for Long Lists

Use virtualization to render only visible items:

\`\`\`jsx
import { FixedSizeList } from 'react-window';

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index]}
    </div>
  );

  return (
    <FixedSizeList
      height={500}
      width="100%"
      itemCount={items.length}
      itemSize={35}
    >
      {Row}
    </FixedSizeList>
  );
}
\`\`\`

### 3. Web Workers for Heavy Computation

Move expensive calculations off the main thread:

\`\`\`javascript
// main.js
const worker = new Worker('worker.js');

worker.onmessage = function(e) {
  console.log('Result:', e.data);
};

worker.postMessage([1000000000]); // Send data to worker

// worker.js
self.onmessage = function(e) {
  const result = calculatePrimes(e.data[0]);
  self.postMessage(result);
};

function calculatePrimes(max) {
  // Complex calculation here
  return result;
}
\`\`\`

### 4. Memory Management

Prevent memory leaks by cleaning up references:

\`\`\`javascript
function createLargeObject() {
  // ...
}

// Bad - event listeners holding references
function BadComponent() {
  const largeData = createLargeObject();
  
  window.addEventListener('resize', function() {
    // Using largeData, creating a closure that retains largeData
    console.log(largeData.someProperty);
  });
}

// Good - clean up when done
function GoodComponent() {
  const largeData = createLargeObject();
  
  function handleResize() {
    console.log(largeData.someProperty);
  }
  
  window.addEventListener('resize', handleResize);
  
  // Cleanup function
  return function cleanup() {
    window.removeEventListener('resize', handleResize);
  };
}
\`\`\`

By applying these techniques, you can significantly improve the performance of your JavaScript applications, providing a better experience for your users.
    `,
    coverImage: '/images/posts/js-performance.jpg',
    date: '2023-09-12',
    author: authors[0],
    category: categories[4],
    tags: [tags[2], tags[5]],
    readingTime: '15 min read',
  },
] 