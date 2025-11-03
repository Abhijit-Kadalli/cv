import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Designing Real‑Time EEG Pipelines with LSL — Abhijit Kadalli",
  description: "Stream alignment, artifact rejection, and low‑latency feature extraction with Lab Streaming Layer.",
};

export default function EEGPost() {
  return (
    <main className="section blog-post">
      <div className="container">
        <article className="card">
          <header className="card-header">
            <h1>Designing Real‑Time EEG Pipelines with LSL</h1>
            <div className="meta">October 2025</div>
          </header>

          <section className="post-section">
            <p>
              When you're working with EEG data streams—especially in a real-time setup where multiple modalities converge—Lab Streaming Layer (LSL) becomes indispensable. In this post, I'll walk through how I designed a real-time EEG processing pipeline that synchronizes across modalities (vision, olfaction, and triggers), performs artifact rejection, and extracts temporal features—all with minimal latency.
            </p>
          </section>

          <section className="post-section">
            <h2>The Challenge: Multimodal Synchronization</h2>
            <p>
              In behavioral neuroscience experiments, data streams arrive from different sources at different rates:
            </p>
            <ul>
              <li>EEG at 500 Hz (or higher)</li>
              <li>Sniff triggers at irregular intervals</li>
              <li>Olfactory event markers</li>
              <li>Vision timestamps from cameras</li>
            </ul>
            <p>
              The core problem? Getting all these streams to agree on a single, shared timeline. That's where LSL's network-based time synchronization shines.
            </p>
          </section>

          <section className="post-section">
            <h2>Architecture Overview</h2>
            <p>The pipeline consists of three main stages:</p>
            <ol>
              <li><strong>Stream Acquisition:</strong> LSL inlets pull data from multiple outlets with automatic clock synchronization</li>
              <li><strong>Preprocessing:</strong> Bandpass filtering (0.5-50 Hz), artifact rejection using amplitude thresholds and gradient checks</li>
              <li><strong>Feature Extraction:</strong> Temporal features including Hjorth parameters (activity, mobility, complexity) and sample entropy</li>
            </ol>
          </section>

          <section className="post-section">
            <h2>Implementation Details</h2>
            <p>
              Here's how the real-time processing unfolds:
            </p>
            <ul>
              <li><strong>Buffering Strategy:</strong> Maintain a sliding window (e.g., 2 seconds) that updates with every new chunk</li>
              <li><strong>Filter Design:</strong> Butterworth bandpass with minimal phase distortion</li>
              <li><strong>Artifact Detection:</strong> Reject epochs where voltage exceeds ±100 μV or gradient exceeds a threshold</li>
              <li><strong>Feature Computation:</strong> Calculate Hjorth parameters and entropy metrics on clean epochs</li>
              <li><strong>Downstream ML:</strong> Features fed into an LSTM model for behavior prediction (~90% recall)</li>
            </ul>
          </section>

          <section className="post-section">
            <h2>Key Takeaways</h2>
            <ul>
              <li>LSL's time synchronization is rock-solid for multimodal setups</li>
              <li>Real-time artifact rejection is crucial—don't let bad epochs poison your features</li>
              <li>Temporal features (Hjorth, entropy) capture dynamics that frequency-domain features miss</li>
              <li>Keep latency low: process in chunks, but don't let buffer sizes balloon</li>
            </ul>
          </section>

          <section className="post-section">
            <h2>Tools Used</h2>
            <p>Python • LSL (pylsl) • SciPy • NumPy • PyTorch (LSTM)</p>
          </section>

          <p style={{ marginTop: '2rem' }}>
            <Link href="/blog" className="btn">← Back to Blog</Link>
          </p>
        </article>
      </div>
    </main>
  );
}
