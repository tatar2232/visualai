export async function processFile(file: File): Promise<string> {
  const text = await readFileContent(file);
  return text;
}

async function readFileContent(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (event) => {
      resolve(event.target?.result as string);
    };
    
    reader.onerror = (error) => {
      reject(error);
    };

    if (file.type.includes('text') || file.name.endsWith('.csv')) {
      reader.readAsText(file);
    } else {
      // For other file types, you might want to use a different reading strategy
      // or integrate with a service that can parse Excel/Word files
      reader.readAsText(file);
    }
  });
}