import { MapPin, Phone, Mail } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { CustomerQueryForm } from "@/components/contact/CustomerQueryForm";

export default function ContactPage() {
  return (
    <section className="flex min-h-screen flex-col items-center bg-white">
      <Hero
        variant="small"
        title="Contact"
        subtitle="We are here for you. Get in touch with us."
        showButton={false}
        backgroundImage="/hero/franklin-hero.webp"
      />
      <section className="container px-6 2xl:px-0 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-normal text-neutral-900">
              Get in touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div className="text-neutral-600 font-light">
                  <p className="font-medium text-neutral-900 mb-1">Corporate Office</p>
                  <p>401, Jagat Trade Centre</p>
                  <p>Frazer Road</p>
                  <p>Patna - 800 013</p>
                  <p>India</p>
                  <p className="font-medium text-neutral-900 mb-1 mt-4">Showroom</p>
                  <p>One and Only Furniture Pvt Ltd</p>
                  <p>Opp Patliputra Telephone Exchange</p>
                  <p>North Industrial Estate Road</p>
                  <p>Patna - 800 010</p>
                  <p>India</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary" />
                <a
                  href="tel:+919835630940"
                  className="text-neutral-600 font-light hover:text-primary transition-colors"
                >
                  +91 98356 30940 (Get a quote)
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary" />
                <a
                  href="tel:+919031022875"
                  className="text-neutral-600 font-light hover:text-primary transition-colors"
                >
                  +91 90310 22875 (Enquiries)
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary" />
                <a
                  href="mailto:sales@oando.co.in"
                  className="text-neutral-600 font-light hover:text-primary transition-colors"
                >
                  sales@oando.co.in
                </a>
              </div>
            </div>
          </div>

          <div className="bg-neutral-50 p-8 border border-neutral-100">
            <CustomerQueryForm />
          </div>
        </div>
      </section>
    </section>
  );
}

