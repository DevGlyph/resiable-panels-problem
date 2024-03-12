"use client";
import { EditorProvider } from "./components/EditorProvider";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import EditorContainer from "./components/EditorContainer";
import "./index.css";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

function App() {
  return (
    <EditorProvider>
      <div className="app">
        <PanelGroup direction="horizontal">
          <Panel defaultSize={25}>
            <Sidebar />
          </Panel>
          <PanelResizeHandle
            style={{
              borderLeft: "1px solid #ccc",
            }}
          />
          <Panel defaultSize={75}>
            <div className="main-content">
              <TopBar />
              <EditorContainer />
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </EditorProvider>
  );
}

export default App;
