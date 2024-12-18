import React from 'react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    title: 'Text to Visual',
    description: 'Transform your written ideas into clear, engaging visuals instantly.',
  },
  {
    title: 'File Support',
    description: 'Upload Excel, Word, or CSV files to visualize your data effectively.',
  },
  {
    title: 'Quick Export',
    description: 'Download your visualizations in multiple formats for easy sharing.',
  },
];

export function Features() {
  return (
    <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {features.map((feature) => (
        <FeatureCard
          key={feature.title}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}