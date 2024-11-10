import { Card } from "@/components/ui/card";

export const GettingStarted = () => (
  <Card className="bg-black/50 border-green-500 text-green-500 p-6 backdrop-blur-sm">
    <h2 className="text-xl mb-4 border-b border-green-500 pb-2">Getting Started</h2>
    <div className="font-mono text-sm">
      <p className="mb-2">$ npm install stt-anything</p>
      <p className="mb-2">$ npx stt-anything init</p>
      <p className="text-green-500/50 mt-4">Ready to transform speech to text!</p>
    </div>
  </Card>
);