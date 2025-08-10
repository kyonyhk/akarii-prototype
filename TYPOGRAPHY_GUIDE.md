# Typography Setup Guide

## Custom Fonts Configuration

Your Akarii landing page now has three PP fonts configured:

- **PP Pangaia Light** - For headings
- **PP Museum Light** - For paragraphs  
- **PP Mondwest Regular** - For eyebrows

## Font Files Location

Add your font files to these directories:

```
public/fonts/
├── pp-pangaia/
│   ├── pp-pangaia-light.woff2
│   ├── pp-pangaia-light.woff
│   └── pp-pangaia-light.ttf
├── pp-museum/
│   ├── pp-museum-light.woff2
│   ├── pp-museum-light.woff
│   └── pp-museum-light.ttf
└── pp-mondwest/
    ├── pp-mondwest-regular.woff2
    ├── pp-mondwest-regular.woff
    └── pp-mondwest-regular.ttf
```

## Usage Examples

### Using Utility Classes (Recommended)
```jsx
{/* Headings */}
<h1 className="heading-mega1">AKARII</h1>
<h2 className="heading1">Main Title</h2>
<h3 className="heading3">Section Title</h3>

{/* Paragraphs */}
<p className="paragraph1">Large body text</p>
<p className="paragraph2">Regular body text</p>

{/* Eyebrows */}
<span className="eyebrow3">LABEL</span>
<span className="eyebrow5">Small Label</span>
```

### Using Tailwind Classes Directly
```jsx
{/* Headings with PP Pangaia Light */}
<h1 className="font-pangaia text-heading-mega1">AKARII</h1>
<h2 className="font-pangaia text-heading2">Main Title</h2>

{/* Paragraphs with PP Museum Light */}
<p className="font-museum text-paragraph1">Body text</p>

{/* Eyebrows with PP Mondwest Regular */}
<span className="font-mondwest text-eyebrow3">LABEL</span>
```

## Available Sizes

### Headings (PP Pangaia Light)
- `heading-mega1` - 128px
- `heading-mega2` - 96px  
- `heading1` - 60px
- `heading2` - 48px
- `heading3` - 36px
- `heading4` - 30px
- `heading5` - 24px

### Paragraphs (PP Museum Light)
- `paragraph1` - 20px
- `paragraph2` - 16px

### Eyebrows (PP Mondwest Regular)
- `eyebrow1` - 36px
- `eyebrow2` - 30px
- `eyebrow3` - 24px
- `eyebrow4` - 20px
- `eyebrow5` - 16px

## Next Steps

1. **Add your font files** to the `public/fonts/` directories
2. **Test the fonts** by viewing the landing page
3. **Update existing components** to use the new typography classes
4. **Verify font loading** in browser dev tools

The fonts are configured with `font-display: swap` for optimal loading performance.