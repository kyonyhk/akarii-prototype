# Semantic HTML Guide for Akarii

## Why Semantic HTML Matters

### 🎯 **Accessibility (Critical)**
- Screen readers depend on proper HTML structure to navigate content
- Users can jump between sections using heading navigation (H1 → H2 → H3)
- Assistive technologies understand content hierarchy and relationships

### 🔍 **SEO Benefits**
- Search engines use heading structure to understand page content and rank it
- H1 tells Google what your page is about
- Proper hierarchy shows content organization

### 🛠 **Code Quality**
- Self-documenting code that's easier to maintain
- Other developers immediately understand content structure
- Better debugging and component organization

---

## Content Hierarchy Strategy for Akarii

### **The Mental Model**
Think of your page like a **book outline**:

```
Page Title (H1) - "AKARII" - Only ONE per page
├── Chapter (H2) - "AI is here. But teams are not ready."
├── Chapter (H2) - "Features" 
│   ├── Section (H3) - "Keeps conversations focused"
│   ├── Section (H3) - "Real-time collaboration"
│   └── Section (H3) - "Smart notifications"
└── Chapter (H2) - "About Us"
```

### **Specific Tag Usage Rules**

#### `<h1>` - Page Title (ONE per page)
```jsx
<h1 className="heading-mega1 text-white">AKARII</h1>
```
- **When to use**: Main page title, brand name, primary page identifier
- **Akarii example**: "AKARII" in the Hero section
- **Rule**: Only ONE H1 per page

#### `<h2>` - Major Section Headings
```jsx
<h2 className="heading-mega2 text-white">AI is here.</h2>
<h2 className="heading2 text-white">Features</h2>
```
- **When to use**: Main sections of your page
- **Akarii examples**: "AI is here", "Features", "About", "Contact"
- **Rule**: Multiple H2s are fine, they're your main chapters

#### `<h3>` - Sub-section Headings
```jsx
<h3 className="heading2 text-white">Keeps conversations focused</h3>
```
- **When to use**: Individual features, subsections within a major section
- **Akarii examples**: Each feature title in your Features section
- **Rule**: Should be nested under H2 sections

#### `<p>` - All Body Text (Including Eyebrows!)
```jsx
<p className="eyebrow1 text-white/80">AI Workspace for Teams Who Move Fast</p>
<p className="paragraph1 text-white/50">Description text here</p>
```
- **When to use**: Eyebrow text, descriptions, body content, any non-heading text
- **Key insight**: Eyebrow text is still body text, not a heading!
- **Rule**: Use for all text that isn't a title/heading

---

## Your Current Page Structure (Fixed)

```jsx
// Hero Section
<section>
  <p className="eyebrow1">AI Workspace for Teams Who Move Fast</p>  // Eyebrow
  <p className="paragraph1">The only team chat that's ready for AI</p>  // Description  
  <h1 className="heading-mega1">AKARII</h1>  // Main page title
</section>

// Value Proposition Section  
<section>
  <h2 className="heading-mega2">AI is here.</h2>  // Major section heading
  <h2 className="heading-mega2">But teams are not ready.</h2>  // Continuation
</section>

// Features Section
<section>
  <h2>Features</h2>  // Major section heading (implied or explicit)
  
  // Individual Feature Cards
  <article>
    <p className="eyebrow4">AI is your new teammate</p>  // Eyebrow
    <h3 className="heading2">Keeps conversations focused</h3>  // Feature title
    <p className="paragraph1">Reminds your team when...</p>  // Description
  </article>
</section>
```

---

## Decision Framework for Future Development

### **Ask Yourself These Questions:**

1. **"Is this the main page title?"** → `<h1>`
2. **"Is this a major section of the page?"** → `<h2>` 
3. **"Is this a subsection or individual item?"** → `<h3>`
4. **"Is this descriptive/body text?"** → `<p>` (even if styled as eyebrow!)

### **Common Mistakes to Avoid:**

❌ **Don't do this:**
```jsx
<div className="eyebrow1">Eyebrow text</div>  // Should be <p>
<div className="heading2">Title</div>  // Should be <h3> or <h2>
<h1>Feature Title</h1>  // Should be <h3> - not page title
```

✅ **Do this instead:**
```jsx
<p className="eyebrow1">Eyebrow text</p>  // Correct semantic meaning
<h3 className="heading2">Feature Title</h3>  // Proper heading hierarchy  
<h1 className="heading-mega1">AKARII</h1>  // One page title only
```

---

## Implementation Checklist

### ✅ **What We've Updated:**
- [x] Hero section: `<h1>` for AKARII, `<p>` for eyebrows/descriptions
- [x] InfoSection: `<h3>` for feature titles, `<p>` for eyebrows/descriptions  
- [x] ValueProposition: `<h2>` for major section headings

### 🔄 **Still Need to Update:**
- [ ] All remaining components with div-based text
- [ ] Section headers throughout the site
- [ ] Footer text elements
- [ ] Any remaining non-semantic elements

---

## Benefits You'll See Immediately

1. **Better Accessibility Score**: Screen readers can now navigate your content properly
2. **Improved SEO**: Search engines understand your content hierarchy
3. **Cleaner Code**: More self-documenting and maintainable
4. **Professional Standards**: Follows web development best practices

---

## Quick Reference Card

| Content Type | HTML Tag | Akarii Example | 
|-------------|----------|----------------|
| Page Title | `<h1>` | "AKARII" |
| Section Title | `<h2>` | "Features", "AI is here" |  
| Feature Title | `<h3>` | "Keeps conversations focused" |
| Eyebrow Text | `<p>` | "AI is your new teammate" |
| Description | `<p>` | "The only team chat ready for AI" |
| Body Text | `<p>` | All other descriptive content |

**Remember**: Your CSS classes stay exactly the same! Semantic HTML doesn't change your styling - it just makes your content more meaningful and accessible.