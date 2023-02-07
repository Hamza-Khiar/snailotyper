import { MouseEvent, MouseEventHandler, useState } from "react";

interface list<T> {
  list: T[];
  onSetMetricRender?: MouseEventHandler;
  onGenText?: MouseEventHandler;
}

export function NavbarTest({ onGenText }: list<any>) {
  const TEST_PARAM_TYPE = ["words", "time"];

  const SECONDS: number[] = [15, 30, 60, 120];
  const WORD_NUMBERS: number[] = [10, 25, 50, 100];
  const [metric, setMetric] = useState(SECONDS);

  //   setting which metric to use

  function handlMetricRender(e: MouseEvent) {
    switch (e.target.innerText) {
      case "words":
        return setMetric(WORD_NUMBERS);
      case "time":
        return setMetric(SECONDS);
    }
  }
  return (
    <div className="flex-layout--nav">
      <TypeRenderer
        list={TEST_PARAM_TYPE}
        onSetMetricRender={(e) => handlMetricRender(e)}
      />
      <MetricRenderer list={metric} onGenText={onGenText} />
    </div>
  );
}

function TypeRenderer({ list, onSetMetricRender }: list<string>) {
  let mappedType = list.map((param_type: string, i: number) => {
    return (
      <li key={i} onClick={onSetMetricRender}>
        {param_type}
      </li>
    );
  });
  return <ul className="test-param--type">{mappedType}</ul>;
}

function MetricRenderer({ list, onGenText }: list<number>) {
  let mappedMetrics = list.map((num: number, i: number) => {
    return (
      <li key={i} onClick={onGenText}>
        {num}
      </li>
    );
  });

  return <ul className="test-param--metrics">{mappedMetrics}</ul>;
}
