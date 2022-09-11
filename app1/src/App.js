import React, { Suspense } from "react";

const RemoteApp = React.lazy(() => import("app2/App"));

const App = () => {
  return (
    <div>
      <div style={{ border: "4px solid purple", height: "200px" }}>
        Hello this is Main App {"(App 1)"}
        <div>
          <button style={{ backgroundColor: "green" }}>
            Change Color to red!
          </button>
        </div>
      </div>

      <Suspense fallback={"Loading..."}>
        <RemoteApp />
      </Suspense>
    </div>
  );
};

export default App;
