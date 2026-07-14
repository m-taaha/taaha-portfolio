/**
 * Configures global website settings.
 *
 * This file should only contain information
 * about the website itself.
 *
 * It should never contain:
 * - Person information
 * - Theme implementation
 * - Navigation items
 * - Metadata
 */

import type { Theme } from "./theme/index";

export interface Site {
  readonly name: string;
  readonly url: string;
  readonly locale: string;
  readonly defaultTheme: Theme;
  readonly favicon?: string;
  readonly copyright: string;
}


export const site: Site = {
  name: "taaha.dev",
  locale: "en-IN",
  url: "https://taaha.dev",
  defaultTheme: "dark",
  copyright: `© ${new Date().getFullYear()} Mohammad Taaha Ashraf. All rights reserved.`,
};