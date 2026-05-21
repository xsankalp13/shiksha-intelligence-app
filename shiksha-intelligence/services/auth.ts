import { AuthUser, AuthTokens } from '@/types/auth';

const BASE_URL = 'http://192.168.0.3:8080/api/v1';

/**
 * Matches the Java LoginResponse record exactly:
 *   record LoginResponse(
 *     String accessToken, String refreshToken,
 *     UserDetailsDto userDetailsDto,
 *     Set<String> roles,           ← top-level, values like "ROLE_ADMIN"
 *     boolean requiresPasswordChange
 *   )
 */
export interface LoginResponse {
  accessToken: string;
  refreshToken: string | null;
  requiresPasswordChange: boolean;
  /** Top-level roles — e.g. ["ROLE_ADMIN", "ROLE_SECURITY_GUARD"] */
  roles: string[];
  userDetailsDto: {
    userId: number;          // Java field: userId (not id)
    username: string;
    firstName: string | null;
    lastName: string | null;
    email: string;
    profileUrl: string | null;
    roles: string[];         // same role strings on the DTO too
  };
}

/**
 * Sends credentials to the backend and returns raw response data.
 * The caller (authStore.login) is responsible for persisting tokens.
 */
export async function loginUser(creds: {
  username: string;
  password: string;
}): Promise<LoginResponse> {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username:       creds.username,
      password:       creds.password,
      rememberMe:     true,
      academicYearId: 1,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message ?? 'Login failed. Please check your credentials.');
  }

  return data;
}