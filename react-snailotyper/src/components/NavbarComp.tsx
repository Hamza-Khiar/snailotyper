import { useState } from "react";

// define your tuples as const so that union types can be generated
// it's mostly useful for METRIC_TYPE so we can switch on the value nicely

const WORDS = "words";
const TIME = "time";
const METRIC_TYPE = [WORDS, TIME] as const;
const SECONDS = [15, 30, 60, 120] as const;
const WORD_COUNT = [10, 25, 50, 100] as const;

// generate a type from your const tuples

type MetricType = typeof METRIC_TYPE[number];
type Second = typeof SECONDS[number];
type WordCount = typeof WORD_COUNT[number];

const MissingCase = (case_: never) => {
  throw new Error(`case ${case_} not implemented`);
};

// a generic selector that takes a const tuple
type SelectorProps<T extends readonly any[]> = {
  options: T;
  setOption: (option: T[number]) => void;
  className: string;
};

// the selector just displays a list of clickable buttons
// and returns the value clicked directly
// (no need to go through event.target and get the value from the DOM element)
function Selector<T extends readonly any[]>({
  className,
  options,
  setOption,
}: SelectorProps<T>) {
  return (
    <ul className={className}>
      {options.map((option: T[number], i: number) => {
        return (
          <li key={i} onClick={() => setOption(option)}>
            <button>{option}</button>
          </li>
        );
      })}
    </ul>
  );
}

// Navbar's only goal is to call onGenText and onSetTimer to pass
// the option selected
type NavbarProps = {
  onGenText: (value: WordCount) => void;
  onSetTimer: (value: Second) => void;
};

export function NavbarTest({ onGenText, onSetTimer }: NavbarProps) {
  // The only state we need to keep track is which option set we are displaying
  const [selectedMetric, setSelectedMetric] = useState<MetricType>(TIME);

  let metricRenderer;
  // switching on const tuple is nice 'cause it tells use if we
  // have every case implemented
  switch (selectedMetric) {
    case WORDS:
      metricRenderer = (
        <Selector
          className="test-param--metrics"
          options={WORD_COUNT}
          setOption={onGenText}
        />
      );
      break;
    case TIME:
      metricRenderer = (
        <Selector
          className="test-param--metrics"
          options={SECONDS}
          setOption={onSetTimer}
        />
      );
      break;
    default:
      // this is a trick so that if you add a metric
      // you'll get warned that it's not implemented
      // MissingCase could go into a util.ts module
      MissingCase(selectedMetric);
  }

  return (
    <div className="flex-layout--nav">
      <Selector
        className="test-param--type"
        options={METRIC_TYPE}
        setOption={setSelectedMetric}
      />
      {metricRenderer}
    </div>
  );
}
