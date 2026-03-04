// Karen Code Inspector — Environment Detection

// Detect if running in TTY (human) or piped (agent)
export function isTTY() {
  return process.stdout.isTTY === true;
}
