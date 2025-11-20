<h1>WebSafe</h1>

<h2>Overview</h2>
<p>
WebSafe is a Chrome extension that helps users browse the web safely by analyzing active websites for potential risks. It captures the URL and a screenshot of the current page, then uses AI to detect phishing, scams, or other suspicious activity. Users are immediately alerted with warnings if a website is deemed unsafe, providing an extra layer of protection while browsing.
</p>

<h2>Features</h2>
<ul>
  <li>Detect suspicious or malicious websites in real-time</li>
  <li>Capture the URL and screenshot of the active tab</li>
  <li>AI-powered analysis for phishing, scams, and unsafe content</li>
  <li>Immediate browser notifications and warnings</li>
  <li>Lightweight Chrome extension for seamless integration</li>
</ul>

<h2>Tech Stack</h2>
<ul>
  <li>Frontend / Extension: JavaScript</li>
  <li>Backend API: FastAPI</li>
  <li>AI / ML model integration for website risk analysis</li>
</ul>

<h2>Setup Instructions</h2>

<h3>1. Clone the Repository</h3>
<pre><code>git clone &lt;repository-url&gt;
cd websafe
</code></pre>

<h3>2. Install Backend Dependencies</h3>
<pre><code>pip install -r requirements.txt
</code></pre>

<h3>3. Configure Environment</h3>
<ul>
  <li>Copy <code>.env.example</code> to <code>.env</code>
    <pre><code>cp .env.example .env</code></pre>
  </li>
  <li>Update the <code>.env</code> file with API keys, model paths, or other required configurations.</li>
</ul>

<h3>4. Run the FastAPI Server</h3>
<pre><code>uvicorn main:app --reload
</code></pre>
<p>By default, the API will be available at <a href="http://127.0.0.1:8000">http://127.0.0.1:8000</a></p>

<h3>5. Load Chrome Extension</h3>
<ul>
  <li>Open Chrome and navigate to <code>chrome://extensions/</code></li>
  <li>Enable <strong>Developer mode</strong></li>
  <li>Click <strong>Load unpacked</strong> and select the extension folder</li>
</ul>

<h2>Notes</h2>
<ul>
  <li>Ensure Python and required packages are installed for the backend.</li>
  <li>AI model may require GPU or CPU resources depending on implementation.</li>
  <li>Test the extension thoroughly in different tabs to ensure accurate warnings.</li>
</ul>

<h2>Usage</h2>
<ul>
  <li>Open any website in Chrome</li>
  <li>WebSafe automatically captures the page URL and screenshot</li>
  <li>Receive a warning if the site is detected as suspicious</li>
  <li>Continue browsing safely or avoid risky sites</li>
</ul>
