import type { CSSProperties, ReactNode } from 'react';

interface ProjectTheme {
  slug: string;
  primaryColor?: string;
  accentColor?: string;
  bgColor?: string;
}

interface ProjectLayoutProps {
  project: ProjectTheme;
  children: ReactNode;
}

/**
 * Wraps project pages with per-project CSS custom property overrides.
 * All derived tokens (hover, shadow via color-mix) auto-recompute
 * through CSS cascade — zero JS recomputation needed.
 */
export function ProjectLayout({ project, children }: ProjectLayoutProps) {
  const overrides: CSSProperties = {};

  if (project.primaryColor) {
    (overrides as Record<string, string>)['--primary'] = project.primaryColor;
  }
  if (project.accentColor) {
    (overrides as Record<string, string>)['--accent'] = project.accentColor;
  }
  if (project.bgColor) {
    (overrides as Record<string, string>)['--bg'] = project.bgColor;
  }

  return (
    <div data-project={project.slug} style={overrides}>
      {children}
    </div>
  );
}
