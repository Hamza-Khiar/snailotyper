export function NavbarTest() {
  const SECONDS: number[] = [15, 30, 60, 120];
  const WORD_NUMBERS: number[] = [10, 25, 50, 100];
  return (
    <div className="flex-layout--nav">
      <ul className="test-param--type"></ul>
      <ul className="test-param--metrics"></ul>
    </div>
  );
}
