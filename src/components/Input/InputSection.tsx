import React from 'react';
import { TextInput } from './TextInput';
import { FileUpload } from './FileUpload';

interface InputSectionProps {
  onTextSubmit: (text: string) => void;
  onFileSelect: (file: File) => void;
}

export function InputSection({ onTextSubmit, onFileSelect }: InputSectionProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Enter your idea</h2>
        <TextInput onSubmit={onTextSubmit} />
      </div>
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Or upload a file</h2>
        <FileUpload onFileSelect={onFileSelect} />
      </div>
    </div>
  );
}