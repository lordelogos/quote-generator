import { FC } from "react";
import aeroplane from "../assets/aeroplane.svg";
import ship from "../assets/ship.svg";
import { computeDeliveryDate } from "./utils";
import "./generatedQuote.css";

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
    <div className="quote__container">
      <div className="quote__details">
        <div className="quote__branding">
          <img
            src={quoteType === "air" ? aeroplane : ship}
            alt="Generated quote icon"
            className="quote__icon"
          />
          <p>Traditional {quoteType} freight</p>
        </div>
        <div className="quote__delivery-details">
          <p className="quote__delivery-duration">
            {deliveryRangeStart}-{deliveryRangeEnd} days
          </p>
          <p className="quote__delivery-heading">Estimated delivery</p>
          <p className="quote__delivery-days">
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
      <div className="quote__destination-container">
        <div className="quote__destination">
          <h3>
            {" "}
            {startingCountry} -&gt; {destinationCountry}
          </h3>
        </div>
        <div className="quote__price-container">
          <p className="quote__price">US$ {quoteCost.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};
