import { Button } from "@/components/ui/button";
import { Star, MapPin, Briefcase } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TopDoctors() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Jenkins",
      specialty: "Cardiologist",
      experience: "15 Years",
      location: "New York, USA",
      rating: 4.9,
      reviews: 128,
      imageUrl: "https://i.pravatar.cc/150?u=sarah",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      experience: "12 Years",
      location: "San Francisco, USA",
      rating: 4.8,
      reviews: 95,
      imageUrl: "https://i.pravatar.cc/150?u=michael",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      experience: "8 Years",
      location: "Chicago, USA",
      rating: 4.7,
      reviews: 210,
      imageUrl: "https://i.pravatar.cc/150?u=emily",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Top Rated Doctors
            </h2>
            <p className="text-muted-foreground text-lg">
              Book appointments with some of the most qualified and experienced
              medical professionals.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex" asChild>
            <Link href="/consultation">Show All Doctors</Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <Card key={doctor.id} className="overflow-hidden group flex flex-col h-full border-border">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                {/* Normally an actual <Image /> from next/image, using a standard img for placeholder */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={doctor.imageUrl}
                  alt={doctor.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="flex items-center gap-1 font-semibold bg-white/90 text-black hover:bg-white/90">
                    <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                    {doctor.rating}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold">{doctor.name}</h3>
                <p className="text-primary font-medium">{doctor.specialty}</p>
              </CardHeader>
              
              <CardContent className="flex-grow pb-4">
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    <span>{doctor.experience} Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{doctor.location}</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="pt-0">
                <Button className="w-full" asChild>
                  <Link href={`/consultation/${doctor.id}`}>Book Appointment</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 flex justify-center md:hidden">
            <Button size="lg" className="w-full" variant="outline" asChild>
              <Link href="/consultation">Show All Doctors</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
