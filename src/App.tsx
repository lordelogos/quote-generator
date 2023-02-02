import "./App.css";
import { GeneratedQuote } from "./components/generatedQuote";
import { QuoteForm } from "./components/quoteForm";

function App() {
  return (
    <div className="App">
      <QuoteForm />
      <GeneratedQuote />
    </div>
  );
}

export default App;
