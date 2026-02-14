import logo from "@/assets/logo.jpg";

const WHATSAPP_URL =
  "https://wa.me/917007168730?text=Hi%2C%20I%20visited%20Indian%20Republic%20Canteen%20and%20want%20to%20unlock%20my%20reward";

const steps = [
  { num: "1", text: "Click the button below" },
  { num: "2", text: "Send the pre-filled WhatsApp message" },
  { num: "3", text: "Show the message to staff & enjoy!" },
];

const Index = () => {
  return (
    <main className="min-h-[100dvh] flex flex-col items-center justify-center px-4 py-8 bg-background">
      {/* Logo */}
      <img
        src={logo}
        alt="Indian Republic Canteen logo"
        className="w-28 h-28 rounded-2xl object-cover mb-5 shadow-card"
      />

      {/* Headline */}
      <h1 className="text-2xl sm:text-3xl font-black text-foreground text-center leading-tight mb-1">
        🎁 Get <span className="text-secondary">FREE Dessert</span> Today
      </h1>
      <h2 className="text-xl sm:text-2xl font-bold text-primary text-center mb-2">
        + 10% OFF Your Next Visit
      </h2>
      <p className="text-muted-foreground text-sm text-center mb-6">
        Valid on bills above ₹299
      </p>

      {/* Card */}
      <div className="w-full max-w-sm bg-card rounded-2xl shadow-card p-5 mb-6">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 text-center">
          How it works
        </h3>
        <ol className="space-y-3">
          {steps.map((s) => (
            <li key={s.num} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                {s.num}
              </span>
              <span className="text-foreground text-sm leading-relaxed pt-0.5">
                {s.text}
              </span>
            </li>
          ))}
        </ol>
      </div>

      {/* Urgency */}
      <p className="text-sm font-semibold text-secondary text-center mb-5">
        ⏳ Your 10% discount expires in 72 hours.
      </p>

      {/* CTA */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-sm block text-center bg-primary hover:brightness-110 text-primary-foreground font-bold text-lg py-4 rounded-2xl shadow-cta transition-all active:scale-[0.97]"
      >
        🔓 Unlock My Reward on WhatsApp
      </a>

      {/* Footer */}
      <p className="text-[11px] text-muted-foreground text-center mt-6 max-w-xs leading-relaxed">
        Offer applicable once per customer. Management reserves rights.
      </p>
    </main>
  );
};

export default Index;
