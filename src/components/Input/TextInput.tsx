import React from 'react';
import { Wand2 } from 'lucide-react';

type TextInputProps = {
  onSubmit: (text: string) => void;
};

export function TextInput({ onSubmit }: TextInputProps) {
  const [text, setText] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <textarea
          className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="Describe your idea... (e.g., 'Create a flowchart showing the coffee brewing process')"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
        >
          <Wand2 className="w-4 h-4" />
          <span>Generate</span>
        </button>
      </div>
    </form>
  );
}