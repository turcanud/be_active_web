import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {useTranslations} from "next-intl";
import {
  CalendarCheck,
  MapPin,
  Trophy,
  Users,
  Building2,
  TrendingUp,
} from "lucide-react";
import SportsList from "./SportsList";
import {Link} from "@/i18n/navigation";

export default function LandingContent() {
  const t = useTranslations();

  const customerFeatures = [
    {
      icon: CalendarCheck,
      title: "Easy Booking",
      description:
        "Book your favorite sports fields and training sessions in just a few clicks",
    },
    {
      icon: MapPin,
      title: "Find Nearby",
      description:
        "Discover sports facilities near you with our smart location finder",
    },
    {
      icon: Trophy,
      title: "Multiple Sports",
      description:
        "Access fields for football, basketball, tennis, MMA, boxing, and more",
    },
  ];

  const businessFeatures = [
    {
      icon: Building2,
      title: "List Your Facility",
      description:
        "Register your sports facility and reach thousands of active customers",
    },
    {
      icon: Users,
      title: "Manage Bookings",
      description:
        "Easily manage reservations, schedules, and customer communications",
    },
    {
      icon: TrendingUp,
      title: "Grow Your Business",
      description:
        "Increase revenue by maximizing your facility's booking potential",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 md:px-10 lg:px-20 h-[55vh] flex items-center justify-center">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-background to-primary/10 -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))] -z-10" />

        {/* Glass Card Container */}
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-background/95 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Your Sports. Your Time. Your Field.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground/90 mb-8 max-w-3xl mx-auto">
              The ultimate platform connecting sports enthusiasts with premium
              facilities. Book sessions or list your venue with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
                asChild>
                <Link href="/browse">Find a Field</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-background/90 border-primary/30 hover:bg-background transition-all duration-300"
                asChild>
                <Link href="/list-facility">List Your Facility</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section className="px-4 py-16 sm:px-6 md:px-10 lg:px-20">
        <SportsList />
      </section>

      {/* Customer Features */}
      <section className="relative px-4 py-16 sm:px-6 md:px-10 lg:px-20">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent -z-10" />

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              For Sports Enthusiasts
            </h2>
            <p className="text-lg text-muted-foreground/80">
              Everything you need to stay active and book your next game
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {customerFeatures.map((feature) => (
              <Card
                key={feature.title}
                className="bg-background/95 border border-white/10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1 group">
                <CardHeader>
                  <feature.icon className="h-12 w-12 mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground/80">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Features */}
      <section className="relative px-4 py-16 sm:px-6 md:px-10 lg:px-20">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-primary/5 to-transparent -z-10" />

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              For Facility Owners
            </h2>
            <p className="text-lg text-muted-foreground/80">
              Grow your business with our powerful booking platform
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {businessFeatures.map((feature) => (
              <Card
                key={feature.title}
                className="bg-background/95 border border-white/10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1 group">
                <CardHeader>
                  <feature.icon className="h-12 w-12 mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground/80">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
