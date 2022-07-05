import React from 'react'
import { createRoot } from 'react-dom/client'
import { Root } from './pages/root'

const container = document.getElementById('app')
if (container) {
	const root = createRoot(container)
	root.render(<Root />)
} else {
	console.log('ERROR: Could not get app element by ID')
}
