import { AuthUser, AuthTokens } from '@/types/auth';

const BASE_URL = 'http://192.168.0.106:8080/api/v1';

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

// TODO: Remove or disable this mock credentials check and constant before going live/production
const MOCK_USERS: Record<string, { password: string; response: LoginResponse }> = {
  student: {
    password: 'password',
    response: {
      accessToken: 'mock-student-access-token',
      refreshToken: 'mock-student-refresh-token',
      requiresPasswordChange: false,
      roles: ['ROLE_STUDENT'],
      userDetailsDto: {
        userId: 1001,
        username: 'student',
        firstName: 'Aarav',
        lastName: 'Sharma',
        email: 'student@shiksha.edu',
        profileUrl: null,
        roles: ['ROLE_STUDENT'],
      },
    },
  },
  teacher: {
    password: 'password',
    response: {
      accessToken: 'mock-teacher-access-token',
      refreshToken: 'mock-teacher-refresh-token',
      requiresPasswordChange: false,
      roles: ['ROLE_TEACHER'],
      userDetailsDto: {
        userId: 1002,
        username: 'teacher',
        firstName: 'Meera',
        lastName: 'Patel',
        email: 'teacher@shiksha.edu',
        profileUrl: null,
        roles: ['ROLE_TEACHER'],
      },
    },
  },
  parent: {
    password: 'password',
    response: {
      accessToken: 'mock-guardian-access-token',
      refreshToken: 'mock-guardian-refresh-token',
      requiresPasswordChange: false,
      roles: ['ROLE_GUARDIAN'],
      userDetailsDto: {
        userId: 1003,
        username: 'parent',
        firstName: 'Rajesh',
        lastName: 'Sharma',
        email: 'parent@shiksha.edu',
        profileUrl: null,
        roles: ['ROLE_GUARDIAN'],
      },
    },
  },
  guardian: {
    password: 'password',
    response: {
      accessToken: 'mock-guardian-access-token',
      refreshToken: 'mock-guardian-refresh-token',
      requiresPasswordChange: false,
      roles: ['ROLE_GUARDIAN'],
      userDetailsDto: {
        userId: 1003,
        username: 'guardian',
        firstName: 'Rajesh',
        lastName: 'Sharma',
        email: 'parent@shiksha.edu',
        profileUrl: null,
        roles: ['ROLE_GUARDIAN'],
      },
    },
  },
  admin: {
    password: 'password',
    response: {
      accessToken: 'mock-admin-access-token',
      refreshToken: 'mock-admin-refresh-token',
      requiresPasswordChange: false,
      roles: ['ROLE_SCHOOL_ADMIN'],
      userDetailsDto: {
        userId: 1004,
        username: 'admin',
        firstName: 'System',
        lastName: 'Administrator',
        email: 'admin@shiksha.edu',
        profileUrl: null,
        roles: ['ROLE_SCHOOL_ADMIN'],
      },
    },
  },
};

/**
 * Sends credentials to the backend and returns raw response data.
 * The caller (authStore.login) is responsible for persisting tokens.
 */
export async function loginUser(creds: {
  username: string;
  password: string;
}): Promise<LoginResponse> {
  const normalizedUsername = creds.username.trim().toLowerCase();
  const mockUser = MOCK_USERS[normalizedUsername];

  if (mockUser && mockUser.password === creds.password) {
    // Simulate minor delay for realistic UX
    await new Promise((resolve) => setTimeout(resolve, 800));
    return mockUser.response;
  }

  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: creds.username,
      password: creds.password,
      rememberMe: true,
      academicYearId: 1,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message ?? 'Login failed. Please check your credentials.');
  }

  return data;
}