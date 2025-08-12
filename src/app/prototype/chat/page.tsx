'use client';

import { useState } from 'react';
import { SCENARIOS } from '../../../data/scenarios';
import { DEFAULT_ANIMATION_CONFIG } from '../../../lib/prototype/animation-config';
import {
  generateAnimationSequence,
  calculateScenarioDuration,
  createInitialAnimationState,
} from '../../../lib/prototype/animation-utils';
import {
  SettingsIcon,
  FileIcon,
  SpeechIcon,
  SendIcon,
  CloseIcon,
} from '../../../components/icons';
import UserMessage from '@/components/prototype/UserMessage';
import ParticipantMessage from '@/components/prototype/ParticipantMessage';
import AkariiMessage from '@/components/prototype/AkariiMessage';
import SystemMessage from '@/components/prototype/SystemMessage';

export default function PrototypeChatPage() {
  // Prevent body scroll on mobile
  if (typeof window !== 'undefined') {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
  }

  // Backend data preparation - all scenarios and animation logic ready
  const scenarios = SCENARIOS;
  const animationConfig = DEFAULT_ANIMATION_CONFIG;

  // State for active scenario
  const [activeScenarioId, setActiveScenarioId] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isContextPanelOpen, setIsContextPanelOpen] = useState(true);
  const [showContextPanel, setShowContextPanel] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCanvasOpen, setIsMobileCanvasOpen] = useState(false);

  // Get active scenario
  const activeScenario =
    scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  // Replay controls
  const handlePlay = () => {
    setIsPlaying(true);
    setIsComplete(false);
  };

  const handleReplay = () => {
    setIsPlaying(false);
    setIsComplete(false);
    // Clear messages and restart animation
    const messagesList = document.getElementById('messages-list');
    if (messagesList) {
      messagesList.innerHTML = '';
    }
    // Restart animation after a brief delay
    setTimeout(() => {
      setIsPlaying(true);
    }, 100);
  };

  const handleScenarioSwitch = (scenarioId: number) => {
    setActiveScenarioId(scenarioId);
    setIsPlaying(false);
    setIsComplete(false);
    // Clear messages when switching scenarios
    const messagesList = document.getElementById('messages-list');
    if (messagesList) {
      messagesList.innerHTML = '';
    }
  };

  const handleContextPanelToggle = () => {
    if (isContextPanelOpen) {
      // Closing: hide panel immediately, then update layout
      setShowContextPanel(false);
      setIsContextPanelOpen(false);
    } else {
      // Opening: update layout first, then show panel after delay
      setIsContextPanelOpen(true);
      setTimeout(() => {
        setShowContextPanel(true);
      }, 400); // Start panel animation 20% before message container ends (400ms instead of 500ms)
    }
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileCanvasToggle = () => {
    setIsMobileCanvasOpen(!isMobileCanvasOpen);
  };

  // Pre-calculate animation sequences for both scenarios
  const scenario1Sequence = generateAnimationSequence(
    scenarios[0].messages,
    animationConfig
  );
  const scenario2Sequence = generateAnimationSequence(
    scenarios[1].messages,
    animationConfig
  );

  // Calculate durations for reference
  const scenario1Duration = calculateScenarioDuration(
    scenarios[0].messages,
    animationConfig
  );
  const scenario2Duration = calculateScenarioDuration(
    scenarios[1].messages,
    animationConfig
  );

  // Initial animation state
  const initialState = createInitialAnimationState(1);

  // Dynamic context content based on scenario
  const getScenarioContext = () => {
    if (activeScenarioId === 1) {
      return {
        title: 'Chosen Path',
        content: {
          option: 'Option C - Targeted Paid Ads',
          pros: ['Controlled spend', 'Measurable ROI', 'Quick turnaround'],
          cons: ['Smaller audience than A', 'Requires strong creative'],
          metric: 'Track conversion rates and cost per acquisition',
          owners: [
            { name: 'Sam', role: 'CTO', avatar: 'gray' },
            { name: 'Trish', role: 'Marketing', avatar: 'gray' },
          ],
        },
      };
    } else {
      return {
        title: 'Decision Recap',
        content: {
          option: 'Option C - Staged rollout by usage tier',
          pros: ['Risk control', 'Faster feedback', 'High-value segments'],
          cons: ['Complex rollout', 'Monitoring overhead'],
          metric: 'Deploy v2.1 to Production by Sept 30',
          owners: [
            { name: 'Sam', role: 'CTO', avatar: 'gray' },
            { name: 'Trish', role: 'Release Lead', avatar: 'gray' },
          ],
        },
      };
    }
  };

  const scenarioContext = getScenarioContext();

  return (
    <div className="h-screen bg-black overflow-hidden relative fixed inset-0">
      {/* Mobile Navigation Row - Only visible on mobile */}
      <div className="md:hidden absolute top-0 left-0 right-0 z-40 flex items-center justify-between p-4">
        <button
          onClick={handleMobileMenuToggle}
          className="flex items-center gap-2 px-4 py-3 bg-white/10 border border-white/20 rounded-full app-heading text-white"
        >
          <span>Menu</span>
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
        </button>

        <button
          onClick={handleMobileCanvasToggle}
          className="flex items-center gap-2 px-4 py-3 bg-white/10 border border-white/20 rounded-full app-heading text-white"
        >
          <span>+</span>
          <span>Canvas</span>
        </button>
      </div>

      {/* Left Sidebar - Hidden on mobile, positioned absolutely on desktop */}
      <div className="hidden md:flex absolute left-6 top-6 bottom-6 w-[300px] flex-col gap-4 z-30">
        {/* User Profile Header */}
        <div className="py-2 pl-2 pr-4 bg-white/1 border border-white/5 rounded-[40px]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-600"></div>
            <span className="app-subheading opacity-70">
              Trish Hartman
            </span>
            <div className="ml-auto">
              <SettingsIcon
                size={20}
                className="opacity-50 hover:opacity-100 cursor-pointer"
                color="#DBDBDB"
              />
            </div>
          </div>
        </div>

        {/* Channels Section */}
        <div className="flex-1 flex flex-col gap-10 px-4 py-6 border border-white/5 rounded-[40px]">
          <div className="flex flex-col gap-4">
            <h3 className="app-subheading text-white/70 pl-2">
              Channels
            </h3>
            <div className="space-y-2">
              <div className="px-4 py-3 rounded-[40px] bg-white/10 border border-white/20 app-paragraph2 cursor-pointer">
                General
              </div>
              <div className="px-4 py-3 rounded-[40px] text-white/50 app-paragraph2 bg-white/1 border border-white/5 hover:bg-white/5 hover:border-white/10 cursor-pointer">
                Product Roadmap
              </div>
              <div className="px-4 py-3 rounded-[40px] text-white/50 app-paragraph2 bg-white/1 border border-white/5 hover:bg-white/5 hover:border-white/10 cursor-pointer">
                Design
              </div>
              <div className="px-4 py-3 rounded-[40px] text-white/50 app-paragraph2 bg-white/1 border border-white/5 hover:bg-white/5 hover:border-white/10 cursor-pointer">
                Engineering
              </div>
              <div className="px-4 py-3 rounded-[40px] text-white/50 app-paragraph2 bg-white/1 border border-white/5 hover:bg-white/5 hover:border-white/10 cursor-pointer">
                Growth Marketing
              </div>
              <div className="px-4 py-3 rounded-[40px] text-white/50 app-paragraph2 bg-white/1 border border-white/5 hover:bg-white/5 hover:border-white/10 cursor-pointer">
                Random
              </div>
            </div>
          </div>

          {/* DMs Section */}
          <div className="flex flex-col gap-4">
            <h3 className="app-subheading text-white/70 pl-2">
              Direct Messages
            </h3>
            <div className="space-y-2">
              <div className="flex items-center py-2 pl-2 pr-4 gap-2 app-paragraph2 border border-white/10 bg-white/1 hover:bg-white/5 text-gray-400 rounded-[40px] cursor-pointer">
                <div className="w-6 h-6 rounded-full bg-gray-600"></div>
                <div className="flex-1 flex flex-row justify-between items-baseline">
                  <span>Sam</span>
                  <span className="app-support">
                    CTO
                  </span>
                </div>
              </div>

              <div className="flex items-center py-2 pl-2 pr-4 gap-2 app-paragraph2 border border-white/10 bg-white/1 hover:bg-white/5 text-gray-400 rounded-[40px] cursor-pointer">
                <div className="w-6 h-6 rounded-full bg-orange-500"></div>
                <div className="flex-1 flex flex-row justify-between items-baseline">
                  <span>Eli</span>
                  <span className="app-support">
                    CTO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Center Chat Area - Responsive layout */}
      <div
        className={`absolute inset-0 transition-all duration-500 ease-out ${
          // Desktop dynamic positioning via classes
          isContextPanelOpen
            ? 'md:left-[330px] md:right-[410px]'
            : 'md:left-[330px] md:right-0'
        }`}
      >
        {/* Bottom Layer: Messages Container (Full Height) */}
        <div
          className="absolute inset-0 overflow-y-auto scrollbar-hide"
          id="messages-container"
        >
          <div
            id="messages-list"
            className="flex flex-col space-y-2 min-h-full justify-end px-6 pt-[140px] md:pt-20 pb-16 md:pb-20"
          >
            {/* Render messages from active scenario */}
            {activeScenario.messages.map((message, index) => {
              if (message.sender === 'Trish') {
                return (
                  <UserMessage
                    key={index}
                    username={message.sender}
                    time={message.timestamp || ''}
                    userMessage={message.content}
                  />
                );
              } else if (message.sender === 'Sam') {
                return (
                  <ParticipantMessage
                    key={index}
                    username={message.sender}
                    time={message.timestamp || ''}
                    participantMessage={message.content}
                  />
                );
              } else if (message.sender === 'Akarii') {
                return (
                  <AkariiMessage
                    key={index}
                    time={message.timestamp || ''}
                    akariiMessage={message.content}
                  />
                );
              } else if (message.sender === 'System') {
                return (
                  <SystemMessage
                    key={index}
                    time={message.timestamp || ''}
                    content={message.content}
                    type={message.type as 'vote' | 'alert' | 'card'}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>

        {/* Middle Layer: Gradient Overlays */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Top Gradient - Mobile: Cover nav + header area, Desktop: Standard height */}
          <div
            className="absolute top-0 left-0 right-0 h-[180px] md:h-[140px]"
            style={{
              background:
                'linear-gradient(180deg, rgba(10, 10, 10, 0.80) 50%, rgba(10, 10, 10, 0.00) 100%)',
            }}
          />

          {/* Bottom Gradient - Mobile: Cover input area, Desktop: Standard height */}
          <div
            className="absolute bottom-0 left-0 right-0 h-16 md:h-16"
            style={{
              background:
                'linear-gradient(180deg, rgba(10, 10, 10, 0.00) 0%, rgba(10, 10, 10, 0.80) 100%)',
            }}
          />
        </div>

        {/* Mobile Chat Header Container - 8px below navigation */}
        <div className="md:hidden absolute top-[64px] left-4 right-4 z-30 pointer-events-auto">
          <div className="px-6 py-3 bg-white/1 border border-white/10 text-white/80 flex flex-row items-center justify-between rounded-[40px] backdrop-blur-sm">
            <div className="app-subheading text-white/70 mb-1">
              #{activeScenario.thread.channel || 'general'}
            </div>
            <div className="app-paragraph2 text-white">
              {activeScenario.thread.title}
            </div>
          </div>
        </div>

        {/* Top Layer: UI Elements */}
        <div className="relative z-20 flex flex-col h-full pointer-events-none">
          {/* Desktop Chat Header Row - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-4 pointer-events-auto p-6">
            {/* Chat Header */}
            <div className="flex-1 px-6 py-3 bg-white/1 border border-white/10 text-white/80 flex items-center justify-between rounded-[40px] backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="app-heading">
                  #{activeScenario.thread.channel || 'general'}
                </span>
              </div>
              {/* Thread context */}
              <div className="app-paragraph1 text-white/50">
                {activeScenario.thread.title}
                {activeScenario.thread.goal && (
                  <span className="ml-2 px-2 py-1 bg-blue-500/10 text-blue-400 rounded app-support">
                    Goal: {activeScenario.thread.goal}
                  </span>
                )}
              </div>
            </div>

            {/* Context Panel Toggle Button - Outside header with 16px gap */}
            {!isContextPanelOpen && (
              <button
                onClick={handleContextPanelToggle}
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 flex items-center justify-center cursor-pointer transition-all flex-shrink-0"
              >
                <span className="text-white/80 text-app-heading">+</span>
              </button>
            )}
          </div>

          {/* Spacer to push input to bottom */}
          <div className="flex-1"></div>

          {/* Message Input Area */}
          <div className="flex items-center gap-1 md:gap-2 pointer-events-auto px-2 md:px-6 pb-4 md:pb-6">
            <div className="w-10 md:w-12 h-10 md:h-12 flex flex-col justify-center items-center border border-white/10 bg-white/1 backdrop-blur-sm rounded-[40px] hover:bg-white/5 cursor-pointer">
              <FileIcon
                size={16}
                className="opacity-50 md:w-5 md:h-5"
                color="#DBDBDB"
              />
            </div>
            <div className="h-10 md:h-12 flex flex-row justify-center flex-1 bg-white/1 border border-white/10 rounded-[40px] px-4 py-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full bg-transparent outline-none app-paragraph2 p-0 border-none"
                disabled
              />
            </div>
            <div className="w-10 md:w-12 h-10 md:h-12 flex flex-col justify-center items-center border border-white/10 bg-white/1 backdrop-blur-sm rounded-[40px] hover:bg-white/5 cursor-pointer">
              <SpeechIcon
                size={16}
                className="opacity-50 md:w-5 md:h-5"
                color="#DBDBDB"
              />
            </div>
            <div className="w-10 md:w-12 h-10 md:h-12 flex flex-col justify-center items-center border border-white/10 bg-white/1 backdrop-blur-sm rounded-[40px] hover:bg-white/5 cursor-pointer">
              <SendIcon
                size={16}
                className="opacity-50 md:w-5 md:h-5"
                color="#DBDBDB"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Context Panel - Hidden on mobile, positioned absolutely on desktop */}
      {showContextPanel && (
        <div
          className="hidden md:flex absolute right-6 top-6 bottom-6 w-[380px] flex-col justify-between bg-white/5 border border-white/10 px-4 pt-14 pb-4 rounded-[40px] z-30"
          style={{
            animation: 'panelSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Close Icon */}
          <div
            onClick={handleContextPanelToggle}
            className="absolute top-4 left-1/2 transform -translate-x-1/2 hover:opacity-100 opacity-50 cursor-pointer"
          >
            <CloseIcon
              size={16}
              color="#DBDBDB"
            />
          </div>

          <div className="space-y-6">
            {/* Dynamic Decision Section */}
            <div>
              <h3 className="app-h1 text-white/80 mb-3">
                {scenarioContext.title}
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="app-h3 text-white/80 mb-1">
                    {scenarioContext.content.option}
                  </div>
                </div>

                <div>
                  <h4 className="app-h3 text-white/70 mb-1">
                    Pros
                  </h4>
                  <div className="app-p text-white/50 space-y-1">
                    {scenarioContext.content.pros.map((pro, index) => (
                      <div key={index}>• {pro}</div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="app-h3 text-white/70 mb-1">
                    Cons
                  </h4>
                  <div className="app-p text-white/50 space-y-1">
                    {scenarioContext.content.cons.map((con, index) => (
                      <div key={index}>• {con}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Success Metric */}
            <div>
              <h4 className="app-h3 text-white/70 mb-1">
                {activeScenarioId === 1 ? 'Success Metric' : 'Target Goal'}
              </h4>
              <div className="app-p text-white/50">
                {scenarioContext.content.metric}
              </div>
            </div>

            {/* Owners */}
            <div className="flex flex-col	gap-2">
              <h4 className="app-subheading text-white/80">
                Owners
              </h4>
              <div className="space-y-1">
                {scenarioContext.content.owners.map((owner, index) => (
                  <div
                    key={index}
                    className="flex items-center py-2 pl-2 pr-4 gap-2 app-paragraph2 border border-white/10 bg-white/1 hover:bg-white/5 text-gray-400 rounded-[40px] cursor-pointer"
                  >
                    <div className="w-6 h-6 rounded-full bg-gray-600"></div>
                    <div className="flex-1 flex flex-row justify-between items-baseline">
                      <span>{owner.name}</span>
                      <span className="app-support">
                        {owner.role}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Action */}
          <button className="w-full px-4 py-4 bg-white/5 hover:bg-white/10 rounded-[40px] app-paragraph1 text-white/50 border border-white/10 cursor-pointer">
            Create Tickets
          </button>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur">
          <div className="p-6">
            {/* Close button */}
            <div className="flex justify-between items-center mb-6">
              <span className="app-heading text-white">
                Menu
              </span>
              <button
                onClick={handleMobileMenuToggle}
                className="w-8 h-8 flex items-center justify-center text-white/70"
              >
                ✕
              </button>
            </div>

            {/* Menu content - Copy from left sidebar */}
            <div className="space-y-6">
              <div>
                <h3 className="app-subheading text-white/70 mb-4">
                  Channels
                </h3>
                <div className="space-y-2">
                  <div className="px-4 py-4 rounded-[40px] bg-white/10 border border-white/20 app-paragraph2">
                    General
                  </div>
                  <div className="px-4 py-4 rounded-[40px] text-white/50 app-paragraph2 bg-white/1 border border-white/5">
                    Product Roadmap
                  </div>
                  <div className="px-4 py-4 rounded-[40px] text-white/50 app-paragraph2 bg-white/1 border border-white/5">
                    Design
                  </div>
                  <div className="px-4 py-4 rounded-[40px] text-white/50 app-paragraph2 bg-white/1 border border-white/5">
                    Engineering
                  </div>
                  <div className="px-4 py-4 rounded-[40px] text-white/50 app-paragraph2 bg-white/1 border border-white/5">
                    Growth Marketing
                  </div>
                </div>
              </div>

              <div>
                <h3 className="app-subheading text-white/70 mb-4">
                  Direct Messages
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center py-2 pl-2 pr-4 gap-2 app-paragraph2 border border-white/10 bg-white/1 text-gray-400 rounded-[40px]">
                    <div className="w-8 h-8 rounded-full bg-gray-600"></div>
                    <div className="flex-1 flex flex-row justify-between items-baseline">
                      <span>Sam</span>
                      <span className="app-support">
                        CTO
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center py-2 pl-2 pr-4 gap-2 app-paragraph2 border border-white/10 bg-white/1 text-gray-400 rounded-[40px]">
                    <div className="w-8 h-8 rounded-full bg-orange-500"></div>
                    <div className="flex-1 flex flex-row justify-between items-baseline">
                      <span>Eli</span>
                      <span className="app-support">
                        CTO
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Canvas Overlay */}
      {isMobileCanvasOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
          <div className="p-6">
            {/* Close button */}
            <div className="flex justify-between items-center mb-6">
              <span className="app-heading text-white">
                Canvas
              </span>
              <button
                onClick={handleMobileCanvasToggle}
                className="w-8 h-8 flex items-center justify-center text-white/70"
              >
                ✕
              </button>
            </div>

            {/* Canvas content - Copy from right sidebar */}
            <div className="space-y-6">
              <div>
                <h3 className="app-h1 text-white/80 mb-3">
                  {scenarioContext.title}
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="app-h3 text-white/80 mb-1">
                      {scenarioContext.content.option}
                    </div>
                  </div>

                  <div>
                    <h4 className="app-h3 text-white/70 mb-1">
                      Pros
                    </h4>
                    <div className="app-p text-white/50 space-y-1">
                      {scenarioContext.content.pros.map((pro, index) => (
                        <div key={index}>• {pro}</div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="app-h3 text-white/70 mb-1">
                      Cons
                    </h4>
                    <div className="app-p text-white/50 space-y-1">
                      {scenarioContext.content.cons.map((con, index) => (
                        <div key={index}>• {con}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="app-h3 text-white/70 mb-1">
                  {activeScenarioId === 1 ? 'Success Metric' : 'Target Goal'}
                </h4>
                <div className="app-p text-white/50">
                  {scenarioContext.content.metric}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="app-subheading text-white/80">
                  Owners
                </h4>
                <div className="space-y-2">
                  {scenarioContext.content.owners.map((owner, index) => (
                    <div
                      key={index}
                      className="flex items-center py-2 pl-2 pr-4 gap-2 app-paragraph2 border border-white/10 bg-white/1 text-gray-400 rounded-[40px]"
                    >
                      <div className="w-8 h-8 rounded-full bg-gray-600"></div>
                      <div className="flex-1 flex flex-row justify-between items-baseline">
                        <span>{owner.name}</span>
                        <span className="app-support">
                          {owner.role}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Development Info - Hidden for recording */}
      <div className="hidden fixed top-4 right-4 bg-black/90 text-white p-3 rounded-[12px] text-xs opacity-75 z-50 border border-white/20">
        <div>Scenarios: {scenarios.length} loaded</div>
        <div>S1 duration: {Math.round(scenario1Duration / 1000)}s</div>
        <div>S2 duration: {Math.round(scenario2Duration / 1000)}s</div>
        <div className="text-green-400">✓ Ready to record</div>
      </div>

      {/* Scenario Selector */}
      <div className="hidden fixed bottom-4 left-4 bg-black/80 border border-white/20 p-3 rounded-[20px] backdrop-blur-sm">
        <div className="app-support text-gray-400 mb-2">
          Scenario
        </div>
        <div className="flex gap-2">
          {scenarios.map((scenario) => (
            <button
              key={scenario.id}
              onClick={() => handleScenarioSwitch(scenario.id)}
              className={`px-3 py-2 rounded-[12px] app-support transition-all ${
                activeScenarioId === scenario.id
                  ? 'bg-white/20 text-white border border-white/30'
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-gray-300'
              }`}
            >
              {scenario.id}
            </button>
          ))}
        </div>
        <div className="app-support text-gray-500 mt-2 max-w-[200px]">
          {activeScenario.name}
        </div>
      </div>

      {/* Replay Controls - Sticky Footer */}
      <div className="hidden fixed bottom-4 right-4 bg-black/80 border border-white/20 p-3 rounded-[20px] backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="app-support text-gray-400">
            {isPlaying ? 'Playing...' : isComplete ? 'Complete' : 'Ready'}
          </div>
          <div className="flex gap-2">
            {!isPlaying && !isComplete && (
              <button
                onClick={handlePlay}
                className="px-4 py-2 bg-green-600/20 text-green-400 border border-green-500/30 rounded-[12px] app-support hover:bg-green-600/30 transition-all"
              >
                ▶ Play
              </button>
            )}
            {(isPlaying || isComplete) && (
              <button
                onClick={handleReplay}
                className="px-4 py-2 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-[12px] app-support hover:bg-blue-600/30 transition-all"
              >
                ↻ Replay
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
