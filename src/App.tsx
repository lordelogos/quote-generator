import { useState } from "react";
import "./App.css";
import { channelType, GeneratedQuote } from "./components/generatedQuote";
import { QuoteForm } from "./components/quoteForm";
import { randomNumber } from "./components/utils";

export type createQuoteProps = {
  startingCountry: string;
  destinationCountry: string;
  quotePrice: number;
  shippingChannel: channelType;
};

interface Quote extends createQuoteProps {
  deliveryRangeStart: number;
  deliveryRangeEnd: number;
}

function App() {
  const [quote, setQuote] = useState<Quote | undefined>(undefined);
  const createQuote = (data: createQuoteProps) => {
    let deliveryRangeStart, endRange;
    if (data.shippingChannel === "air") {
      deliveryRangeStart = randomNumber(3, 7);
      endRange = randomNumber(2, 4);
    } else {
      deliveryRangeStart = randomNumber(25, 30);
      endRange = randomNumber(5, 10);
    }

    setQuote({
      ...data,
      deliveryRangeStart,
      deliveryRangeEnd: deliveryRangeStart + endRange,
    });
  };

  return (
    <div className="App">
      <QuoteForm createQuoteFn={createQuote} />
      {quote && (
        <GeneratedQuote
          quoteType={quote.shippingChannel}
          deliveryRangeEnd={quote.deliveryRangeEnd}
          deliveryRangeStart={quote.deliveryRangeStart}
          destinationCountry={quote.destinationCountry}
          quoteCost={quote.quotePrice}
          startingCountry={quote.startingCountry}
        />
      )}
    </div>
  );
}

export default App;
