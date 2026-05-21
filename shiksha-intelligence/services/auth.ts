import * as SecureStore from "expo-secure-store";

const BASE_URL = "http://192.168.0.3:8080/api/v1";

export async function loginUser({
    username,
    password,
}: {
    username: string;
    password: string;
}) {
    try {
        const response = await fetch(
            `${BASE_URL}/auth/login`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    username,
                    password,
                    rememberMe: true,
                    academicYearId: 1,
                }),
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                data?.message || "Login failed"
            );
        }

        // Store tokens securely
        await SecureStore.setItemAsync(
            "accessToken",
            data.accessToken
        );

        await SecureStore.setItemAsync(
            "refreshToken",
            data.refreshToken
        );

        // Store user data
        await SecureStore.setItemAsync(
            "user",
            JSON.stringify(data.userDetailsDto)
        );

        return data;
    } catch (error: any) {
        throw new Error(error.message);
    }
}