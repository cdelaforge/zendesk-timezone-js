// Type definitions for typescript

declare module "zendesk-timezone" {
  export function from(timezone: string): string;
  export function to(timezone: string): string;
  export function list(): string[];
}
