import { useState, createContext, useContext } from "react";
// Create context for Tabs to share state
const TabsContext = createContext();

// Main Tabs component (parent)
function Tabs({ children, defaultTab = 0 }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

// TabList component
function TabList({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

// Individual Tab component
function Tab({ children, index }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === index;

  return (
    <button onClick={() => setActiveTab(index)}>
      {children} {isActive ? "(Active)" : ""}
    </button>
  );
}

// TabPanels component
function TabPanels({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

// Individual TabPanel component
function TabPanel({ children, index }) {
  const { activeTab } = useContext(TabsContext);

  if (activeTab !== index) return null;

  return (
    <div>
      {children}
    </div>
  );
}

function Example2_CompoundComponents() {
  return (
    <div>
      <h3>Pattern 2: Compound Components</h3>

      <Tabs defaultTab={0}>
        <TabList>
          <Tab index={0}>🏠 Home</Tab>
          <Tab index={1}>👤 Profile</Tab>
          <Tab index={2}>⚙️ Settings</Tab>
        </TabList>

        <TabPanels>
          <TabPanel index={0}>
            <h4>Welcome Home!</h4>
            <p>This is the home tab content.</p>
          </TabPanel>

          <TabPanel index={1}>
            <h4>User Profile</h4>
            <div>
              <div>👤</div>
              <p><strong>Name:</strong> Inder Singh</p>
              <p><strong>Role:</strong> Senior Developer</p>
              <p><strong>Company:</strong> NetSquare Softwares</p>
            </div>
          </TabPanel>

          <TabPanel index={2}>
            <h4>Settings</h4>
            <p>Configure your application settings here.</p>

            <label>
              <input type="checkbox" /> Enable notifications
            </label>
            <br />

            <label>
              <input type="checkbox" /> Dark mode
            </label>
            <br />

            <label>
              <input type="checkbox" /> Auto-save
            </label>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Example2_CompoundComponents;
