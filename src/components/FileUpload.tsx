import React from 'react';
import { FileUp, FileSpreadsheet, FileText } from 'lucide-react';

type FileUploadProps = {
  onFileSelect: (file: File) => void;
};

export function FileUpload({ onFileSelect }: FileUploadProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="w-full">
      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <div className="flex space-x-4 mb-3">
            <FileUp className="w-6 h-6 text-gray-500" />
            <FileSpreadsheet className="w-6 h-6 text-gray-500" />
            <FileText className="w-6 h-6 text-gray-500" />
          </div>
          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500">Excel, Word, CSV, or Text files</p>
        </div>
        <input
          type="file"
          className="hidden"
          accept=".xlsx,.xls,.doc,.docx,.csv,.txt"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
}