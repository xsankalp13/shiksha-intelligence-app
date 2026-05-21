export type UserRole =
  | 'GUARDIAN'
  | 'STUDENT'
  | 'TEACHER'
  | 'ADMIN'
  | 'PRINCIPAL'
  | 'GUARD';

export interface AuthUser {
  id: number;
  name: string;
  username: string;
  email: string;
  roles: UserRole[];       // backend sends roles: ["ADMIN"]
  tokenExpiresAt: number;  // unix ms — calculated at login time
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string | null;
}

// Derive the primary (highest-priority) role from the roles array.
// In multi-role future scenarios the first role wins.
export function getPrimaryRole(user: AuthUser): UserRole {
  return user.roles[0];
}

/**
 * Normalise a raw role string from the backend.
 * Strips the Spring Boot "ROLE_" prefix, upper-cases, then applies
 * any backend-to-app name mappings.
 *
 * Backend DB names → App UserRole:
 *   "ROLE_ADMIN"          → "ADMIN"
 *   "ROLE_STUDENT"        → "STUDENT"
 *   "ROLE_TEACHER"        → "TEACHER"
 *   "ROLE_GUARDIAN"       → "GUARDIAN"
 *   "ROLE_PRINCIPAL"      → "PRINCIPAL"
 *   "ROLE_SECURITY_GUARD" → "GUARD"
 */
const ROLE_MAP: Record<string, UserRole> = {
  ADMIN:          'ADMIN',
  STUDENT:        'STUDENT',
  TEACHER:        'TEACHER',
  GUARDIAN:       'GUARDIAN',
  PRINCIPAL:      'PRINCIPAL',
  SECURITY_GUARD: 'GUARD',   // ← backend uses SECURITY_GUARD, app uses GUARD
};

export function normalizeRole(raw: string): UserRole {
  const stripped = raw.toUpperCase().replace(/^ROLE_/, '');
  return ROLE_MAP[stripped] ?? (stripped as UserRole);
}

// Map backend role strings to display-friendly labels
export const ROLE_LABELS: Record<UserRole, string> = {
  GUARDIAN:  'Guardian',
  STUDENT:   'Student',
  TEACHER:   'Teacher',
  ADMIN:     'Administrator',
  PRINCIPAL: 'Principal',
  GUARD:     'Security Guard',
};

// Map backend role strings to emoji icons
export const ROLE_ICONS: Record<UserRole, string> = {
  GUARDIAN:  '👪',
  STUDENT:   '🎒',
  TEACHER:   '🧑‍🏫',
  ADMIN:     '🏛️',
  PRINCIPAL: '🎓',
  GUARD:     '🛡️',
};
