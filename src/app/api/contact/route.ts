import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: { name?: string; email?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "name, email, and message are required" }, { status: 400 });
  }
  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "field too long" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  const user = process.env.NODE_MAILER_USER;
  const pass = process.env.NODE_MAILER_PASS;
  if (!user || !pass) {
    return NextResponse.json({ error: "mailer not configured" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  const subject = `Portfolio contact — ${name}`;
  const text = `From: ${name} <${email}>\n\n${message}`;
  const html = `
    <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#0a0a0a;">
      <h2 style="margin:0 0 12px;">new message from your portfolio</h2>
      <p style="margin:0 0 4px;"><strong>name:</strong> ${escape(name)}</p>
      <p style="margin:0 0 4px;"><strong>email:</strong> <a href="mailto:${escape(email)}">${escape(email)}</a></p>
      <hr style="border:none;border-top:1px solid #ececec;margin:16px 0;" />
      <p style="margin:0;white-space:pre-wrap;">${escape(message)}</p>
    </div>`;

  try {
    await transporter.sendMail({
      from: `"portfolio" <${user}>`,
      to: user,
      replyTo: `${name} <${email}>`,
      subject,
      text,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact send failed", err);
    return NextResponse.json({ error: "send failed" }, { status: 500 });
  }
}

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
