import nodemailer from "nodemailer";

type RequestBody = {
  name?: string;
  workEmail?: string;
  company?: string;
  teamSize?: string;
  message?: string;
};

type RequestLike = {
  method?: string;
  body?: RequestBody;
};

type ResponseLike = {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => ResponseLike;
  json: (payload: Record<string, unknown>) => ResponseLike;
};

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export default async function handler(req: RequestLike, res: ResponseLike) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, error: "Method not allowed." });
  }

  const { name, workEmail, company, teamSize, message }: RequestBody = req.body ?? {};
  const fields = {
    name: name?.trim() ?? "",
    workEmail: workEmail?.trim() ?? "",
    company: company?.trim() ?? "",
    teamSize: teamSize?.trim() ?? "",
    message: message?.trim() ?? "",
  };

  if (!fields.name || !fields.workEmail || !fields.company || !fields.teamSize || !fields.message) {
    return res.status(400).json({ success: false, error: "All fields are required." });
  }

  if (!isValidEmail(fields.workEmail)) {
    return res.status(400).json({ success: false, error: "Please provide a valid work email." });
  }

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const receiverEmail = process.env.RECEIVER_EMAIL;

  if (!emailUser || !emailPass || !receiverEmail) {
    return res.status(500).json({ success: false, error: "Email service is not configured." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    await transporter.sendMail({
      from: `"SVMP Systems Website" <${emailUser}>`,
      to: receiverEmail,
      replyTo: fields.workEmail,
      subject: `SVMP Systems demo request - ${fields.company}`,
      text: [
        "New Request demo submission",
        "",
        `Name: ${fields.name}`,
        `Work email: ${fields.workEmail}`,
        `Company: ${fields.company}`,
        `Team size: ${fields.teamSize}`,
        "",
        "What should the rollout cover?",
        fields.message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #1f1d1a; line-height: 1.6;">
          <h2 style="margin-bottom: 16px;">New Request demo submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(fields.name)}</p>
          <p><strong>Work email:</strong> ${escapeHtml(fields.workEmail)}</p>
          <p><strong>Company:</strong> ${escapeHtml(fields.company)}</p>
          <p><strong>Team size:</strong> ${escapeHtml(fields.teamSize)}</p>
          <p><strong>What should the rollout cover?</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(fields.message)}</p>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Thanks. Your request has been sent and we'll review it shortly.",
    });
  } catch (error) {
    console.error("Request demo email failed:", error);
    return res.status(500).json({
      success: false,
      error: "We couldn't send your request just now. Please try again.",
    });
  }
}
