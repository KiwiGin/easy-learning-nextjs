"use client";

import React, { useCallback, useRef, useState } from "react";
import CanvasComponent from "../canvasComponents/CanvasComponent";
import Toolbar from "../canvasComponents/Toolbar";

export const CanvasContext = React.createContext<ICanvasContext>({});

export interface ICanvasData {
  component?: string;
  id?: string;
  position?: { top: number; left: number };
  dimension?: { width: string; height: string };
  content?: string;
  type: string;
}

export interface ICanvasComponent {
  position?: { top: number; left: number };
  dimension?: { width: string; height: string };
  content?: string;
  id?: string;
  type: string;
  isReadOnly?: boolean;
}

export interface ICanvasContext {
  state?: {
    canvasData: ICanvasData[];
    activeSelection: Set<string>;
    enableQuillToolbar: boolean;
  };
  actions?: {
    setCanvasData: React.Dispatch<React.SetStateAction<ICanvasData[]>>;
    setActiveSelection: React.Dispatch<React.SetStateAction<Set<string>>>;
    updateCanvasData: (data: Partial<ICanvasComponent>) => void;
    addElement: (type: string) => void;
    setEnableQuillToolbar: (state: boolean) => void;
  };
}

const getInitialData = (data: any[], type: string = "TEXT") => {
  return {
    type: type,
    id: `${type}__${Date.now()}__${data.length}`,
    position: {
      top: 100,
      left: 100
    },
    dimension: {
      width: "150",
      height: type === "TEXT" ? "50" : "150"
    },
    content: type === "TEXT" ? "Sample Text" : ""
  };
};

const exampleData = [
  // ... (exampleData unchanged)
];

const CanvasContainer = () => {
  const [canvasData, setCanvasData] = useState<ICanvasData[]>([]);
  const [activeSelection, setActiveSelection] = useState<Set<string>>(
    new Set()
  );
  const [enableQuillToolbar, setEnableQuillToolbar] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const isSelectAll = useRef<boolean>(false);

  const updateCanvasData = (data: Partial<ICanvasComponent>) => {
    const currentDataIndex =
      canvasData.findIndex((canvas) => canvas.id === data.id) ?? -1;
    const updatedData = { ...canvasData?.[currentDataIndex], ...data };
    canvasData.splice(currentDataIndex, 1, updatedData);
    setCanvasData([...canvasData]);
  };

  const addElement = (type: string) => {
    const defaultData = getInitialData(canvasData, type);
    setCanvasData([...canvasData, { ...defaultData, type: type ?? "TEXT" }]);
    activeSelection.clear();
    activeSelection.add(defaultData.id);
    setActiveSelection(new Set(activeSelection));
  };

  const deleteElement = useCallback(() => {
    setCanvasData((prevData) => {
      const updatedData = prevData.filter((data) => {
        if (data.id && activeSelection.has(data.id)) {
          activeSelection.delete(data.id);
          return false;
        }
        return true;
      });
      setActiveSelection(new Set(activeSelection));
      return updatedData;
    });
  }, [activeSelection]);

  const selectAllElement = useCallback(() => {
    isSelectAll.current = true;
    const newSelection = new Set(canvasData.map((data) => data.id || ""));
    setActiveSelection(newSelection);
  }, [canvasData]);

  const context: ICanvasContext = {
    actions: {
      setCanvasData,
      setActiveSelection,
      updateCanvasData,
      addElement,
      setEnableQuillToolbar
    },
    state: {
      canvasData,
      activeSelection,
      enableQuillToolbar
    }
  };

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Delete") {
        deleteElement();
      } else if (["a", "A"].includes(event.key) && event.ctrlKey) {
        event.preventDefault();
        selectAllElement();
      }
    },
    [deleteElement, selectAllElement]
  );

  const outSideClickHandler = () => {
    isSelectAll.current = false;
    setActiveSelection(new Set());
  };

  const handleMouseDown = useCallback((event: MouseEvent) => {
    if (!isSelectAll.current) {
      return;
    }

    outSideClickHandler();
    isSelectAll.current = false;
  }, []);

  React.useEffect(() => {
    const handleKeyDownWrapper = (event: KeyboardEvent) => handleKeyDown(event);
    const handleMouseDownWrapper = (event: MouseEvent) => handleMouseDown(event);

    document.addEventListener("keydown", handleKeyDownWrapper);
    document.addEventListener("mousedown", handleMouseDownWrapper);
    return () => {
      document.removeEventListener("keydown", handleKeyDownWrapper);
      document.removeEventListener("mousedown", handleMouseDownWrapper);
    };
  }, [handleKeyDown, handleMouseDown]);

  return (
    <div ref={containerRef}>
      <CanvasContext.Provider value={context}>
        <Toolbar isEditEnable={enableQuillToolbar} />
        <div className="canvas-container">
          {canvasData.map((canvas) => (
            <CanvasComponent key={canvas.id} {...canvas} />
          ))}
        </div>
        {/* {JSON.stringify(canvasData)} */}
      </CanvasContext.Provider>
    </div>
  );
};

export default CanvasContainer;
