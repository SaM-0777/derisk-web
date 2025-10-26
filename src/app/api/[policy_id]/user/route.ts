import { db } from "@/db";
import { policyTemplate, userPolicy } from "@/db/schema/policy";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ policy_id: string }> }
) {
  try {
    const { policy_id } = await params;

    const users = await db
      .select()
      .from(userPolicy)
      .innerJoin(
        policyTemplate,
        eq(policyTemplate.slug, userPolicy.policyTemplateSlug)
      )
      .where(
        and(
          eq(userPolicy.claimStatus, "active"),
          eq(userPolicy.status, "verified"),
          eq(policyTemplate.policyId, policy_id)
        )
      );

    return NextResponse.json(users, {
      status: 200,
    });
  } catch (error) {
    console.error(`src.app.api.policy.[policy_id].user.route.error ${error}`);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
