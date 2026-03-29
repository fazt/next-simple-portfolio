export const dynamic = "force-static";

export const metadata = {
  title: "Contact | Ryan Ray",
  description: "Get in touch with Ryan Ray",
};

function ContactPage() {
  return (
    <section className="min-h-[calc(100vh-10rem)]">
      {/* Header */}
      <div className="text-center mb-14 animate-fade-up" style={{ opacity: 0 }}>
        <p className="section-label">Get In Touch</p>
        <h1
          className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Contact
        </h1>
        <div className="divider-accent mx-auto" />
        <p
          className="text-base max-w-lg mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          Have a project in mind or want to collaborate? Send me a message and
          I'll get back to you as soon as possible.
        </p>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto animate-fade-up stagger-2" style={{ opacity: 0 }}>
        <div className="card-elevated p-8 md:p-12">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>

            {/* Name */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 uppercase tracking-[0.1em]"
                style={{ color: "var(--text-secondary)" }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300"
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                }}
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 uppercase tracking-[0.1em]"
                style={{ color: "var(--text-secondary)" }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300"
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                }}
                placeholder="your@email.com"
              />
            </div>

            {/* Message */}
            <div className="mb-8">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 uppercase tracking-[0.1em]"
                style={{ color: "var(--text-secondary)" }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-y transition-all duration-300"
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                }}
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="relative inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] rounded-full transition-all duration-400 cursor-pointer group text-surface-950 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-dark), var(--accent), var(--accent-light))",
              }}
            >
              Send Message
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
