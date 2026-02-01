// components/button.css.ts
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../theme/contract.css";

export const button = recipe({
  base: {
    borderRadius: 10,
    padding: "8px 12px",
    border: `1px solid ${vars.ui.border}`,
    background: vars.palette.solid,
    color: vars.palette.contrast,
    outline: "none",
    boxShadow: `0 0 0 0 ${vars.palette.focusRing}`,
    selectors: {
      "&:focus-visible": {
        boxShadow: `0 0 0 4px ${vars.palette.focusRing}`,
      },
    },
  },
  variants: {
    variant: {
      solid: {},
      subtle: {
        background: vars.palette.subtle,
        color: vars.palette.fg,
      },
    },
  },
  defaultVariants: {
    variant: "solid",
  },
});
