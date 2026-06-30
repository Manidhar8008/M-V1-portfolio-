export interface Message {
  id: string;
  sender: 'user' | 'vasuki';
  text: string;
  timestamp: string;
}

export interface MetricItem {
  label: string;
  value: string;
  description: string;
  icon: string;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  description: string;
  details: string[];
}

export interface PresetQuestion {
  id: string;
  question: string;
  label: string;
  icon: string;
}
