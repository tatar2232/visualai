import React from 'react';
import { Image as ImageIcon, Download, Loader } from 'lucide-react';

interface PreviewProps {
  loading?: boolean;
  result?: string | null;
}

export function Preview({ loading, result }: PreviewProps) {
  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6">
      <div className="border-2 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
        {loading ? (
          <div className="text-center">
            <Loader className="w-16 h-16 text-blue-400 animate-spin mx-auto mb-4" />
            <p className="text-gray-500">Generating visualization...</p>
          </div>
        ) : result ? (
          <div className="p-6 overflow-auto">
            <p className="text-gray-800 whitespace-pre-wrap">{result}</p>
          </div>
        ) : (
          <div className="text-center">
            <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Your visualization will appear here</p>
          </div>
        )}
      </div>
      {result && (
        <div className="mt-4 flex justify-end">
          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
            <Download className="w-4 h-4" />
            <span>Download</span>
          </button>
        </div>
      )}
    </div>
  );
}