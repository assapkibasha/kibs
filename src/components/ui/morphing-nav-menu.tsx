"use client";

import type { Easing, Transition } from "framer-motion";
import { motion, useReducedMotion } from "framer-motion";

export type MorphingNavItem = {
  label: string;
  href: string;
};

const SPRING_CONFIG_TEXT = {
  type: "spring",
  stiffness: 320,
  damping: 32,
  mass: 1.3,
} as Transition;

const EASE_CUBIC_CONFIG = {
  duration: 0.5,
  ease: [0.32, 0.72, 0, 1] as Easing,
} as Transition;

export function MorphingNavMenu({
  items,
  activeHref,
  ariaLabel = "Main navigation",
}: {
  items: MorphingNavItem[];
  activeHref?: string;
  ariaLabel?: string;
}) {
  return (
    <nav className="morph-nav" aria-label={ariaLabel}>
      <ul className="morph-nav-list">
        {items.map((item) => (
          <MorphingNavLink
            active={activeHref === item.href}
            key={item.href}
            item={item}
          />
        ))}
      </ul>
    </nav>
  );
}

function MorphingNavLink({
  active,
  item,
}: {
  active: boolean;
  item: MorphingNavItem;
}) {
  const shouldReduceMotion = useReducedMotion();
  const stillTransition = shouldReduceMotion ? { duration: 0 } : undefined;
  const textTransition = shouldReduceMotion ? stillTransition : SPRING_CONFIG_TEXT;
  const panelTransition = shouldReduceMotion ? stillTransition : EASE_CUBIC_CONFIG;

  return (
    <li className="morph-nav-item">
      <motion.a
        href={item.href}
        className={`morph-nav-link${active ? " is-active" : ""}`}
        aria-label={item.label}
        aria-current={active ? "location" : undefined}
        initial="initial"
        whileHover="hover"
        whileFocus="hover"
        variants={{
          initial: {},
          hover: {},
        }}
      >
        <span className="morph-nav-measure" aria-hidden="true">
          {item.label}
        </span>

        <motion.span
          className="morph-nav-text morph-nav-text-default"
          aria-hidden="true"
          initial={{
            y: 0,
            scale: 1,
            rotate: 0,
          }}
          variants={{
            hover: shouldReduceMotion
              ? {
                  color: "var(--cc-yellow)",
                }
              : {
                  y: -100,
                  scale: 0.5,
                  rotate: -30,
                },
          }}
          transition={textTransition}
        >
          {item.label}
        </motion.span>

        <motion.span
          className="morph-nav-fill morph-nav-fill-accent"
          initial={{
            y: 100,
            rotate: -40,
          }}
          variants={{
            hover: {
              y: 0,
              rotate: 0,
            },
          }}
          transition={panelTransition}
          aria-hidden="true"
        >
          <motion.span
            className="morph-nav-fill morph-nav-fill-ink"
            initial={{
              y: 150,
              rotate: -60,
            }}
            variants={{
              hover: {
                y: 0,
                rotate: 0,
              },
            }}
            transition={panelTransition}
          />
        </motion.span>

        <motion.span
          className="morph-nav-text morph-nav-text-hover"
          aria-hidden="true"
          initial={{
            y: 180,
            rotate: -60,
            scale: 0.5,
          }}
          variants={{
            hover: {
              y: 0,
              rotate: 0,
              scale: 1,
            },
          }}
          transition={textTransition}
        >
          {item.label}
        </motion.span>
      </motion.a>
    </li>
  );
}
