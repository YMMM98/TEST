import { Card } from "@/components/ui/card";
import { Terminal } from "lucide-react";

export const FeaturesList = () => (
  <Card className="bg-black/50 border-green-500 text-green-500 p-6 backdrop-blur-sm">
    <h2 className="text-xl mb-4 border-b border-green-500 pb-2">Features</h2>
    <ul className="space-y-3">
      <li className="flex items-center">
        <Terminal className="mr-2 h-4 w-4" /> Real-time speech recognition
      </li>
      <li className="flex items-center">
        <Terminal className="mr-2 h-4 w-4" /> Multiple language support
      </li>
      <li className="flex items-center">
        <Terminal className="mr-2 h-4 w-4" /> Terminal-inspired interface
      </li>
      <li className="flex items-center">
        <Terminal className="mr-2 h-4 w-4" /> Export to multiple formats
      </li>
    </ul>
  </Card>
);