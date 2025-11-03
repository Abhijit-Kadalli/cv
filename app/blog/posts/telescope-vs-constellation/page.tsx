import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Telescope and the Constellation Map — Why Generalists Matter — Abhijit Kadalli",
  description: "An essay on specialists vs generalists, base-rate fallacy, positive predictive value, and a personal story from SNN-on-hardware work.",
};

export default function TelescopePost() {
  return (
    <main className="section blog-post">
      <div className="container">
        <article className="card">
          <header className="card-header">
            <h1>The Telescope and the Constellation Map — Why Generalists Matter</h1>
            <div className="meta">October 2025</div>
          </header>

          <section className="post-section" id="intro">
            <h2>[INTRO]</h2>
            <p>Think about the career advice we all received: "Find your niche. Specialize. Become the go-to expert." And for years, I believed it — until I did not, and all it took was some critical thinking, a.k.a. calling bullshit.</p>
            <p>Here's an analogy to explain the difference: the Telescope vs. the Constellation Map.</p>
            <p>The specialists have a powerful telescope. They can see a single, distant star: one problem, one domain in outstandingly breathtaking detail. They are the world's leading expert on that single source of light.</p>
            <p>The generalist, however, creates a Constellation Map. They understand how all the stars relate to one another, connecting the dots to form patterns, tell stories, and navigate the entire sky to see the bigger picture.</p>
            <p>This isn't just a theory, it's been witnessed throughout history. As someone who works mainly in the domain of machine learning, my favorite example is the rediscovery of the dwarf planet Ceres.</p>
            <p>In 1801, the astronomer Giuseppe Piazzi discovered Ceres, but he lost track of it after a few weeks as it moved too close to the sun's glare. The astronomical community, the specialists with the most powerful telescopes of the day, was stuck. They could look deeper into the void than anyone, but they couldn't find what they'd lost.</p>
            <p>The solution didn't come from a better telescope; it came from a mathematician named Carl Friedrich Gauss. He was a map-maker. He took the limited observational data and, using a mathematical method he developed called the method of least squares, drew the constellation map of Ceres's orbit. He was able to figure out where exactly to tell everyone to look.</p>
            <p>It was a breakthrough that happened not because of a deeper view, but a broader one. In the process, he didn't just solve an astronomy problem; he laid the groundwork for modern statistics and the very field I work in today.</p>
          </section>

          <section className="post-section" id="information-changes-probab">
            <h2>[INFORMATION CHANGES PROBAB]</h2>
            <p>Gauss's breakthrough is a perfect example of a fundamental principle: information changes perceived probability. To see how this works in a modern context, let's walk through a scenario that every data scientist and engineer in the medical field navigates.</p>
            <p>Imagine a serious but rare disease that affects 1% of the population.</p>
            <p>Now, imagine a highly accurate diagnostic test gets developed. This test is 99% accurate at correctly identifying people who have the disease — this metric is called sensitivity. It's also very good at clearing healthy people, but it has a 2% false positive rate, which means 2% of healthy people will incorrectly test positive.</p>
            <p>Suppose you take the test, and your result comes back positive.</p>
            <p><strong>The Specialist's View (The Telescope)</strong></p>
            <p>Your doctor, a specialist looking through the 'telescope' of the test's quality, tells you, "This is a 99% accurate test." Your immediate, intuitive reaction might be panic. The probability that you have the disease feels like it must be around 99%.</p>
            <p>But you're a map-maker. You know that the test result is just one star. To understand its meaning, you need to see the whole constellation, which includes another crucial piece of information: the rarity of the disease itself.</p>
            <p><strong>The Generalist's View (The Constellation Map)</strong></p>
            <p>Let's map this out. Instead of panicking, we do the math. Let's take a representative sample of 10,000 people from our population.</p>
            <p>How many people are actually sick?<br />
            The disease affects 1% of the population, so:<br />
            10,000 * 0.01 = 100 people are sick.</p>
            <p>How many people are healthy?<br />
            The remaining 99% are healthy:<br />
            10,000 * 0.99 = 9,900 people are healthy.</p>
            <p>Now, let's see how our '99% accurate' test performs on both groups.</p>
            <p>How many sick people get a correct positive result?<br />
            The test is 99% sensitive:<br />
            100 sick people * 0.99 = 99 people (True Positives)</p>
            <p>How many healthy people get a falsely positive result?<br />
            The test has a 2% false positive rate:<br />
            9,900 healthy people * 0.02 = 198 people (False Positives)</p>
            <p>Now we get to the crucial insight. To find out what your positive test means, we need to look at the entire pool of people who tested positive.</p>
            <p>The total number of positive tests is 99 (True Positives) + 198 (False Positives) = 297 people.</p>
            <p>So, if you are one of those 297 people with a positive test, what is the actual probability that you are one of the ones who is genuinely sick?</p>
            <p>Probability = (True Positives) / (Total Positives)<br />
            Probability = 99 / 297<br />
            Probability = 1/3 or ~33.3%</p>
          </section>

          <section className="post-section" id="aha">
            <h2>[The "Aha!" Moment]</h2>
            <p>Look what just happened here. Your probability of having the disease isn't 99% — it's 33%.</p>
            <p>The new information, which is the positive test result, was powerful, but its meaning was completely transformed by the prior information, which is the disease's rarity. The specialist focused on the test; the map-maker focused on the system. By connecting just one more piece of data, we moved from near-certain panic to a more accurate, manageable assessment. We didn't just get a better answer; we opened the door for better decisions, targeted follow-on testing, and avoiding unnecessary treatments.</p>
            <p>This isn't just a hypothetical puzzle. This very phenomenon of letting a single, dramatic number obscure the full picture is called the Base Rate Fallacy. The number we should be focused on, the one that provides real clarity, is the Positive Predictive Value (PPV).
            Understanding this distinction is critical.</p>
          </section>

          <section className="post-section" id="personal-section">
            <h2>[personal section]</h2>
            <p>During my undergrad, I had the incredible opportunity to work with a German Institute, Fraunhofer-Gesellschaft. Our team consisted of a professor and a brilliant PhD student whose expertise was in fabricating neuromorphic hardware specialized chips designed to mimic the brain's structure. My role was to handle model training and machine learning.</p>
            <p>Our project was focused on classifying ECG signals using a Spiking Neural Network (SNN). The reason we were using an SNN wasn't just because it was a cool piece of tech. It was about power. Traditional AI models are incredibly power-hungry. An SNN, inspired by the human brain which runs on just a few watts, is wildly efficient. It works in "spikes," turning complex multiplications into simple additions and making it ideal for real world, temporal data. This efficiency is key to building AI that can run for days on a tiny battery.</p>
            <p>And model training is my shiz. I built the SNN, trained it to distinguish between normal and abnormal signals, and even quantized its weights, simplifying the math to make it small and efficient enough to run on a tiny hardware chip. On my screen, everything worked perfectly. The model was great at spotting abnormal heartbeats in a dataset.
            But there was a problem. A big one. The PhD student knew how to actually build the chip, but not how to train the models. I knew how to train the models, but not the deep physics of the hardware. We were two specialists on either side of a gulf, unable to bridge the divide. Our model was designed in a way that the chip couldn't process the ECG signal in real-time. We were facing a classic lab-to-real-world conundrum.</p>
            <p>Fortunately, I have a background in Electrical Engineering and Digital Signal Processing (DSP), and it was time for me to put it to use. With a little digging, I could make out that the problem wasn't just in the code; there was a fundamental mismatch between the AI model's design and the hardware's physical constraints.</p>
            <p>The problem boiled down to memory. The on-chip buffer simply wasn't big enough to hold the entire chunk of ECG data required to perform a convolution in the traditional sense. The standard approach expected to see the whole picture at once, but our hardware couldn't provide it.</p>
            <p>This is where the unique nature of SNNs itself became the solution. They are inherently temporal; they thrive on information that unfolds over time. So, I suggested we lean into that. Instead of fighting the hardware's limitations, we could use the SNN's strengths. I proposed we implement a simple First-In, First-Out (FIFO) queue. As each new ECG sample streamed in, it would be pushed into the queue while the oldest sample was dropped. The convolution would then operate on the contents of this constantly updating queue at any given moment.</p>
            <p>This completely changed the dynamic. It aligned our software architecture with the physical reality of the hardware. We were no longer trying to force a batch-processing model onto a streaming system; we were processing the data in its native, temporal format. It was a solution that came directly from connecting the theory of SNNs with the practical data structures used in signal processing.
            It was a stark reminder that ultimately, even within engineering, there is no room to neglect the broader picture of systems thinking in favor of optimizing technology at the granular level.
            Looking back, this was exactly the kind of problem that two powerful telescopes, each in isolation, could not solve. Both my teammate and I saw our individual stars with remarkable clarity, but the problem that we needed to solve lay in the blackness of space between them. Neither of our instruments alone could tackle it.</p>
          </section>

          <section className="post-section" id="conclusions">
            <h2>[Conclusions]</h2>
            <p>In the end, both the telescope and the constellation map are necessary. Specialists drive depth; generalists drive integration. The best teams, the best solutions, and the best careers are built when both perspectives collaborate.</p>
            <p>But if you're still deciding which path to take, consider this: the world is full of specialists. There are always more telescopes being built. What we actually need are more map-makers — people who can see not just the stars, but the stories they tell together.</p>
          </section>

          <p style={{ marginTop: '2rem' }}>
            <Link href="/blog" className="btn">← Back to Blog</Link>
          </p>
        </article>
      </div>
    </main>
  );
}
