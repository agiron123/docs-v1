import React from "react";
import { ReactComponent as CheckIcon } from "../../../icons/check.svg";
import { ReactComponent as CrossIcon } from "../../../icons/cross.svg";

function Icon({ iconName }: { iconName: string }) {
  let IconComponent: SvgComponent;

  switch (iconName) {
    case "check":
      IconComponent = CheckIcon;
      break;
    case "cross":
      IconComponent = CrossIcon;
      break;
    default:
      return <></>;
  }

  return <IconComponent />;
}

export default Icon;
