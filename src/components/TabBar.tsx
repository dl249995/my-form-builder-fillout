import React from 'react';
import { Plus, MoreVertical, Info as InfoIconLucide } from 'lucide-react';
import type { Tab } from '../types';

export const TabBar: React.FC<{
  tabs: Tab[];
  activeTab: string;
  onTabClick: (tabId: string) => void;
  onTabHover: (tabId: string) => void;
  onTabLeave: () => void;
  onMenuClick: (tabId: string, event: React.MouseEvent) => void;
  onAddTab: (insertIndex?: number) => void;
  onDragStart: (e: React.DragEvent, tabId: string) => void;
  onDragOver: (e: React.DragEvent, index: number) => void;
  onDragLeave: () => void;
  onDrop: (e: React.DragEvent, index: number) => void;
  onDragEnd: () => void;
  dragOverIndex: number | null;
  dragOverPosition: 'before' | 'after' | null;
  draggedTab: string | null;
  isRenaming: string | null;
  renameValue: string;
  onRenameChange: (value: string) => void;
  onRenameSubmit: (tabId: string) => void;
  onKeyDown: (e: React.KeyboardEvent, tabId: string) => void;
}> = ({
  tabs,
  activeTab,
  onTabClick,
  onTabHover,
  onTabLeave,
  onMenuClick,
  onAddTab,
  onDragStart,
  onDragOver,
  onDragLeave,
  onDrop,
  onDragEnd,
  dragOverIndex,
  dragOverPosition,
  draggedTab,
  isRenaming,
  renameValue,
  onRenameChange,
  onRenameSubmit,
  onKeyDown,
}) => {
  const [hoveredGap, setHoveredGap] = React.useState<number | null>(null);
  const [isDragActive, setIsDragActive] = React.useState(false);
  const [dragTimeout, setDragTimeout] = React.useState<NodeJS.Timeout | null>(null);

  const isInfoTab = (tab: Tab) => tab.name.toLowerCase() === 'info';

  const getIcon = (tab: Tab) => {
    const activeClass = tab.id === activeTab ? 'text-orange-500' : 'text-gray-500';
    
    if (tab.icon === 'info') {
      return <InfoIconLucide size={18} className={activeClass} />;
    }
    if (tab.icon === 'ending') {
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={activeClass}
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    }
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={activeClass}
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="15" y2="17" />
      </svg>
    );
  };

  const renderTab = (tab: Tab, index: number) => (
    <React.Fragment key={tab.id}>
      {/* Drop indicator before tab */}
      {dragOverIndex === index && dragOverPosition === 'before' && draggedTab && (
        <div className="flex items-center mx-2">
          <div className="w-0.5 h-8 bg-blue-500 rounded-full" />
        </div>
      )}
      
      {/* Tab */}
      <div
        className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-200 cursor-pointer ${
          draggedTab === tab.id 
            ? 'opacity-50 scale-95' 
            : 'hover:scale-105'
        } ${
          tab.id === activeTab
            ? 'bg-white border border-gray-200 shadow-sm text-gray-800'
            : tab.state === 'hover'
            ? 'bg-gray-50 text-gray-700'
            : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
        }`}
        onClick={() => onTabClick(tab.id)}
        onMouseEnter={() => tab.id !== activeTab && onTabHover(tab.id)}
        onMouseLeave={onTabLeave}
        draggable={true}
        onDragStart={(e) => onDragStart(e, tab.id)}
        onDragOver={(e) => onDragOver(e, index)}
        onDragLeave={onDragLeave}
        onDrop={(e) => onDrop(e, index)}
        onDragEnd={onDragEnd}
      >
        {/* Icon */}
        {getIcon(tab)}

        {isRenaming === tab.id ? (
          <input
            type="text"
            value={renameValue}
            onChange={(e) => onRenameChange(e.target.value)}
            onBlur={() => onRenameSubmit(tab.id)}
            onKeyDown={(e) => onKeyDown(e, tab.id)}
            className="bg-transparent outline-none border-b-2 border-orange-400 text-sm min-w-0 flex-1 focus:border-orange-500"
            autoFocus
          />
        ) : (
          <span className="text-sm font-medium whitespace-nowrap select-none">
            {tab.name}
          </span>
        )}

        {tab.id === activeTab && (
          <button
            onClick={(e) => onMenuClick(tab.id, e)}
            className="p-1 hover:bg-gray-200 rounded-md transition-colors"
          >
            <MoreVertical size={12} />
          </button>
        )}
      </div>

      {/* Drop indicator after tab */}
      {dragOverIndex === index && dragOverPosition === 'after' && draggedTab && (
        <div className="flex items-center mx-2">
          <div className="w-0.5 h-8 bg-blue-500 rounded-full" />
        </div>
      )}

      {/* Gap with dotted line and plus button */}
      {index < tabs.length - 1 && (
        <div
          className="flex items-center justify-center relative px-3"
          onMouseEnter={() => setHoveredGap(index + 1)}
          onMouseLeave={() => setHoveredGap(null)}
        >
          <div className="flex items-center gap-1 opacity-40">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-gray-400 rounded-full" />
            ))}
          </div>

          <button
            onClick={() => onAddTab(index + 1)}
            className={`absolute w-6 h-6 flex items-center justify-center text-gray-600 border border-gray-300 rounded-full transition-all duration-200 bg-white hover:bg-gray-50 ${
              hoveredGap === index + 1 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Plus size={12} strokeWidth={2} />
          </button>
        </div>
      )}
    </React.Fragment>
  );

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center">
      {/* Scrollable tabs container */}
      <div className="flex-1 overflow-x-auto scrollbar-hide">
        <div className="flex items-center w-max">
          {tabs.map((tab, index) => renderTab(tab, index))}
        </div>
      </div>

      {/* Fixed "Add page" button */}
      <div className="flex-shrink-0 ml-2">
        <button
          onClick={() => onAddTab()}
          className="flex items-center gap-2 px-4 py-2.5 text-gray-600 hover:text-gray-800 hover:bg-gray-50 border border-gray-300 rounded-lg transition-colors"
        >
          <Plus size={16} strokeWidth={2} />
          <span className="text-sm font-medium">Add page</span>
        </button>
      </div>
    </div>
  );
};