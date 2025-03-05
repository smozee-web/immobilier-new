import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Wallet, Clock } from "lucide-react";

export default function FlexiblePayment() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Flexibilité de Paiement : Payez à Votre Rythme
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09"
                alt="Famille heureuse"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Wallet className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Paiement échelonné</h3>
                      <p className="text-muted-foreground">
                        Choisissez de régler votre bien immobilier en plusieurs fois pour une plus grande flexibilité.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Délai jusqu'à 5 ans</h3>
                      <p className="text-muted-foreground">
                        Profitez d'un délai confortable jusqu'à 5 ans pour régulariser le titre foncier de votre bien.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
