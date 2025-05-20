import { DayPicker } from "react-day-picker";
import { useState } from "react";

interface DateSelectProps {
  label: string;
  placeholder: string;
  // helpText?: string;
}

export default function DateSelect({ label, placeholder }: DateSelectProps) {
  const [date, setDate] = useState<Date | undefined>();
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{label}</legend>
      <button
        popoverTarget="rdp-popover"
        className="input input-border w-full "
        style={{ anchorName: "--rdp" } as React.CSSProperties}
      >
        {date ? date.toLocaleDateString() : placeholder}
      </button>
      <div
        popover="auto"
        id="rdp-popover"
        className="dropdown"
        style={{ positionAnchor: "--rdp" } as React.CSSProperties}
      >
        <DayPicker
          className="react-day-picker"
          mode="single"
          selected={date}
          onSelect={setDate}
        />
      </div>
    </fieldset>
  );
}
