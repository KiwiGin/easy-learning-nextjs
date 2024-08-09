'use client';

import React, { useContext, useRef, useState } from "react";
import { ResizeEnable, Rnd } from "react-rnd";
import { CanvasContext, ICanvasComponent } from "../components/CanvasContainer";
import { resizeHandleClasses } from "../app/_lib/canvasUtils";
import dynamic from 'next/dynamic';

// importar los componentes dinámicamente con ssr: false para evitar problemas con el renderizado en el servidor
const ImageElement = dynamic(() => import("./ImageElement"), { ssr: false });
const TextElement = dynamic(() => import("./TextElement"), { ssr: false });

const componentMap: { [key: string]: React.ComponentType<ICanvasComponent> } = {
  TEXT: TextElement,
  IMAGE: ImageElement
};

const getEnableResize = (type: string): ResizeEnable => {
  return {
    bottom: type === "IMAGE",
    bottomLeft: true,
    bottomRight: true,
    top: type === "IMAGE",
    topLeft: true,
    topRight: true,
    left: true,
    right: true
  };
};

export default function CanvasComponent(props: ICanvasComponent) {
  const { state, actions } = useContext(CanvasContext);
  const { dimension, position, content, id, type } = props;
  const [showGrids, setShowGrids] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const elementRef = useRef<HTMLDivElement>(null);
  const isDragged = useRef<boolean>(false);

  const activeSelection = state?.activeSelection;

  const handleBlur = () => {
    if (!document || !elementRef.current) return;

    const toolbarElement = document.querySelector("#toolbar");
    if (
      elementRef.current.contains(document.activeElement) ||
      toolbarElement?.contains(document.activeElement)
    ) {
      return;
    }
    setIsReadOnly(true);
    actions?.setEnableQuillToolbar(false);
    if (id && activeSelection) {
      activeSelection.delete(id);
      actions?.setActiveSelection(new Set(activeSelection));
    }
  };

  React.useEffect(() => {
    window.addEventListener('focusout', handleBlur);
    return () => window.removeEventListener('focusout', handleBlur);
  }, [actions, id, activeSelection]);

  const getComponent = () => {
    const Component = type && componentMap[type];
    if (!Component || !id) return null;
    return (
      <Component
        key={id}
        id={id}
        type={type}
        position={position}
        dimension={dimension}
        content={content}
        isReadOnly={isReadOnly}
      />
    );
  };

  const style: React.CSSProperties = {
    outline: "none",
    border: `2px solid ${
      (id && state?.activeSelection.has(id)) || showGrids || isDragged.current
        ? "#21DEE5"
        : "transparent"
    }`
  };

  const onMouseEnter = () => {
    setShowGrids(true);
  };

  const onMouseLeave = () => {
    setShowGrids(false);
  };

  const onFocus = (event: React.MouseEvent) => {
    if (id) {
      actions?.setActiveSelection(new Set(state?.activeSelection.add(id)));
    }
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (!isReadOnly) event.stopPropagation();
  };

  const handleClass =
    id && state?.activeSelection.has(id) && state?.activeSelection.size === 1
      ? "showHandles"
      : "";

  const onDoubleClick = () => {
    if (!isReadOnly) return;
    setIsReadOnly(false);
    actions?.setEnableQuillToolbar(true);
  };

  return (
    <div ref={elementRef}>
      <Rnd
        style={style}
        size={{ width: dimension?.width || 0, height: dimension?.height || 0 }}
        position={{ x: position?.left || 0, y: position?.top || 0 }}
        onDragStart={() => {
          isDragged.current = true;
        }}
        onDragStop={(e, d) => {
          isDragged.current = false;
          actions?.updateCanvasData({ id, position: { left: d.x, top: d.y } });
        }}
        resizeHandleWrapperClass={handleClass}
        resizeHandleClasses={resizeHandleClasses}
        onResize={(e, direction, ref, delta, position) => {
          actions?.updateCanvasData({
            id,
            dimension: { width: ref.style.width, height: ref.style.height },
            position: { top: position.y, left: position.x }
          });
        }}
        enableResizing={getEnableResize(type)}
        minWidth={100}
        minHeight={50}
        disableDragging={!isReadOnly}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onDoubleClick={onDoubleClick}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        tabIndex={0}
        lockAspectRatio={type === "IMAGE"}
      >
        <div className="item-container">{getComponent()}</div>
      </Rnd>
    </div>
  );
}
