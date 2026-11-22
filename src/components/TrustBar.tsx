import { useFadeIn } from "@/hooks/useFadeIn";

const TrustBar = () => {
  const ref = useFadeIn();

  return (
    <section ref={ref} className="fade-in-section relative z-10 -mt-20">
      <div className="container mx-auto px-6">
        <div className="glass-card p-10 md:p-14 text-center">
          <p className="text-lg md:text-xl text-muted-foreground tracking-wide">
            Registered Polish company <span className="text-primary mx-2">·</span> Wholesale electronics <span className="text-primary mx-2">·</span> Transport across Europe
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
