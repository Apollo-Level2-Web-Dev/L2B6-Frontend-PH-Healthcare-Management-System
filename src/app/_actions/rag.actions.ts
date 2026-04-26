"use server";

import { ingestDoctorsService, queryRagService } from "@/services/rag.services";

// ─── Action: Query RAG ─────────────────────────────────────────────────────────

export interface QueryRagActionResult {
    success: boolean;
    answer?: string;
    sources?: Array<{
        id: string;
        content: string;
        similarity: number;
        metadata?: { name?: string; [key: string]: unknown };
        sourceType?: string;
    }>;
    error?: string;
}

export async function queryRagAction(query: string): Promise<QueryRagActionResult> {
    try {
        const response = await queryRagService({ query });

        if (!response?.data?.answer) {
            return {
                success: false,
                error: "No answer received from AI. Please try again.",
            };
        }

        let answer = response.data.answer;
        
        // If the answer is an object (e.g. { doctors: [...] }), convert it to a readable string
        if (typeof answer === 'object' && answer !== null) {
            if ('doctors' in answer && Array.isArray((answer as any).doctors)) {
                const doctors = (answer as any).doctors;
                answer = `I found ${doctors.length} doctor(s) for you:\n\n` + 
                         doctors.map((d: any) => `- ${d.name} (${d.specialty || d.designation})`).join('\n');
            } else {
                answer = JSON.stringify(answer, null, 2);
            }
        }

        return {
            success: true,
            answer: answer as string,
            sources: response.data.sources ?? [],
        };
    } catch (error: unknown) {
        console.error("[queryRagAction] Error:", error);
        return {
            success: false,
            error: "Failed to reach the AI assistant. Please check your connection and try again.",
        };
    }
}

// ─── Action: Ingest Doctors ────────────────────────────────────────────────────

export interface IngestDoctorsActionResult {
    success: boolean;
    indexedCount?: number;
    message?: string;
    error?: string;
}

export async function ingestDoctorsAction(): Promise<IngestDoctorsActionResult> {
    try {
        const response = await ingestDoctorsService();

        return {
            success: true,
            indexedCount: response.data?.indexedCount,
            message: response.data?.message ?? response.message ?? "Doctors data synced successfully.",
        };
    } catch (error: unknown) {
        console.error("[ingestDoctorsAction] Error:", error);
        return {
            success: false,
            error: "Failed to sync doctor data. Please try again.",
        };
    }
}
