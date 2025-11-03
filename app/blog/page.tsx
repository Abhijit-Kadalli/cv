import Link from "next/link";
import Card, { CardHeader, CardMeta } from "@/components/Card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Abhijit Kadalli",
  description: "Blog by Abhijit Kadalli on EEG, multimodal systems, and ML engineering.",
};

export default function BlogIndex() {
  return (
    <main className="section">
      <div className="container">
        <h1>Blog</h1>
        <p>Notes on applied mathematics, machine learning, and neuroscience.</p>
        <div className="cards">
          <Card href="/blog/posts/telescope-vs-constellation">
            <CardHeader>
              <h3>
                <Link href="/blog/posts/telescope-vs-constellation">
                  The Telescope and the Constellation Map — Why Generalists Matter
                </Link>
              </h3>
              <CardMeta>October 2025</CardMeta>
            </CardHeader>
            <p>
              On specialists vs generalists, base-rate fallacy and PPV, and a personal story from SNN-on-hardware work.
            </p>
          </Card>

          <Card href="/blog/posts/real-time-eeg-lsl">
            <CardHeader>
              <h3>
                <Link href="/blog/posts/real-time-eeg-lsl">
                  Designing Real‑Time EEG Pipelines with LSL
                </Link>
              </h3>
              <CardMeta>October 2025</CardMeta>
            </CardHeader>
            <p>
              Stream alignment, artifact rejection, and low‑latency feature extraction with Lab Streaming Layer.
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
}
