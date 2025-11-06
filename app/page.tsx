import Image from "next/image";
import profilePic from "@/public/images/profilepic.png";
import Link from "next/link";
import Card, { CardHeader, CardMeta, CardTags } from "@/components/Card";

export default function Home() {
  return (
    <main id="home">
      {/* Hero Section */}
      <section className="hero" aria-label="Intro">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <h1 className="hero-title">Abhijit Kadalli</h1>
              <p className="hero-subtitle">Researcher — Data and Computational Neuroscience</p>
              <p className="hero-summary">
                I design real-time EEG/signal processing pipelines, synchronize multimodal data streams, and build interpretable ML systems for behavior understanding.
              </p>
              <div className="cta">
                <a href="mailto:abhijitkadalli14@gmail.com" className="btn primary">Email</a>
                <a href="https://github.com/Abhijit-Kadalli" className="btn" rel="me">GitHub</a>
                <a href="https://linkedin.com/in/abhijitkadalli/" className="btn" rel="me">LinkedIn</a>
              </div>
            </div>
            <div className="hero-media">
              <Image src={profilePic} alt="Portrait of Abhijit Kadalli" width={400} height={400} priority />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2>About</h2>
          <p>
            I work at the intersection of neuroscience and machine learning. Recently, I have
            built real-time EEG processing and visualization tools, synchronized data across EEG,
            olfactory and vision streams using LSL, and explored interpretable models including
            LSTM and Bayesian networks to explain behavior. I also work on signal processing, machine learning projects and
            love applied mathematics. Currently, Learning more about Reiminnian Geometry and its applications.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <h2>Experience</h2>
          <div className="cards">
            <Card>
              <CardHeader>
                <h3>Researcher, Data and Computational Neuroscience</h3>
                <CardMeta>Dognosis Private Limited • Bangalore, India • Jul 2024 — Present</CardMeta>
              </CardHeader>
              <ul>
                <li>Designed and deployed real-time EEG pipelines: bandpass filtering, artifact rejection, temporal feature extraction (eg. Hjorth parameters, sample entropy)</li>
                <li>Built LSTM models hitting ~90% recall on behavior change.</li>
                <li>Engineered multimodal synchronization (EEG, sniff triggers, olfactory events, vision) via LSL for precise temporal alignment.</li>
                <li>Created a desktop EEG acquisition and visualization tool with modular paradigms and storage APIs.</li>
              </ul>
              <CardTags tags="EEG • Real-time • LSL • MLflow • Python • React-TSX • Django" />
            </Card>

            <Card>
              <CardHeader>
                <h3>Spiking Neural Networks Research</h3>
                <CardMeta>Fraunhofer-Gesellschaft • Germany • Sep 2023 — Apr 2024</CardMeta>
              </CardHeader>
              <ul>
                <li>Explored SNNs for low-power ECG classification on custom hardware.</li>
              </ul>
              <CardTags tags="SNN • Microprocessors • Python" />
            </Card>

            <Card>
              <CardHeader>
                <h3>Freelance Deep Learning Consultant</h3>
                <CardMeta>Remote • Aug 2023 — May 2024</CardMeta>
              </CardHeader>
              <ul>
                <li>Delivered methods for homography, image registration, image quality assessment, and anomaly detection.</li>
              </ul>
              <CardTags tags="Computer Vision • LLM • Vector DBs • Python" />
            </Card>

            <Card>
              <CardHeader>
                <h3>Data Scientist Intern</h3>
                <CardMeta>Reliance Jio (JSFM – Video Analytics) • Mumbai, India • Dec 2022 — Feb 2023</CardMeta>
              </CardHeader>
              <ul>
                <li>Built YOLO-based object detection and classification for video analytics.</li>
                <li>Wrote augmentation and adaptive tiling pipelines (imgaug) to boost performance.</li>
              </ul>
              <CardTags tags="YOLO • OpenCV • Python • CV" />
            </Card>

            <Card>
              <CardHeader>
                <h3>Runner-up, Goa Police Hackathon</h3>
                <CardMeta>Goa Police • GEC Campus, Ponda • Sep 2022</CardMeta>
              </CardHeader>
              <ul>
                <li>Built a facial recognition web app and backend (Django, FastAPI, MongoDB) for rapid search.</li>
              </ul>
              <CardTags tags="Django • FastAPI • MongoDB • ML" />
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2>Projects</h2>
          <div className="cards">
            <Card>
              <CardHeader>
                <h3>Auto Rapper</h3>
                <CardMeta>Feb 2024 • Python, DSP, WSOLA</CardMeta>
              </CardHeader>
              <p>Converts speech to rap by aligning phonemes and syllables to rhythm using recognition, syllabification, and time-scale modification.</p>
            </Card>

            <Card href="https://github.com/BitNaysh/FitNaysh">
              <CardHeader>
                <h3><a href="https://github.com/BitNaysh/FitNaysh">Fitness App</a></h3>
                <CardMeta>Mar 2023 • Python, OpenCV, Mediapipe, Django</CardMeta>
              </CardHeader>
              <p>Real-time form analysis for exercises (curls, squats, deadlifts). Video streaming via Django StreamingHttpResponse.</p>
            </Card>

            <Card href="https://github.com/Abhijit-Kadalli/Exploiting-Retention">
              <CardHeader>
                <h3><a href="https://github.com/Abhijit-Kadalli/Exploiting-Retention">Exploiting-Retention</a></h3>
                <CardMeta>GitHub • Python</CardMeta>
              </CardHeader>
              <p>AI voiceover reads top Reddit content over slow engaging background video to leverage retention patterns.</p>
            </Card>

            <Card href="https://github.com/Abhijit-Kadalli/Solving-Non-Linear-Equations">
              <CardHeader>
                <h3><a href="https://github.com/Abhijit-Kadalli/Solving-Non-Linear-Equations">Solving-Non-Linear-Equations</a></h3>
                <CardMeta>GitHub • Python</CardMeta>
              </CardHeader>
              <p>Implementations for solving non-linear equations; numeric methods and examples.</p>
            </Card>

            <Card href="https://github.com/Abhijit-Kadalli/Neuromorphic-Classification-For-ECG">
              <CardHeader>
                <h3><a href="https://github.com/Abhijit-Kadalli/Neuromorphic-Classification-For-ECG">Neuromorphic-Classification-For-ECG</a></h3>
                <CardMeta>GitHub • Jupyter Notebook</CardMeta>
              </CardHeader>
              <p>SNN-based ECG classification experiments on neuromorphic-inspired pipelines.</p>
            </Card>

            <Card href="https://github.com/Abhijit-Kadalli/One-Class-SVM-Hyperparam-GridSearch">
              <CardHeader>
                <h3><a href="https://github.com/Abhijit-Kadalli/One-Class-SVM-Hyperparam-GridSearch">One-Class-SVM-Hyperparam-GridSearch</a></h3>
                <CardMeta>GitHub • Python</CardMeta>
              </CardHeader>
              <p>Hyperparameter tuning and training of a One-Class SVM for anomaly detection.</p>
            </Card>

            <Card href="https://github.com/Abhijit-Kadalli/hf-v2-inference-service">
              <CardHeader>
                <h3><a href="https://github.com/Abhijit-Kadalli/hf-v2-inference-service">hf-v2-inference-service</a></h3>
                <CardMeta>GitHub • Python, FastAPI</CardMeta>
              </CardHeader>
              <p>FastAPI proxy for Hugging Face models on Truefoundry; standardizes requests and responses.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div>
              <h3>Languages</h3>
              <p>Python, C/C++, Rust(Learning), Typescript, JavaScript, HTML/CSS, GDscript, C# (Unity)</p>
            </div>
            <div>
              <h3>Frameworks</h3>
              <p>Django, FastAPI, MongoDB, TensorFlow, PyTorch, LangChain, ChromaDB, snnTorch, Git, Docker</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section">
        <div className="container blog-section">
          <h2>Blog</h2>
          <p><Link href="/blog" className="btn">Visit the blog</Link></p>
          <Link href="/blog" className="section-hit" aria-label="Open blog" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2>Contact</h2>
          <p>Open to collaboration and research-driven projects.</p>
          <ul className="contact-list">
            <li><a href="mailto:abhijitkadalli14@gmail.com">abhijitkadalli14@gmail.com</a></li>
            <li><a href="https://www.linkedin.com/in/abhijitkadalli/">LinkedIn</a></li>
            <li><a href="https://github.com/Abhijit-Kadalli">GitHub</a></li>
            <li><a href="https://twitter.com/kadalli_">Twitter</a></li>
          </ul>
        </div>
      </section>
    </main>
  );
}
