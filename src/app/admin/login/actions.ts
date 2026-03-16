"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const password = formData.get("password");
  
  // In a real app, from process.env.ADMIN_PASSWORD. 
  // Using a hardcoded fallback for development presentation.
  const adminPassword = process.env.ADMIN_PASSWORD || "blueagate2026";
  
  if (password === adminPassword) {
    // Set cookie that the middleware looks for
    const cookieStore = await cookies();
    cookieStore.set("blueagate_admin_auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });
    
    redirect("/admin");
  } else {
    return { error: "Senha incorreta." };
  }
}
