import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mic, MicOff } from "lucide-react";

interface DemoSectionProps {
  isRecording: boolean;
  transcription: string;
  onToggleRecording: () => void;
}

export const DemoSection = ({ isRecording, transcription, onToggleRecording }: DemoSectionProps) => (
  <Card className="w-full lg:w-1/3 bg-black/50 border-green-500 text-green-500 p-6 backdrop-blur-sm">
    <h2 className="text-xl mb-6 border-b border-green-500 pb-2">Quick Demo</h2>
    <div className="space-y-4">
      <Button 
        variant="outline" 
        className={`w-full border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all ${
          isRecording ? 'bg-green-500 text-black' : ''
        }`}
        onClick={onToggleRecording}
      >
        {isRecording ? (
          <><MicOff className="mr-2 h-4 w-4" /> Stop Recording</>
        ) : (
          <><Mic className="mr-2 h-4 w-4" /> Start Recording</>
        )}
      </Button>
      
      <div className="h-64 bg-black/50 border border-green-500 rounded-md p-4 font-mono text-sm overflow-auto">
        {transcription ? (
          <div className="typing-animation">
            {transcription.split('\n').map((line, i) => (
              <div key={i} className="mb-2">{line}</div>
            ))}
          </div>
        ) : (
          <div className="text-green-500/50 italic">
            Click "Start Recording" to begin transcription...
          </div>
        )}
      </div>
    </div>
  </Card>
);