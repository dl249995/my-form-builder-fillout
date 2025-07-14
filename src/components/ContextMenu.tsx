import React from 'react';
import copyImg from "../img/copy.svg";
import deleteImg from "../img/delete.svg";
import duplicateImg from "../img/duplicate.svg";
import flagImg from "../img/flag.svg";
import pencilImg from "../img/pencil.svg";

interface ContextMenuProps {
  showMenu: string | null;
  menuPosition: { x: number; y: number };
  menuRef: React.RefObject<HTMLDivElement>;
  onSetAsFirstPage: () => void;
  onStartRename: () => void;
  onCopyTab: () => void;
  onDuplicateTab: () => void;
  onDeleteTab: () => void;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  showMenu,
  menuPosition,
  menuRef,
  onSetAsFirstPage,
  onStartRename,
  onCopyTab,
  onDuplicateTab,
  onDeleteTab,
}) => {
  if (!showMenu) return null;

  return (
    <div
      ref={menuRef}
      className="fixed z-50 bg-white rounded-xl border border-gray-200 shadow-xl w-56 mt-72"
      style={{
        left: menuPosition.x,
        top: menuPosition.y,
        transform: 'translateY(-100%)'
      }}
    >
      {/* Header */}
      <div className="px-4 py-2 font-semibold text-gray-800 border-b border-gray-200">
        Settings
      </div>

      {/* Actions */}
      <div className="py-1">
        <button
          onClick={onSetAsFirstPage}
          className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-400 cursor-not-allowed transition-colors"
          disabled
        >
          <img src={flagImg} alt="Flag" className="w-4 h-4" />
          Set as first page (use drag & drop)
        </button>

        <button
          onClick={onStartRename}
          className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <img src={pencilImg} alt="Rename" className="w-4 h-4" />
          Rename
        </button>

        <button
          onClick={onCopyTab}
          className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <img src={copyImg} alt="Copy" className="w-4 h-4" />
          Copy
        </button>

        <button
          onClick={onDuplicateTab}
          className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <img src={duplicateImg} alt="Duplicate" className="w-4 h-4" />
          Duplicate
        </button>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-200 my-1" />

      {/* Delete */}
      <div className="pb-2">
        <button
          onClick={onDeleteTab}
          className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
        >
          <img src={deleteImg} alt="Delete" className="w-4 h-4" />
          Delete
        </button>
      </div>
    </div>
  );
};