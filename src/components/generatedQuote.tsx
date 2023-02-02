import { FC } from "react";
import aeroplane from "../assets/aeroplane.svg";
import ship from "../assets/ship.svg";
import { computeDeliveryDate } from "./utils";

export type channelType = "air" | "ocean";

interface GeneratedQuoteProps {
  quoteType: channelType;
  deliveryRangeStart: number;
  deliveryRangeEnd: number;
  quoteCost: number;
  startingCountry: string;
  destinationCountry: string;
}

export const GeneratedQuote: FC<GeneratedQuoteProps> = ({
  quoteType,
  deliveryRangeStart,
  deliveryRangeEnd,
  quoteCost,
  startingCountry,
  destinationCountry,
}) => {
  const computedStartDeliveryDate = computeDeliveryDate(deliveryRangeStart);
  const computedEndDeliveryDate = computeDeliveryDate(deliveryRangeEnd);

  return (
    <div>
      <div>
        <div>
          <img
            src={quoteType === "air" ? aeroplane : ship}
            alt="Generated quote icon"
          />
          <p>Traditional {quoteType} freight</p>
        </div>
        <div>
          <p>
            {deliveryRangeStart}-{deliveryRangeEnd} days
          </p>
          <p>Estimated delivery</p>
          <p>
            {computedStartDeliveryDate.toLocaleString("en-US", {
              month: "short",
              day: "numeric",
            })}{" "}
            -{" "}
            {computedEndDeliveryDate.toLocaleString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
      <div>
        <h3>
          {startingCountry} -&gt; {destinationCountry}
        </h3>
        <div>
          <p>US$ {quoteCost.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};
