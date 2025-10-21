# Atlas Chat Widget

A minimal, intelligent chat assistant for the Timeless website.

## Overview

Atlas is a chat widget that helps visitors learn about Timeless services, capabilities, industries, and company information through predefined questions and smart keyword matching.

## Features

- 🎯 **18 Predefined Q&A pairs** covering services, industries, solutions, and company info
- 🔍 **Smart keyword matching** to find relevant answers
- 💬 **Natural conversation flow** with related questions
- 📱 **Fully responsive** design (mobile & desktop)
- ⚡ **Lightweight** - No AI/LLM calls, pure client-side
- ♿ **Accessible** - ARIA labels, keyboard navigation

## Components

```
/components/chat/
├── ChatWidget.tsx          # Main container & state
├── ChatButton.tsx          # Floating action button
├── ChatWindow.tsx          # Chat interface logic
├── ChatHeader.tsx          # Header with Atlas branding
├── ChatMessages.tsx        # Message list renderer
├── ChatMessage.tsx         # Individual message bubble
├── ChatInput.tsx           # Text input field
├── QuickQuestions.tsx      # Predefined question buttons
├── types.ts                # TypeScript definitions
└── index.ts                # Exports

/lib/chat/
└── questions-database.json # Q&A database
```

## How It Works

1. **Welcome Message** - Atlas greets visitors when chat opens
2. **Quick Questions** - 6 common questions displayed initially
3. **User Input** - Users can type custom questions
4. **Keyword Matching** - System finds best answer by matching keywords
5. **Fallback Response** - Graceful message when no match found
6. **Related Questions** - Suggests related topics to explore

## Matching Logic

The chat uses a tiered matching system:

1. **Exact Match** - Question typed exactly as in database
2. **Keyword Match** - Key terms found in question
3. **Fallback** - No match found, shows help options

## Q&A Categories

- **Services & Capabilities** (6 questions) - AI Strategy, Agentic Systems, RAG, LLMOps, Platforms
- **Industries** (5 questions) - Healthcare, Manufacturing, Automotive, Energy, etc.
- **Solutions** (4 questions) - Payments, Wearables, Smart Cards, Research
- **Company** (5 questions) - Locations, Contact, Team, Values, Getting Started

## Customization

### Add New Questions

Edit `/lib/chat/questions-database.json`:

```json
{
  "id": "q19",
  "category": "your-category",
  "question": "Your question here?",
  "keywords": ["keyword1", "keyword2"],
  "answer": "Your answer here...",
  "links": [
    { "text": "Learn More", "url": "/your-page" }
  ],
  "relatedQuestions": ["q1", "q2"]
}
```

### Style Adjustments

The widget uses Tailwind CSS with dark mode classes. Key styling in:
- `ChatButton.tsx` - Black/white button with hover effects
- `ChatWindow.tsx` - Window dimensions, rounded corners, shadows
- `ChatMessage.tsx` - Message bubbles with borders and theme support
- `ChatHeader.tsx` - Black/white header with sparkles icon
- `ChatInput.tsx` - Rounded input with arrow-up send button

### Change Position

In `ChatButton.tsx` and `ChatWindow.tsx`, modify:
```tsx
className="fixed bottom-6 right-6 ..."  // Change position here
```

## Integration

Already integrated in `/app/layout.tsx`. The widget appears on all pages.

To remove from specific pages, move `<ChatWidget />` from layout to individual page components.

## Analytics (Future)

To track usage, add analytics in `ChatWindow.tsx`:

```tsx
const handleSendMessage = (content: string) => {
  // Track question
  analytics.track('chat_question_asked', { question: content });
  // ... rest of code
};
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Keyboard navigation (Tab, Enter)
- ARIA labels on all interactive elements
- Focus management
- Screen reader friendly

## Performance

- No external API calls
- Pure client-side matching
- Minimal bundle size (~15KB gzipped)
- Lazy loaded with Next.js

## Future Enhancements

Potential features for Phase 2:
- Conversation history persistence (localStorage)
- Multi-language support
- Analytics dashboard
- CRM integration
- Live chat handoff
- Voice input

