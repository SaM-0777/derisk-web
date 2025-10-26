import { db } from "@/db";
import { policyTemplate, userPolicy } from "@/db/schema/policy";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ policy_id: string }> }
) {
  try {
    const body = await request.json();
    const tokenId = body.tokenId;
    const { policy_id: policyId } = await params;

    // get user policy with based on the policy id and token id
    const [policy] = await db
      .select()
      .from(policyTemplate)
      .where(eq(policyTemplate.policyId, policyId))
      .limit(1);

    if (!policy?.id) {
      return NextResponse.json({ error: "Invalid policy" }, { status: 400 });
    }

    const updated = await db
      .update(userPolicy)
      .set({
        claimStatus: "claimed",
      })
      .where(
        and(
          eq(userPolicy.tokenId, tokenId),
          eq(userPolicy.policyTemplateSlug, policy.slug)
        )
      )
      .returning();

    return NextResponse.json(updated, {
      status: 200,
    });
  } catch (error) {
    console.error(`src.app.api.[policy_id].route.error ${error}`);
    return NextResponse.json(
      {
        error: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}
