import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "@/lib/theme-provider";

interface MarkdownContentProps {
  content: string;
}

// ZoomImage component for click-to-zoom
function ZoomImage({ src, alt, style }: { src: string; alt?: string; style?: React.CSSProperties }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        style={style}
        className="rounded-lg shadow-md mx-auto max-w-full cursor-zoom-in transition-transform duration-200 hover:scale-105"
        onClick={() => setIsOpen(true)}
        loading="lazy"
      />

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={src}
            alt={alt}
            className="max-h-[60%] max-w-[60%] rounded-lg shadow-lg cursor-zoom-out"
          />
        </div>
      )}
    </>
  );
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  const { theme } = useTheme();

  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          // Code blocks
          code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={theme === "dark" ? oneDark : oneLight}
                language={match[1]}
                PreTag="div"
                className="rounded-lg"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono" {...props}>
                {children}
              </code>
            );
          },

          // Images with zoom
          img({ node, ...props }: any) {
            let src = props.src || "";

            // Convert relative paths
            if (src.startsWith("./images/") || src.startsWith("../images/")) {
              src = src.replace(/^(\.\.\/|\.\/)/, "/");
            }

            // Parse width/height
            const style: React.CSSProperties = {};
            if (props.title) {
              const widthMatch = props.title.match(/width=(\d+)/);
              const heightMatch = props.title.match(/height=(\d+)/);
              if (widthMatch) style.width = `${widthMatch[1]}px`;
              if (heightMatch) style.height = `${heightMatch[1]}px`;
            }

            return <ZoomImage src={src} alt={props.alt} style={style} />;
          },

          // Tables
          table({ node, ...props }: any) {
            return (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse align-top" {...props}>
                  {props.children}
                </table>
              </div>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
