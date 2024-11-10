import { useState } from "react";
import { AsciiTitle } from "./components/AsciiTitle";
import { DemoSection } from "./components/DemoSection";
import { FeaturesList } from "./components/FeaturesList";
import { GettingStarted } from "./components/GettingStarted";

function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcription, setTranscription] = useState("");

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      setTranscription("Recording started... (Demo text)\n> Analyzing audio stream...\n> Converting speech to text...");
    } else {
      setTranscription("");
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-12">
        <AsciiTitle />

        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center mt-8">
          <DemoSection 
            isRecording={isRecording}
            transcription={transcription}
            onToggleRecording={toggleRecording}
          />

          <div className="w-full lg:w-1/2 space-y-6">
            <FeaturesList />
            <GettingStarted />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;