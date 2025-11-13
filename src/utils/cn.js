// Simple classNames utility for merging class names
export function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}
