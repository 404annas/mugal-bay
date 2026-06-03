"use client";
import React, { useState } from 'react';

// Types for our data
type TabId = 'research' | 'roadmaps' | 'diagrams' | 'workshops';

interface TabData {
  id: TabId;
  label: string;
  title: string;
  description: string;
  buttonText: string;
  activeColor: string; // The background color for the tab pill
  imagePlaceholder: string; // You can replace this with your actual image path
}

const tabData: TabData[] = [
  {
    id: 'research',
    label: 'Research',
    title: 'Turn research into a shared direction',
    description: 'Pull outputs from Claude, NotebookLM, or any research tool into one canvas. Your team reviews the findings together, surfaces what matters, and commits to a direction — then flow the insights back out to your roadmap, specs, or next AI prompt.',
    buttonText: 'Explore research',
    activeColor: 'bg-[#FFED70]', // Yellowish
    imagePlaceholder: 'Research Image Area'
  },
  {
    id: 'roadmaps',
    label: 'Roadmaps',
    title: 'Build a roadmap your whole team owns',
    description: 'Connect your backlog, company priorities, strategy docs, and voice of customer tools to the canvas. Work through the tradeoffs as a team, build a shared roadmap, and push it back out as context for your sprint planning tools — so everyone\'s building in the same direction.',
    buttonText: 'Explore roadmaps',
    activeColor: 'bg-[#D8FFC3]', // Light Green
    imagePlaceholder: 'Roadmaps Image Area'
  },
  {
    id: 'diagrams',
    label: 'Diagrams',
    title: 'Map your processes. Make them visible to everyone.',
    description: 'Describe your workflow to Claude, Cursor, Codex, or Kiro and bring it into Miro as a visual process map. Swim lanes, decision points, and sequence flows on one canvas - so every stakeholder can spot where things break down and agree on what to fix.',
    buttonText: 'Explore diagrams',
    activeColor: 'bg-[#F1C6FF]', // Light Purple
    imagePlaceholder: 'Diagrams Image Area'
  },
  {
    id: 'workshops',
    label: 'Workshops',
    title: 'Turn notes into a workshop the team will love',
    description: 'Pull your meeting notes into Miro and generate a workshop framework in minutes - agenda, activities, slides, and all. Run the session on the canvas, let your team build understanding, then capture next steps as tasks and send them straight to Jira, Linear, or wherever your team tracks work.',
    buttonText: 'Explore workshops',
    activeColor: 'bg-[#FFE6C5]', // Light Orange
    imagePlaceholder: 'Workshops Image Area'
  }
];

const TabSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('research');

  const currentTab = tabData.find((tab) => tab.id === activeTab)!;

  return (
    <section className="bg-[#f3f3f3] py-20 px-6 md:px-12 font-['Roboto'] min-h-[700px] flex flex-col items-center">
      
      {/* Navigation Tab Bar */}
      <div className="bg-white rounded-full p-1.5 flex items-center shadow-sm mb-16 inline-flex border border-gray-100">
        {tabData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-8 py-2.5 rounded-full text-[17px] font-medium transition-all duration-300 ${
              activeTab === tab.id 
              ? `${tab.activeColor} text-black` 
              : 'text-[#444] hover:bg-gray-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Content */}
        <div className="space-y-6 max-w-lg">
          <h2 className="text-[42px] md:text-[52px] font-[700] leading-[1.1] text-[#1a1a1a] tracking-tight">
            {currentTab.title}
          </h2>
          <p className="text-[#555] text-[19px] leading-relaxed font-normal">
            {currentTab.description}
          </p>
          <button className="bg-[#1a1a1a] hover:bg-black text-white px-6 py-3 rounded-lg text-lg font-bold transition-colors duration-200 mt-4">
            {currentTab.buttonText}
          </button>
        </div>

        {/* Right Side: Image Placeholder */}
        <div className="relative w-full h-[400px] md:h-[500px] bg-white/50 rounded-2xl border border-gray-100 overflow-hidden flex items-center justify-center border-dashed">
             {/* 
                Yahan aap apni image laga saktay hain. 
                Example: <img src={currentTab.imageUrl} alt={currentTab.label} className="w-full h-full object-contain" />
             */}
             <div className="text-gray-400 font-medium italic">
                [{currentTab.imagePlaceholder} Layout Goes Here]
             </div>
             
             {/* Background Decoration (Dots pattern style) */}
             <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
                  style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
             </div>
        </div>

      </div>
    </section>
  );
};

export default TabSection;