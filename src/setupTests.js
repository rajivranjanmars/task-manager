// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/vitest';

const storage = new Map();
const localStorage = {
	getItem: (key) => storage.get(key) ?? null,
	setItem: (key, value) => storage.set(key, String(value)),
};

Object.defineProperty(window, 'localStorage', { configurable: true, value: localStorage });
Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: localStorage });
