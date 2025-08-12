import React from 'react';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  // Simple markdown parser for Akarii messages
  const parseContent = (text: string) => {
    const lines = text.split('\n');
    const elements: React.ReactElement[] = [];
    let currentParagraph: string[] = [];
    let key = 0;

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const paragraphText = currentParagraph.join(' ').trim();
        if (paragraphText) {
          elements.push(
            <p
              key={key++}
              className="app-paragraph2 text-white/80 mb-3 leading-relaxed"
            >
              {renderInlineFormatting(paragraphText)}
            </p>
          );
        }
        currentParagraph = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Empty line - flush current paragraph
      if (!trimmedLine) {
        flushParagraph();
        return;
      }

      // Bold heading (starts with ** and ends with **)
      if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
        flushParagraph();
        const headingText = trimmedLine.slice(2, -2);
        elements.push(
          <h3
            key={key++}
            className="app-subheading text-white font-medium mb-2 mt-4 first:mt-0"
          >
            {headingText}
          </h3>
        );
        return;
      }

      // Regular content - add to current paragraph
      currentParagraph.push(trimmedLine);
    });

    // Flush any remaining paragraph
    flushParagraph();

    return elements;
  };

  const renderInlineFormatting = (text: string) => {
    const parts: (string | React.ReactElement)[] = [];
    const boldRegex = /\*\*(.*?)\*\*/g;
    let lastIndex = 0;
    let match;
    let key = 0;

    while ((match = boldRegex.exec(text)) !== null) {
      // Add text before the bold part
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }

      // Add bold part
      parts.push(
        <span
          key={key++}
          className="font-medium text-white"
        >
          {match[1]}
        </span>
      );

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts.length > 1 ? parts : text;
  };

  return (
    <div className="prose prose-invert max-w-none">{parseContent(content)}</div>
  );
}
