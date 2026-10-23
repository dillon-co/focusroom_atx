import type { Metadata } from "next";
import Legal from "../legal";

export const metadata: Metadata = { title: "Terms | The Focus Room", alternates: { canonical: "/terms" } };

export default function Terms() {
  return (
    <Legal
      title="Terms."
      updated="August 2026"
      intro="These terms cover your use of thefocusroomatx.com. By using the site you accept them. If you don’t, please don’t use the site."
      sections={[
        ["What this site is", "This site describes The Focus Room and how we train. It’s informational. Nothing here is an offer of sale, and nothing here creates a membership, a booking or a contract of any kind. Membership begins with a conversation and is arranged directly with us."],
        ["No pricing on this site", "We don’t publish rates, run checkouts or offer trials here. Membership terms are agreed in person, and only what we put in writing to you directly is binding."],
        ["Health and training", "Nothing on this site is medical advice. Strength training and conditioning carry an inherent risk of injury. Speak with a qualified physician before starting any training program, particularly if you have an existing condition or injury. You’re responsible for training within your own limits."],
        ["Accuracy", "The space isn’t open yet, and parts of this site show renders and in-progress photography rather than finished rooms. We describe what we’re building in good faith, and details may change as it’s completed."],
        ["Our content", "The Focus Room name, wordmark, photography and written content on this site belong to The Focus Room unless stated otherwise. Please don’t reproduce them commercially without permission. Third-party names and logos that appear incidentally in photographs remain the property of their owners."],
        ["Links out", "We link to other sites, including jarredcurcio.com and Instagram. We don’t control those and aren’t responsible for their content."],
        ["Availability", "We aim to keep the site up and correct, but we don’t guarantee it will always be available or free of error, and we aren’t liable for loss arising from its use."],
        ["Governing law", "These terms are governed by the laws of the State of Texas."],
        ["Contact", "The Focus Room, 2709 East 5th Street, Suite 110A, Austin, Texas 78702. Email jarred@truefitnessatx.com or call (512) 230-1027."],
      ]}
    />
  );
}
