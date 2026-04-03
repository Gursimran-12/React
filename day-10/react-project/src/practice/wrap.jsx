import withCounter from "./highOrderComponents";
import Demo from "./demo";

const EnhancedDemo = withCounter(Demo);

export default function Wrap() {
  return <EnhancedDemo />;
}