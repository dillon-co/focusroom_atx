import type { Metadata } from "next";
import Legal from "../legal";

export const metadata: Metadata = { title: "Privacy | The Focus Room", alternates: { canonical: "/privacy" } };

export default function Privacy() {
  return (
    <Legal
      title="Privacy."
      updated="October 2026"
      intro="The Focus Room is a private training room in East Austin. This policy covers thefocusroomatx.com. It’s written plainly on purpose, because this site collects very little."
      sections={[
        ["What this site collects", "There’s no account system and no newsletter signup. The one form on the site is the application, described below. The site doesn’t set advertising cookies. We may use Vercel Analytics, which is cookieless and doesn’t identify you, and Google Analytics, to see which pages are visited and how people find the site. Fonts are served from this site, not from an outside font service."],
        ["When you apply or contact us", "When you apply, we hold what you send: your name, contact details, birthday, address and your answers about your goals and training. We use it to read your application, reply to you and arrange a conversation. Applications go to the customer relationship platform we use for email and text messages. While you fill in the form, your answers are saved in your own browser so a refresh doesn’t lose them, and they’re cleared once the application is sent. If you email or call us, the same applies to what you tell us. We don’t sell it, rent it or share it for marketing."],
        ["Email and text messages", "Applying means we may email you about your application and about The Focus Room. Every marketing email includes an unsubscribe link. We send text messages only if you give us your number and check the box agreeing to receive them. Message and data rates may apply, and message frequency varies. Reply STOP at any time to opt out, or HELP for help. Consent to texts is never a condition of membership."],
        ["Hosting and server logs", "The site is hosted by Vercel. Like nearly every web host, Vercel keeps standard technical logs such as IP address, browser type and pages requested. They exist for security, reliability and performance, and we don’t use them to build a profile of you."],
        ["Links to other places", "This site links to Instagram and to jarredcurcio.com. Once you follow a link away from here, that site’s own privacy policy applies, not this one."],
        ["Children", "This site is for adults and isn’t directed at children under thirteen."],
        ["Your choices", "If you’ve applied or emailed us and want to know what we hold, or want it deleted, write to us and we’ll do it."],
        ["Changes", "If how we handle information changes, this page is updated before the change goes live, and the date at the top changes with it."],
        ["Contact", "The Focus Room, 2709 East 5th Street, Suite 110A, Austin, Texas 78702. Email jarred@truefitnessatx.com or call (512) 230-1027."],
      ]}
    />
  );
}
