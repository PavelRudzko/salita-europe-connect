import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const [form, setForm] = useState<ContactForm>({ name: "", company: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.issues.forEach((i) => {
        const key = i.path[0] as keyof ContactForm;
        if (!fieldErrors[key]) fieldErrors[key] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSending(true);
    // Simulate send
    setTimeout(() => {
      setSending(false);
      toast.success("Quote request sent! We'll be in touch shortly.");
      setForm({ name: "", company: "", email: "", message: "" });
      onOpenChange(false);
    }, 1200);
  };

  const update = (key: keyof ContactForm, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-white/[0.06] bg-card/80 backdrop-blur-2xl sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-foreground">Request a Quote</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill in your details and we'll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-2">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground text-sm">Name *</Label>
              <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" className="bg-white/[0.04] border-white/[0.08] focus:border-primary/40" />
              {errors.name && <p className="text-destructive text-xs">{errors.name}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-foreground text-sm">Company</Label>
              <Input id="company" value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Company name" className="bg-white/[0.04] border-white/[0.08] focus:border-primary/40" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground text-sm">Email *</Label>
            <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@company.com" className="bg-white/[0.04] border-white/[0.08] focus:border-primary/40" />
            {errors.email && <p className="text-destructive text-xs">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground text-sm">Message *</Label>
            <Textarea id="message" value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Tell us about your needs..." rows={4} className="bg-white/[0.04] border-white/[0.08] focus:border-primary/40 resize-none" />
            {errors.message && <p className="text-destructive text-xs">{errors.message}</p>}
          </div>

          <Button type="submit" disabled={sending} className="w-full gap-2 py-6 gradient-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20">
            {sending ? "Sending…" : <><Send size={16} /> Send Request</>}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
