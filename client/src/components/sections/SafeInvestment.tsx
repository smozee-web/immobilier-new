import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Percent, LineChart } from "lucide-react";

export default function SafeInvestment() {
  return (
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Investissez en Toute Sécurité
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Percent className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Commission transparente</h3>
                      <p className="text-muted-foreground">
                        Commission fixe de 10% sur le prix du bien immobilier, avec un intérêt de 10% par an en cas de paiement échelonné.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <LineChart className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Frais fixes et transparents</h3>
                      <p className="text-muted-foreground">
                        Aucune mauvaise surprise, tous nos frais sont clairement définis dès le début.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
                alt="Agent immobilier professionnel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
