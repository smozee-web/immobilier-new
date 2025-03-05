import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jean-Marc D.",
    content: "Avec VIDELA Group, j'ai acheté mon terrain en toute sécurité. L'accompagnement administratif était clair et rapide, et je n'ai eu aucun souci pour obtenir mon titre foncier."
  },
  {
    name: "Sophie L.",
    content: "J'ai pu financer mon bien immobilier en échelonnant mes paiements. Cela m'a permis de réaliser mon rêve immobilier tout en maîtrisant mon budget."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Des Témoignages Clients Satisfaits
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-lg mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
