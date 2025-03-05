import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, FileCheck } from "lucide-react";

export default function AdminSupport() {
  return (
    <section id="services" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Accompagnement Administratif Complet
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Shield className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Transaction sécurisée</h3>
                    <p className="text-muted-foreground">
                      Protection garantie contre les risques de double vente, pour votre tranquillité d'esprit.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <FileCheck className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Démarches simplifiées</h3>
                    <p className="text-muted-foreground">
                      Nous vous guidons à chaque étape, vous n'avez rien à faire.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 aspect-video rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1681505546695-682d6c1e2c3a"
              alt="Signature de contrat"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
