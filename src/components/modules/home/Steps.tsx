import { Search, CalendarDays, Stethoscope, FileText } from "lucide-react";

export default function Steps() {
  const steps = [
    {
      title: "Search Doctor",
      description: "Find the best specialist for your health condition.",
      icon: <Search className="h-8 w-8 text-primary" />,
    },
    {
      title: "Book Appointment",
      description: "Choose a suitable time and book an appointment instantly.",
      icon: <CalendarDays className="h-8 w-8 text-primary" />,
    },
    {
      title: "Get Consultation",
      description: "Consult with the doctor via video call or in-person.",
      icon: <Stethoscope className="h-8 w-8 text-primary" />,
    },
    {
      title: "Receive Prescription",
      description: "Get your digital prescription and order medicines.",
      icon: <FileText className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Follow these simple steps to start your healthcare journey with us.
            It's fast, easy, and secure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line for large screens */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-border -translate-y-1/2 z-0" />
          
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center text-center p-6 bg-background rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center border-4 border-background">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
