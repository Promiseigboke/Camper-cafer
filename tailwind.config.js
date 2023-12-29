// tailwind.config.js
const { addDynamicIconSelectors } = require('@iconify/tailwind');
module.exports = {
  content: ["./*.html"], // Update the content path to match your HTML file location
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
		// Iconify plugin
		addDynamicIconSelectors(),
	],
};


