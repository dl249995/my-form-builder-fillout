# 📝 Form Builder - Professional Tab-Based Content Editor

A modern, intuitive form builder application built with React and TypeScript, featuring a sophisticated tab-based interface with drag-and-drop functionality for seamless content organization.

![Form Builder Demo](https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop)

## ✨ Features

### 🎯 Core Functionality
- **Multi-Tab Interface** - Organize content across multiple pages with intuitive navigation
- **Drag & Drop Reordering** - Effortlessly rearrange tabs with smooth animations
- **Real-time Content Editing** - Rich textarea with contextual placeholders
- **Dynamic Tab Management** - Add, rename, duplicate, and delete tabs on the fly

### 🎨 User Experience
- **Professional Design** - Clean, modern interface with Tailwind CSS styling
- **Responsive Layout** - Optimized for all screen sizes and devices
- **Smooth Animations** - Polished transitions and micro-interactions
- **Context Menus** - Right-click functionality for advanced tab operations
- **Keyboard Shortcuts** - Efficient navigation and editing with keyboard support

### 🔧 Advanced Features
- **Smart Placeholders** - Context-aware placeholder text based on tab content
- **Visual Feedback** - Clear drop indicators and hover states
- **Tab State Management** - Persistent content across tab switches
- **Accessibility** - WCAG compliant with proper focus management
- **Performance Optimized** - Efficient rendering and state management

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dl249995/my-form-builder-fillout.git
   cd form-builder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── FormBuilder.tsx   # Main application component
│   ├── TabBar.tsx       # Tab navigation and management
│   ├── ContentArea.tsx  # Content editing interface
│   └── ContextMenu.tsx  # Right-click menu functionality
├── types/               # TypeScript type definitions
│   └── index.ts        # Core interfaces and types
├── img/                # Static assets and icons
├── App.tsx             # Application root component
├── main.tsx            # Application entry point
└── index.css           # Global styles and animations
```

## 🎮 Usage Guide

### Basic Operations

#### Creating Tabs
- Click the **"Add page"** button to create a new tab at the end
- Click the **"+"** button between tabs to insert at specific positions
- New tabs are automatically named and ready for customization

#### Managing Content
- Click any tab to switch to its content area
- Start typing in the textarea to add content
- Content is automatically saved as you type
- Each tab maintains its own independent content

#### Reordering Tabs
- **Drag and drop** any tab to reorder
- Visual drop indicators show where the tab will be placed
- Smooth animations provide clear feedback during the process

### Advanced Features

#### Context Menu Operations
Right-click on any active tab to access:
- **Rename** - Change the tab name
- **Copy** - Copy tab content to clipboard  
- **Duplicate** - Create an exact copy of the tab
- **Delete** - Remove the tab (minimum 1 tab required)

#### Keyboard Shortcuts
- **Enter** - Confirm tab rename
- **Escape** - Cancel tab rename
- **Tab** - Navigate between interface elements

## 🛠️ Technical Details

### Built With
- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **@dnd-kit** - Accessible drag and drop toolkit

### Key Technologies
- **Modern ES6+** - Latest JavaScript features
- **CSS Grid & Flexbox** - Advanced layout techniques
- **Custom Hooks** - Reusable state logic
- **Event Handling** - Efficient DOM event management
- **Local State Management** - React state with TypeScript

### Performance Features
- **Component Memoization** - Optimized re-rendering
- **Event Debouncing** - Smooth drag interactions
- **Lazy Loading** - Efficient resource management
- **CSS Animations** - Hardware-accelerated transitions

## 🎨 Customization

### Styling
The application uses Tailwind CSS for styling. Key customization points:

```css
/* Custom animations in index.css */
.hover\:scale-102:hover {
  transform: scale(1.02);
}

/* Professional drag states */
.cursor-grab {
  cursor: grab;
}

.cursor-grabbing {
  cursor: grabbing;
}
```

### Tab Icons
Icons are managed in the `getIcon` function within `TabBar.tsx`:

```typescript
const getIcon = (tab: Tab) => {
  switch (tab.icon) {
    case 'info': return <InfoIconLucide />;
    case 'ending': return <CheckCircle />;
    default: return <FileText />;
  }
};
```

### Content Placeholders
Customize placeholder text in `ContentArea.tsx`:

```typescript
const getPlaceholder = (tabName: string) => {
  switch (tabName.toLowerCase()) {
    case 'info': return 'Welcome message...';
    case 'details': return 'Detailed content...';
    default: return 'Start writing...';
  }
};
```

## 📱 Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit changes** (`git commit -m 'Add amazing feature'`)
4. **Push to branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Maintain consistent code formatting
- Add proper type definitions
- Test drag and drop functionality thoroughly
- Ensure responsive design compatibility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS approach
- **Lucide** - For the beautiful icon set
- **Vite Team** - For the lightning-fast build tool
- **TypeScript Team** - For type safety and developer experience

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page
2. Create a new issue with detailed description
3. Include browser version and steps to reproduce

---

<div align="center">

**Built by Diego with ❤️ using React + TypeScript + Vite**

[Demo](https://my-form-builder-fillout.vercel.app/) • [Request Feature](../../issues)

</div>