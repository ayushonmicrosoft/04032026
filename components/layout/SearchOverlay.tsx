"use client";

import { X, Search, ArrowRight, Loader2, Package, Layers, FileText } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

type SearchResult = {
  id: string;
  title: string;
  href: string;
  type: "product" | "category" | "page";
  source: "ai" | "local";
};

type SearchOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SUGGESTIONS = [
  "WINEA PRO Desk",
  "Acoustic Panels",
  "Meeting Tables",
  "Ergonomics Guide",
  "Showrooms",
];

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Reset search when overlay opens/closes
  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setResults([]);
    } else {
      const timer = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Debounced search
  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/nav-search", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query, limit: 8 }),
          signal: controller.signal,
        });
        const data = await response.json();
        setResults(data.results || []);
      } catch (error: any) {
        if (error.name !== "AbortError") {
          console.error("Search failed:", error);
        }
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [query]);

  const handleResultClick = (href: string) => {
    router.push(href);
    onClose();
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "product": return <Package className="w-4 h-4" />;
      case "category": return <Layers className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-white/95 backdrop-blur-sm z-[100] flex flex-col items-center justify-start pt-32 px-6 overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            title="Close Search"
            className="absolute top-8 right-8 p-2 hover:bg-neutral-100 rounded-full transition-colors"
          >
            <X className="w-8 h-8 text-neutral-400 hover:text-neutral-900" />
          </button>

          {/* Search Input */}
          <div className="w-full max-w-3xl relative">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for products, solutions..."
              className="w-full text-4xl md:text-5xl font-light text-neutral-900 placeholder:text-neutral-300 bg-transparent border-b-2 border-neutral-200 focus:border-primary outline-none py-4 pr-12 transition-colors"
            />
            {isLoading ? (
              <Loader2 className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 text-primary animate-spin" />
            ) : (
              <Search className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 text-neutral-400" />
            )}
          </div>

          {/* Results / Suggestions */}
          <div className="w-full max-w-3xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 pb-20">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wide text-neutral-400 mb-6">
                Popular Searches
              </h3>
              <ul className="space-y-4">
                {SUGGESTIONS.map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => setQuery(item)}
                      className="text-lg md:text-xl font-light text-neutral-600 hover:text-primary transition-colors flex items-center gap-2 group text-left w-full"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="min-h-[300px]">
              <h3 className="text-sm font-medium uppercase tracking-wide text-neutral-400 mb-6">
                {query ? "Results" : "Quick Links"}
              </h3>
              
              {query.length >= 2 ? (
                results.length > 0 ? (
                  <ul className="space-y-2">
                    {results.map((result) => (
                      <li key={result.id}>
                        <button
                          onClick={() => handleResultClick(result.href)}
                          className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors group text-left"
                        >
                          <div className="w-10 h-10 rounded bg-neutral-100 flex items-center justify-center text-neutral-400 group-hover:text-primary group-hover:bg-primary/5 transition-colors">
                            {getIcon(result.type)}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-neutral-900 group-hover:text-primary transition-colors">
                              {result.title}
                            </div>
                            <div className="text-xs text-neutral-400 capitalize">
                              {result.type} {result.source === 'ai' && '• AI Match'}
                            </div>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : !isLoading && (
                  <div className="p-8 bg-neutral-50 border border-neutral-100 text-neutral-500 text-center rounded-xl">
                    <p className="text-lg font-light">No matches found for &quot;{query}&quot;</p>
                    <p className="text-sm mt-2">Try searching for something else</p>
                  </div>
                )
              ) : !query && (
                <ul className="space-y-4">
                  <li>
                    <button onClick={() => handleResultClick("/products")} className="text-lg font-light text-neutral-600 hover:text-primary transition-colors">All Products</button>
                  </li>
                  <li>
                    <button onClick={() => handleResultClick("/solutions")} className="text-lg font-light text-neutral-600 hover:text-primary transition-colors">Solutions</button>
                  </li>
                  <li>
                    <button onClick={() => handleResultClick("/showrooms")} className="text-lg font-light text-neutral-600 hover:text-primary transition-colors">Showrooms</button>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
