import Link from "next/link";
import { HeartPulse, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function PublicFooter() {
  return (
    <footer className="bg-muted pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <HeartPulse className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl text-primary">
                PH Health
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Providing accessible, reliable, and high-quality healthcare services through modern technology. Your health is our priority.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/consultation" className="text-muted-foreground hover:text-primary text-sm transition-colors">Consultations</Link>
              </li>
              <li>
                <Link href="/diagnostics" className="text-muted-foreground hover:text-primary text-sm transition-colors">Diagnostics</Link>
              </li>
              <li>
                <Link href="/health-plans" className="text-muted-foreground hover:text-primary text-sm transition-colors">Health Plans</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/medicine" className="text-muted-foreground hover:text-primary text-sm transition-colors">Order Medicine</Link>
              </li>
              <li>
                <Link href="/ngos" className="text-muted-foreground hover:text-primary text-sm transition-colors">NGO Support</Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Book Lab Test</Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Find a Doctor</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>123 Healthcare Ave, Medical District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>support@phhealth.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} PH Healthcare Management System. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
