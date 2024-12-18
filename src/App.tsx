import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { InputSection } from './components/Input/InputSection';
import { Preview } from './components/Preview/Preview';
import { Features } from './components/Features/Features';
import { generateVisualDescription } from './lib/api';
import { processFile } from './lib/fileProcessing';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const handleTextSubmit = async (text: string) => {
    try {
      setLoading(true);
      setError(null);
      const description = await generateVisualDescription(text);
      setResult(description);
    } catch (err) {
      setError('Failed to generate visualization. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = async (file: File) => {
    try {
      setLoading(true);
      setError(null);
      const content = await processFile(file);
      const description = await generateVisualDescription(content);
      setResult(description);
    } catch (err) {
      setError('Failed to process file. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        <Header />
        
        <div className="max-w-4xl mx-auto space-y-8">
          <InputSection
            onTextSubmit={handleTextSubmit}
            onFileSelect={handleFileSelect}
          />

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg">
              {error}
            </div>
          )}

          <Preview loading={loading} result={result} />
        </div>

        <Features />
      </div>
    </div>
  );
}

export default App;