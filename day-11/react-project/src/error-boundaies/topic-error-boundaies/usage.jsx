import ErrorBoundary from "./errorBoundaries";
import BuggyComponent from "./buggyComponent";

export default function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}