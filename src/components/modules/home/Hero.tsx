import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Activity } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-32">
      {/* Decorative background blob */}
      <div className="absolute inset-0 z-0 bg-primary/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px] md:top-20 md:right-20" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Activity className="mr-2 h-4 w-4" />
                Your Health, Our Priority
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl text-foreground">
                Advanced Healthcare <br />
                <span className="text-primary">Made Simple</span>
              </h1>
              <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl">
                Experience world-class medical services from the comfort of your
                home. Connect with top doctors, book appointments, and manage
                your health journey seamlessly.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="w-full sm:w-auto group" asChild>
                <Link href="/consultation">
                  Book an Appointment
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <Link href="/diagnostics">Explore Services</Link>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border mt-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground">50+</h3>
                <p className="text-sm text-muted-foreground">Specialists</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">24/7</h3>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">10k+</h3>
                <p className="text-sm text-muted-foreground">Patients</p>
              </div>
            </div>
          </div>
          
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="aspect-square sm:aspect-[4/3] lg:aspect-square overflow-hidden rounded-2xl bg-muted/30 shadow-xl border border-border flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay pointer-events-none" />
                {/* We use a placeholder image or a nice illustration here */}
                {/* For now we put a placeholder styling, ideally this would be an actual img tag */}
                <div className="text-center p-8">
                   <div className="h-24 w-24 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                     <Activity className="h-12 w-12" />
                   </div>
                   <h3 className="text-xl font-bold mb-2">Modern Care</h3>
                   <p className="text-muted-foreground text-sm">Empowering your health with technology</p>
                </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-background border border-border p-4 shadow-lg flex items-center gap-4">
               <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
               </div>
               <div>
                 <p className="text-sm font-semibold">Live Doctors</p>
                 <p className="text-xs text-muted-foreground">Available now</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
