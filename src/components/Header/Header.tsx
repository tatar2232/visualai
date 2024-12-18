import React from 'react';
import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <Sparkles className="w-8 h-8 text-blue-600" />
        <h1 className="text-4xl font-bold text-gray-900">Visual AI</h1>
      </div>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Transform your ideas into beautiful visuals instantly. Support for text, Excel, Word, and CSV files.
      </p>
    </div>
  );
}