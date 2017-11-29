import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "package1";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);