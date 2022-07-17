import { createRoot } from 'react-dom/client';
import React, { Component } from 'react';

const App = () => {
    return (
        <main>
            <div>Hello World</div>
        </main>
    )
}

console.log('Hello World!')
const root = createRoot(document.querySelector('#root'));
root.render(<App />);
