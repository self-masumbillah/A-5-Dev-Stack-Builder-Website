# Dev Stack Builder

Dev Stack Builder is a React-based website that helps developers explore different technologies and build their ideal development stack. Users can view technology details and add or remove technologies from their personal stack.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React-Toastify
- JSON
- HTML
- CSS

## Features

1. **Explore Technologies**
   - Users can explore different frontend, backend, database, language, styling, DevOps, and tools technologies.

2. **Build Your Stack**
   - Users can add technologies to their stack and remove individual technologies or remove all selected technologies.

3. **Toast Notifications**
   - The website shows notifications when technologies are added, removed, duplicated, or when the entire stack is cleared.

---

# React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It makes React components easier to write and understand.

## 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time.

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage changing data in a React component.

In this project, I used `useState` to manage:

- The list of technologies
- The selected technology stack
- The loading state

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders. I used it to load the technology data from the `technologies.json` file when the application starts.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. A unique key helps React efficiently update the correct item when the list changes.

For example:

```tsx
<TechCard
  key={technology.id}
  technology={technology}
/>
```

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content depending on a condition.

I used it to show a loading message while the JSON data is loading:

```tsx
{loading ? (
  <div className="technology-loading">
    <div className="loading-spinner"></div>
    <p>Loading technologies...</p>
  </div>
) : (
  <div className="technology-layout">
    ...
  </div>
)}
```

I also used conditional rendering in the `YourStack` component to show an empty message when no technology is selected.

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child using props.

In this project, `App.tsx` passes the technology and other values to `TechCard`:

```tsx
<TechCard
  technology={technology}
  isAdded={stack.some(
    (item) => item.id === technology.id
  )}
  onAdd={handleAddToStack}
/>
```

The child can send information back to the parent by calling a function passed through props. Here, `TechCard` calls `onAdd(technology)` when the user clicks the Add to Stack button.