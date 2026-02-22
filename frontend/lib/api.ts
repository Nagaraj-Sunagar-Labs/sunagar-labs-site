export type ResourceCategory = "SOFTWARE_DEVELOPMENT" | "ARTIFICIAL_INTELLIGENCE";

export type Resource = {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  type: string;
  link: string;
  createdAt: string;
};

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8080";

export async function fetchResources(): Promise<Resource[]> {
  try {
    const response = await fetch(`${apiBaseUrl}/api/resources`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return [];
    }

    return response.json();
  } catch {
    return [];
  }
}

export async function submitContact(payload: ContactPayload): Promise<void> {
  const response = await fetch(`${apiBaseUrl}/api/contacts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    const message = (errorBody && errorBody.message) || "Failed to send message";
    throw new Error(message);
  }
}
